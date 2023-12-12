## Mantine
Check [this](https://mantine.dev/guides/next/#compound-components-in-server-components) Mantine link. That page has things on how to deal with compound components (`Component.XXX`), on routing, on polymorphic components (in case I ever need that), etc.
- There's still an issue where I can't find the `Col` component. I literally can't import it. But fuck it, I'll use TW grid & cols.

## NextJS
- Routes rely more on directory name, file names are standard, set in stone and won't change anytime soon.
- NextJS has a section of the docs talking about internationalization.

## Formik
~~The task says to use Formik, but frankly I am hesitant to do so. In any way, there will only be 3 simple forms, login, register, and adding/editing recipe. But the other main reason is that Formik has been out of development for almost 3 years. This on its own is a problem, but add to that how much has changed in the React approach to things and its ecosystem, and the library will soon become, if it isn't already, unusable.~~

~~React Hook Form is a relatively new library, that -according to its name- handles forms the "new hotness" way, using hooks. I've seen it recommended as a modern alternative in more than one place where people were talking about the death of Formik.~~

Formik is alive and well. Not at its best, but its working, maintained (it's been 3 months since a version tho....). But it uses the "new hotness", i.e. hooks.

But also, still, consider how it still has issues, and the rate of maintenance is still really low.

- Note to future self: maybe you can contribute to Formik's maintenance.

### Mantine Forms
If I try using Formik with Mantine components and fail, I might use normal-ass components. If I don't like that, I might try Mantine's built in `useForm` hook, which should integrate bettwer with Mantine components if I want to use them.

I think I'll stick to Mantine's forms for now, for visual consistency

## Yup
The task also mentions using Yup, a validaiton library, tho I'm not really sure where to slot that, since I'm already using TS.