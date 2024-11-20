# Car Dealer App

### Created by Denys Karlinskyi with using Next.js

## Getting Started

1. Clone repository
2. Install dependencies

```bash
npm install
```

3. Create `.env.local` file in root folder.
4. Create variables in `.env.local` like `.env.example`
   - NODE_ENV= `production` or `development`
   - OUTPUT= `standalone` or `export`:
     - `standalone` - used for base export paths;
     - `export` - will be exported static paths;
   - GH_PAGES_TITLE= `/your_gh_repo_title` - this variable will be needed only for serving project on GitHub pages, you can skip this variable;
5. Then yuo can run in development mode

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
