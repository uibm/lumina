# Lumina

A blogging platform built with Astro, featuring beautiful typography, dark mode, and complete content ownership.

## Adding Posts

Create markdown or MDX files in `src/content/posts/`:

```mdx
---
title: "Your Post Title"
description: "A brief description"
publishDate: 2025-01-15
tags: ["tag1", "tag2"]
featured: false
---

# Your content here
```

## Customization

Edit `src/styles/tokens.css` to customize colors, fonts, and spacing:

```css
:root {
  --color-accent: #3b82f6; /* Your brand color */
  --font-sans: 'Your Font', sans-serif;
}
```


## License

Apache

## Built With

- [Astro](https://astro.build) - Static site generator
- [MDX](https://mdxjs.com) - Markdown with JSX
- Modern CSS - No framework dependencies
