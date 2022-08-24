# My blog @ https://divin.me

Source code of my personal blog, hosted at [divin.me](https://divin.me).
Simple, statically-rendered, built with the powerful combo of [Next.js](https://nextjs.org/) + [MDX](https://mdxjs.com/) and styled using [TailwindCSS](https://github.com/tailwindlabs/tailwindcss).

Other features:

- Next.js 12 (node 16)
- ESLint + Prettier
- Themes via [next-themes](https://github.com/pacocoursey/next-themes)
- Icons from [feathericons.com](https://feathericons.com/) via [react-feather](https://github.com/feathericons/react-feather)
- RSS feed generation (optionally Atom and JSON)
- Sitemap generation
- Google Charts
- Simple, privacy-focused analytics via [Micronalytics](https://microanalytics.io/)

## Get started

First, edit the config at `src/config.js` to suit your blog.

Then, create a `.env` file in the project root for Google Analytics with your key:

```
NEXT_PUBLIC_MICROANALYTICS_ID=<YOUR ID>
```

## Useful commands

Start app locally:

```
npm run dev
```

Run lint:

```
npm run lint
```

Build app:

```
npm run build
```

As `postbuild` both sitemap and feed will be generated.

## Deployment

Deployed using [Vercel](https://vercel.com/)

## License

Copyright 2021 Nicolas Di Vittorio.
The source code of the blog is licensed under [MIT License](https://opensource.org/licenses/MIT), you may use it to the limits of the license.

The content (e.g. the articles in `src/articles/`) is excluded from the license, all rights are reserved.
