## Mantine
Check [this](https://mantine.dev/guides/next/#compound-components-in-server-components) Mantine link. That page has things on how to deal with compound components (`Component.XXX`), on routing, on polymorphic components (in case I ever need that), etc.
- Also, if you want to use Tailwind with Mantine, just follow NextJS guide on adding TW to your app. And **note** not to add `tailwind base` to the global imports, since it [messes up](https://github.com/orgs/mantinedev/discussions/1672) the Mantine components.
- There's still an issue where I can't find the `Col` component. I literally can't import it. But fuck it, I'll use TW grid & cols.

## NextJS
- Routes rely more on directory name, file names are standard (page.tsx, etc.), set in stone and won't change anytime soon.
- NextJS has a section of the docs talking about internationalization.
- NextJS used to have `getStaticProps` and other similar functions that were used mainly for data fetching. However, that was in the older pages router. Now with the app router, you can fetch data directly in the component no problem, using `fetch` or otherwise.
- Check default caching behavior on data fetching. I might need to change a default or two.

### Data Fetching
- Data fetching in Server components is different from Client components. 
    - In client components, you use hooks, either useEffect, of if you're using a library like SWR that exposes its own custom hooks.
    - In server components, you can use NextJS's extended `fetch` api.

## Formik
~~The task says to use Formik, but frankly I am hesitant to do so. In any way, there will only be 3 simple forms, login, register, and adding/editing recipe. But the other main reason is that Formik has been out of development for almost 3 years. This on its own is a problem, but add to that how much has changed in the React approach to things and its ecosystem, and the library will soon become, if it isn't already, unusable.~~

~~React Hook Form is a relatively new library, that -according to its name- handles forms the "new hotness" way, using hooks. I've seen it recommended as a modern alternative in more than one place where people were talking about the death of Formik.~~

Formik is alive and well. Not at its best, but its working, maintained (it's been 3 months since a version tho....). But it uses the "new hotness", i.e. hooks.

But also, still, consider how it still has issues, and the rate of maintenance is still really low.

- Note to future self: maybe you can contribute to Formik's maintenance.

### Mantine Forms
If I try using Formik with Mantine components and fail, I might use normal-ass components. If I don't like that, I might try Mantine's built in `useForm` hook, which should integrate bettwer with Mantine components if I want to use them.

Using Formik with Mantine requires third-party or custom bindings. I'll stick to a simple Formik form styles with TW for now.

## Yup
The task also mentions using Yup, a validaiton library, tho I'm not really sure where to slot that, since I'm already using TS.

## Prisma
Seems cool af

Here's a useful [article](https://vercel.com/guides/nextjs-prisma-postgres) on Prisma with NextJS

Here's what I did:
1. Installed `prisma @prisma/client`
2. Ran smth like `prisma init`, created a prisma schema file, and a `.env`
3. I defined the connection in the `datasource` section of the schema. I copied all the info I needed from Vercel Postgres, which kindly offers a snippet to copy for Prisma apps.
4. I created my base db model in the schema (more on types exists in the Prisma docs)
5. I wanted to create a migration (generate the DB tables) based on the models I created, so I ran `npx prisma migrate`.
    - You can also use `npx prisma db push` afaik
6. And voila, migration created, and ran. And the Vercel Postgres Server updated accordingly

- I'm still to find out the prisma generators and their use case.
    - I thiiiink it's what updates the `@prisma/client` to have your schema/models be part of it for when you use it later. See [here](https://)
- The docs also have a lot to read about. Will do that sometime.

Simply running `npx prisma studio` opens up a GUI for the DB.





## Todos
- Data Fetching
- Auth
- CRUD routes for Recipes
- Auth Forms
- CRUD forms

- Error handling
- Tests n Docs n stuff