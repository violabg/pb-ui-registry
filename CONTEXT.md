# Context

## Domain Vocabulary

- **Registry Item**: A shadcn-installable UI entry declared in `lib/registry.ts`, including metadata, files, npm dependencies, and Registry Dependencies.
- **Registry File**: A source file attached to a Registry Item with a registry file type, source path, optional install target, and optional loaded content.
- **Registry Dependency**: A local Registry Item required by another Registry Item so the shadcn CLI installs imported UI Modules together.
- **Category**: A controlled metadata tag used to describe and browse Registry Items.
- **Example**: A rendered demo paired with source code for a Registry Item in the component browser.
- **RHF Field**: A React Hook Form field Module, usually installed through the RHF registry entries and coordinated by `BaseController` when possible.
- **Sidebar Section**: A browse-page grouping for Registry Items, currently split into React Hook Form and Base Components.
