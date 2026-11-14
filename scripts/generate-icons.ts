/**
 * Generates the site icons from a single SVG design.
 *
 *   app/icon.svg        – scalable favicon for modern browsers
 *   app/favicon.ico     – 16/32/48 px fallback for legacy browsers & tools
 *   app/apple-icon.png  – 180 px iOS home-screen icon (full-bleed)
 *
 * Next.js picks these files up automatically via its metadata file
 * conventions, so no <link> tags are needed in the layout.
 *
 * Run with `pnpm icons:build`.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const APP = path.join(ROOT, "app");

// Brand colors from app/globals.css, converted from oklch to sRGB hex
// (SVG favicons and ICO files can't rely on CSS variables or oklch).
const PRIMARY = "#7d45ff"; // --primary   oklch(56.989% 0.25512 289.471)
const NEON_BLUE = "#0670ef"; // --neon-blue oklch(0.57 0.21 258.25)

// The ⌘ glyph from components/logo.tsx (lucide "command"), 24×24 viewBox.
const GLYPH =
  "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3";

type IconOptions = {
  /** Corner radius of the tile in a 64-unit canvas; 0 = full-bleed square. */
  radius: number;
  /** Glyph scale relative to its 24-unit viewBox. */
  glyphScale: number;
  /** Glyph stroke width in its own 24-unit space. */
  strokeWidth: number;
};

function iconSvg({ radius, glyphScale, strokeWidth }: IconOptions) {
  const offset = 32 - 12 * glyphScale;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${PRIMARY}"/>
      <stop offset="1" stop-color="${NEON_BLUE}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.2" cy="0.1" r="0.9">
      <stop offset="0" stop-color="#fff" stop-opacity="0.35"/>
      <stop offset="0.6" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="64" height="64" rx="${radius}" fill="url(#bg)"/>
  <rect width="64" height="64" rx="${radius}" fill="url(#glow)"/>
  ${
    // Hairline inner edge for the rounded tile; it would read as a frame on
    // the full-bleed variant once iOS masks the corners.
    radius > 0
      ? `<rect x="0.75" y="0.75" width="62.5" height="62.5" rx="${radius - 0.75}" fill="none" stroke="#fff" stroke-opacity="0.18" stroke-width="1.5"/>`
      : ""
  }
  <path d="${GLYPH}" transform="translate(${offset} ${offset}) scale(${glyphScale})" fill="none" stroke="#fff" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
}

/** Packs PNG buffers into a single .ico (PNG-compressed entries, Vista+). */
function toIco(images: { size: number; png: Buffer }[]) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const entries: Buffer[] = [];
  let offset = 6 + 16 * images.length;

  for (const { size, png } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // palette colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += png.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.png)]);
}

const render = (svg: string, size: number) =>
  sharp(Buffer.from(svg), { density: 72 * (size / 64) * 4 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();

async function main() {
  // Rounded tile with a large, heavy glyph so it stays legible in a browser tab.
  const tab = iconSvg({ radius: 14, glyphScale: 2, strokeWidth: 2.4 });
  // Bolder variant for the tiny raster sizes, where thin strokes blur out.
  const tiny = iconSvg({ radius: 14, glyphScale: 2.1, strokeWidth: 2.9 });
  // iOS applies its own rounded mask, so the touch icon is full-bleed with
  // more breathing room around the glyph.
  const touch = iconSvg({ radius: 0, glyphScale: 1.55, strokeWidth: 2.1 });

  fs.writeFileSync(path.join(APP, "icon.svg"), tab);

  const ico = toIco(
    await Promise.all(
      [16, 32, 48].map(async (size) => ({
        size,
        png: await render(size <= 32 ? tiny : tab, size),
      })),
    ),
  );
  fs.writeFileSync(path.join(APP, "favicon.ico"), ico);

  fs.writeFileSync(path.join(APP, "apple-icon.png"), await render(touch, 180));

  console.log("✔ Wrote app/icon.svg, app/favicon.ico, app/apple-icon.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
