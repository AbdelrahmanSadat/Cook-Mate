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

## How To Run Locally
- Run `npm i`
- Check out the `.env.example` file.
    - Create your own `.env` file
    - Copy and paste the keys from `.env.example` to it. And check your favorite DB provider for the values, or your local DB.
- Since I am using a serverless DB (Supabase), there is no need to create a local DB and migrate using Prisma.

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production

### Testing scripts (Unused)

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts






## Background
This is not a disclaimer.

I'm writing this because I would love to share the context of my experience developing this app. I am aware that it is missing a few (maybe more than a few) aspects that I would've loved to add given time. However, I'd like to point out that it was the perfect learning opportunity for me.

I had been working with Angular for the last couple of years, and the year before that I only worked on backend with NestJS. Now I had worked with React before. In fact it was the first frontend framework I learned, and I used NextJS in a couple of freelance projects before. However, when I say I hadn't touched React in 3+ years, I'm not exaggerating.

The moment I got the email with this task, I was studying, on my own little roadmap, getting back to React & NextJS after a 3-4 year hiatus. And sure enough, I was falling in love with React again. 

There wasn't much that I remembered anyway, I was gonna have to re-learn everything again, but I could already tell, a lot has changed since; Functional components, `hooks` , the docs, NextJS, App router, Formik, the ecosystem... Not to mention all the other frameworks and libraries that I'd be using for the first time (Prisma, NextAuth, MantineUI, Yup), and even deployment servers (Vercel, Supabase).

What I want to emphasize is that I basically re-learned React & NextJS in this one week, and learned all the other libraries and frameworks I mentioned for the first time.

I am aware that aspects of the app could be better. Like adding ratings, search & filtering, OAuth authentication, tests, and refactoring some of the code. However, I am proud of prioritizing the learning experience, knowing that every feature or piece of quality I left out, I could confidently add given time.

### What I learned
- ReactJS
    - Its newer focus on functinoal components & hooks and move away from class components
- NextJS
    - The new App router
    - Route Handlers, Data fetching, Middleware.
    - SSR vs CSR (and how some aspects in one don't play nice with the other sometimes)
- Prisma
    - Migration, Generation, Queries.
    - (I'm in love with this ORM).
- Next-Auth
    - Credential authentication
    - And a little on OAuth
    - Adapters and Providers
- Mantine UI
    - And how to integrate it with NextJS
- Tailwind CSS
    - I used it before
    - But I learned how to integrate it with both NextJS & Mantine
- Formik
    - In its new form (pun intended).
    - And how it's lacking maintenance. Which is also why I looked up alternatives like [React Hook Form](https://react-hook-form.com/)
- Yup

- Vercel Deployment & CD
- Vercel Postgres & Supabase

- The React EcoSystem
    - I lost track while researching topics a couple of times because of resources that were 2 or more years old, and were now obsolete. Which reminded me to *always* check the documentation first. And it also shows how much in the ecosytem has changed in such a short time.

### What I Wanted to add
This is a list of the things I am aware I missed out on due to time. I'll continue to work on them the following week, for my own benefit.
- Better UI and UX (Interactivity, Responsiveness, and Loading States/Suspense).
- Error Handling
- Tests
    - I have been curious about Cypress especially for months (I dove into QA and accidentally got an ISTQB certification a few months ago).
- OAuth
- Better Comments
- Better Typings
    - I stuck to typing in like 95% of the app, but there were a couple of edge cases that I avoided for the sake of priorities. So I turned off type-checking on build to avoid build-time errors.
- Using Middleware for common route logic (auth guards)
- Image upload
- Add Ratings
- Add Search & Filtering

And whatever the result, I probably won't stop learning anytime soon, I'm already [hook](https://react.dev/reference/react/hooks)ed.

And thank you for a well-thought out technical task, it was a valuable learning experience and shows you care about adabtapility and curiousity, which I appreciate. And as someone who's been through some questionable interviews lately, this task alone has been one of the most valuable and fun!

And I would love to hear some feedback from you. Like anything I missed, or what you think I should prioritize.