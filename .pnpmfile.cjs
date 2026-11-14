// typescript-eslint cannot load TypeScript 7 yet: TS 7.0 ships without the JS
// API (a new one is planned for 7.1). The project itself compiles with
// `typescript@7`; only the lint toolchain below is given the official TS 6 API
// package (`@typescript/typescript6`) in place of its `typescript` peer.
//
// Delete this file once typescript-eslint supports TS 7:
// https://github.com/typescript-eslint/typescript-eslint/issues/10940
const TS6_API = "npm:@typescript/typescript6@^6.0.2";

const needsTs6Api = (name) =>
  name === "typescript-eslint" ||
  name === "ts-api-utils" ||
  name.startsWith("@typescript-eslint/");

function readPackage(pkg) {
  if (needsTs6Api(pkg.name) && pkg.peerDependencies?.typescript) {
    delete pkg.peerDependencies.typescript;
    if (pkg.peerDependenciesMeta) delete pkg.peerDependenciesMeta.typescript;
    pkg.dependencies = { ...pkg.dependencies, typescript: TS6_API };
  }
  return pkg;
}

module.exports = { hooks: { readPackage } };
