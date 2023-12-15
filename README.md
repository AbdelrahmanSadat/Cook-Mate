# Cook Mate

## Frameworks and Libraries
This project uses
- React 18
- NextJS 14
- NextAuth 4
- Prisma
- Formik 2.4.5
- Yup for validation
- Mantine for UI components
- Tailwindcss for styling

## Deployment
- The app is deployed on Vercel [here](https://cook-mate-lilac.vercel.app/)
- The DB is deployed on [Supabase](https://supabase.com/)
> I am aware that the task requirements had a preference for Vercel Postgres. However, its memory usage was very limiting, and I hit the quota for their "hobby" tier when I re-ran my migrations a few times.

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts






## Background
This is not a disclaimer.

I'm writing this because I'd love to share the context of my developing this app. It has been a learning experience for me more than anything....

The moment I got the email with this task, I was studying, on my own little roadmap, getting back to React & NextJS after a 3-4 year hiatus. There wasn't much that I remembered anyway, I was gonna have to re-learn everything again, but I could already tell, a lot has changed since; Functional components, `hooks` , the docs, NextJS, App router, Formik, the ecosystem... Not to mention all the other frameworks and libraries that I'd be using for the first time (Prisma, NextAuth, MantineUI, Yup), and even deployment servers (Vercel, Supabase).

What I want to emphasize is that I basically re-learned React & NextJS in this one week, and learned all the other libraries and frameworks I mentioned for the first time.

I am aware that aspects of the app could be better. Like adding ratings, OAuth authentication, more tests, more reliance on middleware, refactoring some code, and better typing in some. However, I am proud of prioritizing the learning experience, knowing that every feature or piece of quality I left out, I could easily add given time.

And whatever the result of the interview is, I probably won't stop learning anytime soon, I'm already `hook`ed (pun intended). But I'd love to continue to do that with you.

And thank you for a well-thought out technical task, it was a valuable learning experience and shows you care about adabtapility and curiousity, which I appreciate. And as someone who's been through some questionable interviews lately, this task alone has been one of the most valuable and fun!
