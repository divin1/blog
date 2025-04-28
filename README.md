# My blog @ https://divin.me

Source code of my personal blog, hosted at [divin.me](https://divin.me).
Simple, statically-rendered, built with the powerful combo of [Next.js](https://nextjs.org/) + [MDX](https://mdxjs.com/) and styled using [TailwindCSS](https://github.com/tailwindlabs/tailwindcss).

Other features:

- Next.js 12 (node 16)
- Icons from [feathericons.com](https://feathericons.com/) via [react-feather](https://github.com/feathericons/react-feather)
- Feed (RSS, Atom or JSON) & sitemap generation
- Google Charts
- Deployed automagically using [Vercel](https://vercel.com/)

## Get started

Edit the config at `src/config.js` to suit your blog's metadata.

Start app locally:

```
npm run dev
```

Run linter:

```
npm run lint
```

Build app:

```
npm run build
```

As `postbuild` both feed and sitemap are going to be generated.


## License

Copyright 2021 Nicolas Di Vittorio.
The source code of the blog is licensed under [MIT License](https://opensource.org/licenses/MIT), you may use it to the limits of the license.

The content (e.g. the articles in `src/articles/`) is excluded from the license, all rights are reserved.
