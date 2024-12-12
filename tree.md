# Project Tree

.
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── apps
│   ├── docs
│   │   ├── README.md
│   │   ├── app
│   │   │   ├── favicon.ico
│   │   │   ├── fonts
│   │   │   │   ├── GeistMonoVF.woff
│   │   │   │   └── GeistVF.woff
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   ├── page.module.css
│   │   │   └── page.tsx
│   │   ├── next-env.d.ts
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   ├── public
│   │   │   ├── file-text.svg
│   │   │   ├── globe.svg
│   │   │   ├── next.svg
│   │   │   ├── vercel.svg
│   │   │   └── window.svg
│   │   └── tsconfig.json
│   ├── nest-demo
│   │   ├── Dockerfile
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── app.controller.d.ts
│   │   │   ├── app.controller.js
│   │   │   ├── app.controller.js.map
│   │   │   ├── app.module.d.ts
│   │   │   ├── app.module.js
│   │   │   ├── app.module.js.map
│   │   │   ├── app.service.d.ts
│   │   │   ├── app.service.js
│   │   │   ├── app.service.js.map
│   │   │   ├── config
│   │   │   │   ├── database.config.d.ts
│   │   │   │   ├── database.config.js
│   │   │   │   └── database.config.js.map
│   │   │   ├── entities
│   │   │   │   ├── example.entity.d.ts
│   │   │   │   ├── example.entity.js
│   │   │   │   └── example.entity.js.map
│   │   │   ├── example
│   │   │   │   ├── example.controller.d.ts
│   │   │   │   ├── example.controller.js
│   │   │   │   └── example.controller.js.map
│   │   │   ├── main.d.ts
│   │   │   ├── main.js
│   │   │   ├── main.js.map
│   │   │   └── tsconfig.build.tsbuildinfo
│   │   ├── env
│   │   ├── nest-cli.json
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── app.controller.spec.ts
│   │   │   ├── app.controller.ts
│   │   │   ├── app.module.ts
│   │   │   ├── app.service.ts
│   │   │   ├── config
│   │   │   │   └── database.config.ts
│   │   │   ├── entities
│   │   │   │   └── example.entity.ts
│   │   │   ├── example
│   │   │   │   └── example.controller.ts
│   │   │   └── main.ts
│   │   ├── test
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── jest-e2e.json
│   │   ├── tsconfig.build.json
│   │   └── tsconfig.json
│   └── web
│       ├── README.md
│       ├── app
│       │   ├── favicon.ico
│       │   ├── fonts
│       │   │   ├── GeistMonoVF.woff
│       │   │   └── GeistVF.woff
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   ├── page.module.css
│       │   └── page.tsx
│       ├── next-env.d.ts
│       ├── next.config.mjs
│       ├── package.json
│       ├── public
│       │   ├── file-text.svg
│       │   ├── globe.svg
│       │   ├── next.svg
│       │   ├── vercel.svg
│       │   └── window.svg
│       └── tsconfig.json
├── configs
│   └── README.md
├── docker
│   ├── README.md
│   ├── compose
│   │   ├── base.yml
│   │   ├── development.yml
│   │   ├── override.yml
│   │   ├── production.yml
│   │   └── staging.yml
│   ├── env
│   ├── scripts
│   │   ├── cleanup.sh
│   │   ├── rebuild.sh
│   │   └── run_all.sh
│   └── services
│       ├── db
│       │   ├── Dockerfile
│       │   └── init.sql
│       ├── rabbitmq
│       │   └── Dockerfile
│       └── redis
│           └── Dockerfile
├── documentation
│   └── README.md
├── mermaid
│   └── README.md
├── package.json
├── packages
│   ├── constants
│   ├── eslint-config
│   │   ├── README.md
│   │   ├── library.js
│   │   ├── next.js
│   │   ├── package.json
│   │   └── react-internal.js
│   ├── typescript-config
│   │   ├── base.json
│   │   ├── nextjs.json
│   │   ├── package.json
│   │   └── react-library.json
│   ├── ui
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── code.tsx
│   │   ├── tsconfig.json
│   │   ├── tsconfig.lint.json
│   │   └── turbo
│   │       └── generators
│   │           ├── config.ts
│   │           └── templates
│   │               └── component.hbs
│   └── utils
│       ├── dist
│       │   ├── index.d.ts
│       │   ├── index.d.ts.map
│       │   ├── index.js
│       │   └── math
│       │       ├── add.d.ts
│       │       ├── add.d.ts.map
│       │       ├── add.js
│       │       ├── index.d.ts
│       │       ├── index.d.ts.map
│       │       ├── index.js
│       │       ├── subtract.d.ts
│       │       ├── subtract.d.ts.map
│       │       └── subtract.js
│       ├── package.json
│       ├── src
│       │   ├── index.ts
│       │   ├── math
│       │   │   ├── add.ts
│       │   │   ├── index.ts
│       │   │   └── subtract.ts
│       │   └── string
│       └── tsconfig.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── scripts
│   └── README.md
├── tests
│   └── README.md
├── tools
│   └── READMD.md
└── turbo.json
