/*
  Wedify editable wedding data.
  Change names, style, dates, photos, links, colors, music, labels, and text here.
  Components read from this file so the template can be reused without code edits.
*/

const unsplash = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const weddingData = {
  weddingStyle: "christian", // "christian" | "muslim" | "hindu"

  coupleTitle: "John & Maria",
  weddingDateDisplay: "24 December 2026",
  weddingDateISO: "2026-12-24T10:00:00+05:30",
  countdownDate: "2026-12-24T10:00:00+05:30",
  saveTheDateText: "Save The Date",
  invitationIntro: "Together with their families, they invite you to celebrate a day of love, blessing, and joy.",

  bride: {
    name: "Maria Grace",
    role: "Bride",
    bio: "Warm, graceful, and joyfully ready to begin a new chapter surrounded by family and faith.",
    photo: unsplash("photo-1524504388940-b1c1722653e1", 1200),
    socialLinks: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  },

  groom: {
    name: "John Mathew",
    role: "Groom",
    bio: "Thoughtful, devoted, and grateful for the promise of forever with the love of his life.",
    photo: unsplash("photo-1500648767791-00dcc994a43e", 1200),
    socialLinks: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  },

  blessing: {
    christian: {
      title: "A Blessed Union",
      text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
      reference: "1 Corinthians 13:13",
    },
    muslim: {
      title: "Nikah Blessing",
      text: "May Allah bless this union with mercy, tranquility, and a lifetime of companionship.",
      reference: "Barakallahu lakuma wa baraka alaykuma",
    },
    hindu: {
      title: "Sacred Blessing",
      text: "May this sacred bond be filled with dharma, prosperity, devotion, and everlasting togetherness.",
      reference: "Shubha Vivaha",
    },
  },

  media: {
    heroImage: unsplash("photo-1519741497674-611481863552", 1800),
    heroVideo: "", // Example: "/video/hero-video.mp4"
    couplePhoto: unsplash("photo-1523438885200-e635ba2c371e", 1400),
    introImages: [
      unsplash("photo-1519741497674-611481863552", 1600),
      unsplash("photo-1464366400600-7168b8af9bc3", 1600),
      unsplash("photo-1519225421980-715cb0215aed", 1600),
    ],
    scratchCardImage: unsplash("photo-1523438885200-e635ba2c371e", 1200),
    backgroundMusic: {
      enabled: true,
      src: "/music/scratch-reveal.mp3", // Example: "/music/wedding-music.mp3"
      volume: 0.45,
    },
  },

  theme: {
    fonts: {
      display: '"Cormorant Garamond"',
      body: '"Inter"',
    },
    colors: {
      christian: {
        background: "#fbf7ef",
        surface: "#fffdf8",
        primary: "#b78b2b",
        secondary: "#315b48",
        accent: "#f0d58a",
        ink: "#2c2620",
      },
      muslim: {
        background: "#f5fbf7",
        surface: "#fffdf7",
        primary: "#b99642",
        secondary: "#0f6b55",
        accent: "#d9c06b",
        ink: "#182a25",
      },
      hindu: {
        background: "#fff8ed",
        surface: "#fffdf8",
        primary: "#c48a20",
        secondary: "#8b1e2d",
        accent: "#f2b84b",
        ink: "#2f201a",
      },
    },
  },

  animation: {
    introDurationMs: 6500,
    enablePetals: true,
    enableGoldParticles: true,
    autoSlideshow: true,
    reducedMotionFriendly: true,
  },

  scratchReveal: {
    enabled: true,
    title: "Scratch to Reveal Our Wedding Date",
    hiddenText: "Our Wedding Day",
    revealThreshold: 18,
    autoRevealAfterFirstScratchMs: 650,
    sound: "", // Example: "/music/scratch-reveal.mp3"
  },

  navigationLabels: [
    { id: "home", label: "Home" },
    { id: "couple", label: "Couple" },
    { id: "story", label: "Story" },
    { id: "events", label: "Events" },
    { id: "gallery", label: "Gallery" },
    { id: "rsvp", label: "RSVP" },
    { id: "wishes", label: "Wishes" },
    { id: "contact", label: "Contact" },
  ],

  buttonTexts: {
    enterWithMusic: "Tap to Enter with Music",
    viewInvitation: "View Invitation",
    rsvp: "RSVP Now",
    wishes: "Send Wishes",
    whatsapp: "WhatsApp Us",
    maps: "View Map",
    calendar: "Add to Calendar",
    share: "Share Invitation",
    copyLink: "Copy Link",
  },

  loveStory: [
    {
      title: "How We Met",
      date: "January 2021",
      text: "A simple conversation became the beginning of something beautifully unexpected.",
      image: unsplash("photo-1511285560929-80b456fea0bc", 1000),
    },
    {
      title: "Our Journey",
      date: "2022 - 2025",
      text: "Through prayers, laughter, distance, and dreams, love kept becoming more certain.",
      image: unsplash("photo-1519225421980-715cb0215aed", 1000),
    },
    {
      title: "The Proposal",
      date: "August 2026",
      text: "Under soft lights and happy tears, forever received its sweetest yes.",
      image: unsplash("photo-1522673607200-164d1b6ce486", 1000),
    },
    {
      title: "Forever Begins",
      date: "24 December 2026",
      text: "With family, faith, and grateful hearts, a new life together begins.",
      image: unsplash("photo-1469371670807-013ccf25f16a", 1000),
    },
  ],

  eventsByStyle: {
    christian: [
      {
        title: "Wedding Ceremony",
        date: "24 December 2026",
        time: "10:00 AM",
        venue: "St. Mary Cathedral, Kochi",
        address: "Marine Drive, Kochi, Kerala",
        image: unsplash("photo-1464366400600-7168b8af9bc3", 1400),
        mapLink: "https://maps.google.com/?q=St+Mary+Cathedral+Kochi",
      },
      {
        title: "Reception",
        date: "24 December 2026",
        time: "6:30 PM",
        venue: "The Grand Pearl Ballroom",
        address: "MG Road, Kochi, Kerala",
        image: unsplash("photo-1519167758481-83f550bb49b3", 1400),
        mapLink: "https://maps.google.com/?q=MG+Road+Kochi",
      },
    ],
    muslim: [
      {
        title: "Nikah Ceremony",
        date: "24 December 2026",
        time: "10:00 AM",
        venue: "Noor Mahal Convention Centre",
        address: "Kochi, Kerala",
        image: unsplash("photo-1560185007-cde436f6a4d0", 1400),
        mapLink: "https://maps.google.com/?q=Kochi+Kerala",
      },
      {
        title: "Walima Reception",
        date: "24 December 2026",
        time: "6:30 PM",
        venue: "Emerald Grand Hall",
        address: "Kochi, Kerala",
        image: unsplash("photo-1464366400600-7168b8af9bc3", 1400),
        mapLink: "https://maps.google.com/?q=Kochi+Kerala",
      },
    ],
    hindu: [
      {
        title: "Wedding Ceremony",
        date: "24 December 2026",
        time: "8:30 AM",
        venue: "Sri Lakshmi Kalyana Mandapam",
        address: "Kochi, Kerala",
        image: unsplash("photo-1583939003579-730e3918a45a", 1400),
        mapLink: "https://maps.google.com/?q=Kochi+Kerala",
      },
      {
        title: "Reception",
        date: "24 December 2026",
        time: "6:30 PM",
        venue: "Royal Lotus Banquet",
        address: "Kochi, Kerala",
        image: unsplash("photo-1519225421980-715cb0215aed", 1400),
        mapLink: "https://maps.google.com/?q=Kochi+Kerala",
      },
    ],
  },

  galleryImages: [
    { src: unsplash("photo-1523438885200-e635ba2c371e", 1400), alt: "Couple portrait" },
    { src: unsplash("photo-1522673607200-164d1b6ce486", 1400), alt: "Engagement moment" },
    { src: unsplash("photo-1519225421980-715cb0215aed", 1400), alt: "Wedding decor" },
    { src: unsplash("photo-1519741497674-611481863552", 1400), alt: "Wedding ceremony" },
    { src: unsplash("photo-1469371670807-013ccf25f16a", 1400), alt: "Reception table" },
    { src: unsplash("photo-1464366400600-7168b8af9bc3", 1400), alt: "Wedding venue" },
  ],

  forms: {
    rsvpGoogleFormLink: "https://docs.google.com/forms/",
    wishesGoogleFormLink: "https://docs.google.com/forms/",
    embedForms: false,
  },

  demoWishes: [
    { name: "Aunty Rose", text: "May your home always be filled with peace, prayer, and laughter." },
    { name: "David & Anna", text: "Wishing you a beautiful life together and countless happy mornings." },
    { name: "Family Friends", text: "Blessings and joy as you begin this wonderful journey." },
  ],

  contact: {
    whatsappNumber: "919876543210",
    email: "hello@wedify.in",
    phone: "+91 98765 43210",
    address: "Kochi, Kerala, India",
  },

  socialLinks: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    website: "https://wedify.in",
  },

  mapLinks: {
    ceremony: "https://maps.google.com/?q=St+Mary+Cathedral+Kochi",
    reception: "https://maps.google.com/?q=MG+Road+Kochi",
  },
};

export const getActiveTheme = () =>
  weddingData.theme.colors[weddingData.weddingStyle] || weddingData.theme.colors.christian;

export const getActiveBlessing = () =>
  weddingData.blessing[weddingData.weddingStyle] || weddingData.blessing.christian;

export const getActiveEvents = () =>
  weddingData.eventsByStyle[weddingData.weddingStyle] || weddingData.eventsByStyle.christian;
