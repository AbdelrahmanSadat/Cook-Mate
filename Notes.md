## Mantine
Check [this](https://mantine.dev/guides/next/#compound-components-in-server-components) Mantine link. That page has things on how to deal with compound components (`Component.XXX`), on routing, on polymorphic components (in case I ever need that), etc.
- Also, if you want to use Tailwind with Mantine, just follow NextJS guide on adding TW to your app. And **note** not to add `tailwind base` to the global imports, since it [messes up](https://github.com/orgs/mantinedev/discussions/1672) the Mantine components.
- There's still an issue where I can't find the `Col` component. I literally can't import it. But fuck it, I'll use TW grid & cols.

## NextJS
- Routes rely more on directory name, file names are standard (page.tsx, etc.), set in stone and won't change anytime soon.
- NextJS has a section of the docs talking about internationalization.
- NextJS used to have `getStaticProps` and other similar functions that were used mainly for data fetching. However, that was in the older pages router. Now with the app router, you can fetch data directly in the component no problem, using `fetch` or similar third party libs.
- From the route segment config [docs](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic)

### Data Fetching
- Data fetching in Server components is different from Client components. 
    - In client components, you use hooks, either useEffect, of if you're using a library like SWR that exposes its own custom hooks.
    - In server components, you can use NextJS's extended `fetch` api.
> Good to know: The new model in the app directory favors granular caching control at the fetch request level over the binary all-or-nothing model of getServerSideProps and getStaticProps at the page-level in the pages directory. The dynamic option is a way to opt back in to the previous model as a convenience and provides a simpler migration path.
- Check default caching behavior on data fetching. I might need to change a default or two.
    - **Important**: Yes, I had to change the default caching behavior. I need to understand exactly and why tf caching is defaulted/opt-out like that.
- I should read more on the `fetch` api [see MDN].
    - Especially fetch API's [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request/json) and [Resposne](https://developer.mozilla.org/en-US/docs/Web/API/Response)


### API
Using NextJS's [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body).
#### Middleware
- The NextJS "middleware", is different from Express.js middleware.
    - ~~See NextJS changes to [middleware](https://nextjs.org/docs/messages/middleware-upgrade-guide#no-response-body). You can no longer return a response in the middleware. Only redirect or rewrite. They explain their reasoning in the docs I linked. ~~
    - ~~That makes me think, that whoever made this task did not really have Next 12.2+ in mind? Because how am I supposed to use the NextJS middleware in my api, when clearly NextJS want it to be treated more like a client side thing that can't return a response? ~~
    > You can respond from Middleware directly by returning a Response or NextResponse instance. (This is available since Next.js v13.1.0)
    - Note: NextJS doesn't allow "nested middleware", meaning defining the middleware file anywhere besides the root dir.
        - The [solution](https://nextjs.org/docs/messages/nested-middleware) is to conditionally, using the req, define where you want pieces of the middleware to be applied on which routes.
        - And maybe this means that using something like next-auth's `withAuth()` for middleware is preferred (if you'll guard with middleware)
            - ~~There's still the problem of `withAuth` always authenticating the user.~~ (resolved, was caused by me forgetting to remove the token in the cookie)
            - It's perfectly fine (if not even better) to authenticate in each route you want to guard
                - So there's maybe a validity in trying to see why `withAuth` doesn't work, rather than trying a manual middleware auth; (which I did)

- The NextJS middleware concept, and the edge runtime have caused me big problems (I'll summarize them later), because of what they can and can't run on the edge ([text](https://nextjs.org/docs/messages/node-module-in-edge-runtime)).

- Avoid usage until they [settle](https://github.com/vercel/next.js/discussions/46722) on something.


### Runtimes
- There are two runtime options in NextJS, The NodeJS runtime and the Edge runtime.
    - The NodeJS runtime has access to all Node.js APIs and compatible packages from the ecosystem.
    - The Edge runtime is based on [Web APIs](https://nextjs.org/docs/app/api-reference/edge). It uses only a subset of the NodeJS api, and offers alternate polyfills? / compatibility. And it comes with a bunch of limitations, like size.
        - It is faster, but also naturally more limiting. And it hasn't matured yet.
        - Here are some of the [limitations](https://nextjs.org/docs/app/api-reference/edge#unsupported-apis) of the edge runtime.

- Most importantly, NextJS middleware is only avilable in [Edge runtime](https://nextjs.org/docs/app/building-your-application/routing/middleware#runtime). Meaning you can't rely on it like you would the server.



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

### Queries
Looky [here](https://www.prisma.io/docs/orm/prisma-client/queries/crud#create)

### Error Handling
- Looky [here](https://www.prisma.io/docs/orm/prisma-client/debugging-and-troubleshooting/handling-exceptions-and-errors)
- And [here](https://www.prisma.io/docs/orm/reference/error-reference#prismaclientknownrequesterror)

## Supabase
I do not mention Vercel because its setup was so easy. However, it was very limited in its free plan. I messed around with migrations a bit, and boom, reached my quota. So I migrated to Supabase.
- In prisma, the datasource in the schema will still take a url.
    - This URL can be found in Supabase. Under project settings -> Database -> Connections String
    - **MAKE SURE** that you select the NodeJS connection string. And refer to [this](https://github.com/prisma/prisma/issues/11831) if you still have issues related.


## Next-Auth
- Understanding Next-Auth
- My pitfall is thinking about frameworks that would invert all control. I don't like those. Nor should I think too much about them.
- I should've started with the docs all along, man. They seem pretty good, too.
- `<SessionProvider>` allows the session to be [shared](https://next-auth.js.org/getting-started/client#sessionprovider) by components across the app.
>If you pass the session page prop to the `<SessionProvider>` – as in the example above – you can avoid checking the session twice on pages that support both server and client side rendering.
- Take care, like always, of the differences between cliend-side and server-side authenticatino & data fetching in general in Next.

## SWR
- see [this](https://github.com/vercel/swr/issues/93) on when to use SWR and when to simply use `fetch`.

```javascript
// "Parameters" fetches the param types of a function. And since this is a wrapper, this is all we need
const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());
// convoluted wrapper around useSWR, just to pass multiple arguments
const { data, error, isLoading } = useSWR(['/api/auth/create', {method: 'POST', body: JSON.stringify({username: 'B', email: 'test1@test.com', password: 'password'})}], ([url, options])=> fetcher(url, options));
console.log(data);
```





## Todos
- Auth [OAuth and JWT] (I won't do OAuth. I have Google set up if need be)
- Registeration Form. (going from create, to log in [redirect if valid, from the create route, instead of returning user])
- CRUD form for Recipes.
    - Change ingredients to a string in the DB. Make it a textarea in the form
- Navbar & Navigation 

- Error handling
- Tests n Docs n stuff

- Refactoring route validation to [middleware](https://shadcn.com/validation-middleware)
- Refactoring authenticaiton to NextJS[middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware#producing-a-response), or that provided by [Next-Auth](https://next-auth.js.org/configuration/nextjs#middleware)
- OAuth, using Next-Auth Prisma [adapter](https://authjs.dev/reference/adapter/prisma)


- RATINGS

- Seeding?
- bcrypting
- cachings



google console api, no authorized domain
can maybe change authorized redirect URIs, to be more specific

disabled type check errors on Next build. Can check type errors locally, fix them, and then remove that. 

## Aftercare
When you're done, go back through the whole project, clean it up, add comments, add tests. Continue it as you would, to use it as a reference point in the future.
And make sure to take mental note of stable patterns to use in the future (fetch API, typings, auth, etc.)

Consider writing your own formik snippet extension. Or formik-mantine bindings

- middleware for auth.
- passing the session through layout? SessionProvider?
- fucking hash and password are being sent in req. check that





## Notes on the middleware issue (move to Github issues)
- https://next-auth.js.org/getting-started/typescript#module-augmentation
- https://stackoverflow.com/questions/73588525/why-am-i-getting-this-error-when-using-next-js-middleware
- `next-auth` is [**not** runtime agnostic](https://github.com/nextauthjs/next-auth/discussions/5855). Only the newer version of the package, namely `@auth/nextjs` will be.
    - They really need to make this clear in the docs