# Stream-Pi Site Made in React

[![Package.json Version](https://img.shields.io/github/package-json/v/stream-pi/website/master?label=Release&style=for-the-badge)](https://github.com/stream-pi/website/blob/master/package.json#L3) [![Website Upstatus](https://img.shields.io/website?down_message=offline&label=Status&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fstream-pi.com)](https://stream-pi.com) [![Github Stars](https://img.shields.io/github/stars/stream-pi/website?color=yellow&style=for-the-badge)](https://github.com/stream-pi/website/stargazers)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<div align="center">
  <img src="https://raw.githubusercontent.com/stream-pi/website/master/.github/images/combined-logos.png">
</div>

Originally the Stream-Pi website was made with static HTML, and PHP. With the release of Stream-Pi 1.0.0 we thought a redesign was in order to make things more modern. So the site was rebuilt from the ground up using react, typescript, and nextjs.

Using the NextJS framework allows us to utilize features like **Client Side Routing** which will make pages load faster, without having to sacrifice long initial loads and bad SEO.

We also have access to features like **React Redux** which will give us access to global store/state management and allow us to build a plugin store.

It'll also in general just be easier to maintain.

## Current Packages / Libraries

- React
- NextJS (Base framework and faux server backend for deploying the app)
- Typescript (for better type checking in Javascript)
- Node Sass (for use of sass/scss)
- Bootstrap (for style / look)
- Fontawesome (for icons)
- Animate.css (for complex animations)
- Formik (for form styling / validation)
- Yup (for form validation schema)
- Axios (API calls and GET / POST requests)
- Gray Matter (For reading hidden metadata in markdown files)
- Remark (For rendering markdown as HTML with syntax)
- dayjs (for parsing / formatting date-time stamps)

## How Can I Contribute?

First, it is recommended that you read up on **NextJS** if you don't know a lot about it.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Second, once you are ready you can check out [CONTRIBUTING.md](https://github.com/stream-pi/Website/blob/master/CONTRIBUTING.md) for information on how to contribute.
