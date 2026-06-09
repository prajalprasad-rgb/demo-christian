# Wedify Editing Guide

This template is designed so most edits happen in one file:

`src/data/weddingData.js`

Edit that file to change names, dates, photos, colors, music, events, RSVP links, wishes, contact details, and wedding style.

## 1. Change Wedding Style

Find:

```js
weddingStyle: "christian",
```

Use one of these:

```js
weddingStyle: "christian",
weddingStyle: "muslim",
weddingStyle: "hindu",
```

Changing this updates the design style, blessing text, event demos, motifs, and patterns.

## 2. Change Couple Names

Find:

```js
coupleTitle: "John & Maria",
```

Then edit bride and groom details:

```js
bride: {
  name: "Maria Grace",
  bio: "Bride bio here",
  photo: "/images/bride.jpg",
}

groom: {
  name: "John Mathew",
  bio: "Groom bio here",
  photo: "/images/groom.jpg",
}
```

## 3. Change Wedding Date

Find:

```js
weddingDateDisplay: "24 December 2026",
weddingDateISO: "2026-12-24T10:00:00+05:30",
countdownDate: "2026-12-24T10:00:00+05:30",
```

Use this format for countdown dates:

```js
YYYY-MM-DDTHH:mm:ss+05:30
```

Example:

```js
countdownDate: "2026-12-24T10:00:00+05:30",
```

## 4. Replace Photos

Put your images inside:

```text
public/images/
```

Example files:

```text
public/images/hero.jpg
public/images/bride.jpg
public/images/groom.jpg
public/images/couple.jpg
public/images/gallery-1.jpg
```

Then update `src/data/weddingData.js`:

```js
heroImage: "/images/hero.jpg",
couplePhoto: "/images/couple.jpg",
scratchCardImage: "/images/couple.jpg",
```

Bride and groom:

```js
bride: {
  photo: "/images/bride.jpg",
}

groom: {
  photo: "/images/groom.jpg",
}
```

Gallery:

```js
galleryImages: [
  { src: "/images/gallery-1.jpg", alt: "Couple photo" },
  { src: "/images/gallery-2.jpg", alt: "Wedding photo" },
]
```

## 5. Mobile-Safe Image Rules

Use these image types for best mobile view:

- Hero image: wide landscape photo
- Intro images: wide landscape wedding photos
- Bride/groom portraits: vertical portrait photos
- Couple photo: vertical or square photo
- Event images: wide landscape photos
- Gallery photos: mix is okay
- Scratch card image: couple photo or premium wedding close-up

The website uses responsive cropping, so images should not stretch. If a face is getting cropped badly, use a photo with the subject near the center.

## 6. Change Music

Put music inside:

```text
public/music/
```

Example:

```text
public/music/wedding-music.mp3
```

Then update:

```js
backgroundMusic: {
  enabled: true,
  src: "/music/wedding-music.mp3",
  volume: 0.45,
}
```

If you do not want music:

```js
backgroundMusic: {
  enabled: false,
  src: "",
  volume: 0.45,
}
```

## 7. Change Scratch Reveal

Find:

```js
scratchReveal: {
  enabled: true,
  title: "Scratch to Reveal Our Wedding Date",
  hiddenText: "Our Wedding Day",
  revealThreshold: 18,
  autoRevealAfterFirstScratchMs: 650,
}
```

Useful settings:

- `enabled: true` shows scratch card
- `enabled: false` skips scratch card
- Lower `revealThreshold` means faster reveal
- Lower `autoRevealAfterFirstScratchMs` means it clears sooner after first scratch

## 8. Change Events

Find:

```js
eventsByStyle: {
  christian: [
    {
      title: "Wedding Ceremony",
      date: "24 December 2026",
      time: "10:00 AM",
      venue: "St. Mary Cathedral, Kochi",
      address: "Marine Drive, Kochi, Kerala",
      image: "/images/event-ceremony.jpg",
      mapLink: "https://maps.google.com/",
    },
  ],
}
```

Only two events are shown by default:

- Wedding Ceremony
- Reception

For Muslim style, they can be:

- Nikah Ceremony
- Walima Reception

## 9. Change RSVP And Wishes Links

Use Google Forms links:

```js
forms: {
  rsvpGoogleFormLink: "https://docs.google.com/forms/...",
  wishesGoogleFormLink: "https://docs.google.com/forms/...",
}
```

## 10. Change WhatsApp Number

Find:

```js
contact: {
  whatsappNumber: "919876543210",
}
```

Use country code, no plus sign, no spaces.

Correct:

```js
whatsappNumber: "919876543210",
```

Wrong:

```js
whatsappNumber: "+91 98765 43210",
```

## 11. Change Theme Colors

Find:

```js
theme: {
  colors: {
    christian: {
      background: "#fbf7ef",
      surface: "#fffdf8",
      primary: "#b78b2b",
      secondary: "#315b48",
      accent: "#f0d58a",
      ink: "#2c2620",
    },
  },
}
```

Change color hex values carefully. Keep good contrast between text and background.

## 12. Run The Website

Install packages:

```bash
npm install
```

Start local website:

```bash
npm run dev
```

Build final website:

```bash
npm run build
```

Preview final build:

```bash
npm run preview
```

## 13. Deploy On Vercel

Use these settings:

```text
Framework: Vite
Build command: npm run build
Output folder: dist
```

## 14. Main Safety Rule

Edit only this file for normal client customization:

```text
src/data/weddingData.js
```

Do not edit component files unless you want to change the design or layout.
