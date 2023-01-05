---
title: 🚀 Code your SvelteKit website faster with Stylify CSS
image: '/images/blog/stylify-sveltekit/header.jpg'
ogImage: '/images/blog/stylify-sveltekit/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Style your SvelteKit website faster and intuitively with Stylify. Learn how to define components, variables and get extremely optimized CSS."
createdAt: 'January 2, 2023'
---

[Stylify](https://stylifycss.com) + SvelteKit. Style your SvelteKit website faster with Stylify. Don't study selectors and syntax. Use pure CSS syntax and get generated CSS with advanced optimization for production.

For easier start, you can check out the [Stylify Stackblitz playground](https://stackblitz.com/edit/stylify-sveltekit-example?file=src%2Froutes%2F%2Bpage.svelte) 🎮.

## 💎 Stylify CSS Introduction
[Stylify](https://stylifycss.com) is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

- ✅ CSS-like selectors
- ✅ No framework to study
- ✅ Less time spent in docs
- ✅ Mangled & Extremely small CSS
- ✅ No CSS purge needed
- ✅ Components, Variables, Custom selectors
- ✅ It can generate multiple CSS bundles

Also we have a page about <nuxt-link to="/docs/get-started/why-stylify-css">what problems Stylify CSS solves and why you should give it a try!</nuxt-link>

## 🚀 SvelteKit Setup
The easiest way to Setup the SvelteKit is using CLI:
- Run `yarn create svelte@latest`
- Then `cd app`

This way you will get the default SvelteKit application skeleton.

## 🔌 Stylify CSS Integration
Install the [@stylify/unplugin](https://stylifycss.com/docs/unplugin) package using NPM or Yarn:

```bash
yarn add @stylify/unplugin
npm i @stylify/unplugin
```

Open the `vite.config.js` and copy the following content into it:

```js
import { sveltekit } from '@sveltejs/kit/vite';
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
	bundles: [{
		outputFile: './src/stylify.css',
		files: ['./src/**/*.svelte'],
	}]
});

const config = {
	plugins: [
		stylifyPlugin,
		sveltekit(),
	]
};

export default config;
```

The last step, create `src/routes/+layout.svelte` with the following content `stylify.css`:

```html
<script>
	import '../stylify.css';
</script>

<slot />
```

In case, you have created more bundles, for example for pages, you have to add paths to those generated CSS files into correct Svelte files.

## Styling the website
If you copy the code below into the `src/routes/+page.svelte` and run `yarn dev` you will get a styled `Hello World! 🎉` text:

```html
<main class="max-width:800px margin:0_auto">
	<h1 class="text-align:center margin-top:100px font-size:42px">
		Hello World! 🎉
	</h1>
</main>
```

Stylify watches any change in the files that matches the mask in the bundle files and generates CSS into the `src/stylify.css`.

If you add for example `color:blue` the CSS will be automatically updated 🎉.

Go ahead and try Stylify CSS directly on [Stackblitz.com](https://stackblitz.com/edit/stylify-sveltekit-example?file=src%2Froutes%2F%2Bpage.svelte) 💡.

### Components
To avoid bloated templates with utilities, you can use
components directly in files, where they are used through [content options](https://stylifycss.com/docs/get-started#defining-a-component) (expects javascript object without brackets) or in the [compiler config](https://stylifycss.com/docs/get-started#defining-a-component).

```html
<!--
stylify-components
  container: 'max-width:800px margin:0_auto',
  title: 'text-align:center margin-top:100px font-size:42px'
/stylify-components
-->
<main class="container">
	<h1 class="title">
		Hello World! 🎉
	</h1>
</main>
```

### Variables
If you like clean code, you also want to avoid hardcoded values in selectors. [Variables](https://stylifycss.com/docs/get-started#adding-a-variable) can be defined in the same way as components:

```html
<!--
stylify-variables
  titleFontSize: '42px',
  containerWidth: '800px'
/stylify-variables

stylify-components
  container: 'max-width:$containerWidth margin:0_auto',
  title: 'text-align:center margin-top:100px font-size:$titleFontSize'
/stylify-components
-->
<main class="container">
	<h1 class="title">
		Hello World! 🎉
	</h1>
</main>
```

## Building for production
If you run `yarn build` + `yarn preview`, the svelte markup will be mangled into this:

```html
<main class="a">
	<h1 class="b">
		Hello World! 🎉
	</h1>
</main>
```

The CSS is shortened too:
```css
:root {--titleFontSize: 42px;--containerWidth: 800px;}
.c,.a{max-width:800px}
.d,.a{margin:0 auto}
.e,.b{text-align:center}
.f,.b{margin-top:100px}
.g,.b{font-size:42px}
```

## Configure anything you need
The examples above don't include everything Stylify can do:
- You can map [nested files](https://stylifycss.com/docs/bundler#files-content-option) in the template
- Style [global selectors](https://stylifycss.com/docs/stylify/compiler#customselectors)
- Define [custom screens](https://stylifycss.com/docs/stylify/compiler#screens)
- Add [your macros](https://stylifycss.com/docs/stylify/compiler#macros) like `ml:20px` for margin-left
- And a lot more

Feel free to [check out the docs](https://stylifycss.com/docs/get-started) to learn more 💎.