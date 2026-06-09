# Wedify Premium Wedding Invitation

Mobile-first React + Vite wedding invitation template with one editable data file:

`src/data/weddingData.js`

## Setup

1. Run `npm install`
2. Run `npm run dev`
3. Open the local URL Vite prints in your terminal.

## Replace Photos

Put your files in `public/images`, then update the matching image paths in `src/data/weddingData.js`.

Example:

```js
heroImage: "/images/hero.jpg"
```

You can also use external image URLs.

## Replace Music

Put your music file in `public/music`, then update:

```js
backgroundMusic: {
  enabled: true,
  src: "/music/wedding-music.mp3",
  volume: 0.45,
}
```

## Change Wedding Style

In `src/data/weddingData.js`, change:

```js
weddingStyle: "christian"
```

Available styles:

- `"christian"`
- `"muslim"`
- `"hindu"`

The theme colors, blessing text, motifs, patterns, and event demos adapt from the same codebase.

## Deploy On Vercel

1. Push this project to GitHub.
2. Import it in Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.
