# T3 stack + Supabase + App directory

This project is Edge ready (Vercel Edge runtime)

This is a starter project/boilerplate to start out with:

- TRPC
- App directory/router
- Prisma
- Supabase (Auth, Storage, Serverless Queries)
- Tailwind
- Edge Ready

It allows us to call database in server components through supabase-js, for client component we are using trpc+prisma due to the superior DX

## Projects using this starter

- PortfolioQuiz [Website](https://www.portfolio-quiz.com/)
- Friendly Macros [Repo](https://github.com/F-PTS/FriendlyMacros) [Website](https://friendly-macros.vercel.app/)
- Twitter Clone [Repo](https://github.com/F-PTS/Blogg) [Website](https://blogg-f-pts.vercel.app/)
- Instagram Clone [Repo](https://github.com/jakubczarnowski/instagram-clone) [Website](https://instagram-clone-eight-mu.vercel.app/)

## What's next? How do I make an app with this?

- Clone this project
- Run

```
npm install
pnpm install
yarn
```

- Copy the .env.example into .env and fill out the envs
- If you develop on local supabase run:

```
yarn prepare:local
npm run prepare:local
pnpm prepare:local
```

- If you develop on cloud supabase run:

```
yarn prepare:remote
npm run prepare:remote
pnpm prepare:remote
```

- Run the project

```
yarn dev
npm run dev
pnpm dev
```

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js app router](https://nextjs.org/docs)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Supabase](https://supabase.com/docs)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
