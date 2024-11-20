# Car Dealer App

### Created by Denys Karlinskyi with using Next.js

## Getting Started

1. Clone repository
2. Install dependencies

```bash
npm install
```

3. Configure next.config.ts:
   - `output`: isProduction ? 'export' : 'standalone' - currently setuped for output static routes for production, you can remove this option or leave as it is.
   - `basePath`: isProduction ? GH_REPOSITORY_TITLE : '' - basePath need for deploy project on gh pages. In development mode it will work as expected, but if you want to build a production without deployment on gh pages you need to remove this option or if you want to deploy on gh pages update `GH_REPOSITORY_TITLE` value to your repository title.
4. Then yuo can run in development mode

```bash
npm run dev
```

## Build production

Run build script

```bash
npm run build
```

wait for project builds, then you can run builded project with:

```bash
npm run start
```
