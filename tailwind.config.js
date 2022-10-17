/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
        "cus-tablet": "700px",

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        /* Color styles */
        white: "#FFFFFF",
        "black-1": "#000000",
        "black-2": "#161616",
        "black-3": "#262626",
        "gray-2": "#717171",
        gray: "#C5C5C5",
        green: "#88FFCC",
        "channel-twitter": "#00D1FF",
        "channel-facebook": "#2094FF",
        "channel-ig": "#CA73FF",
        "channel-youtube": "#FF4747",
        "topic-covid": "#78D5D7",
        "topic-weed": "#2AAF82",
        "topic-economic": "#FFB82E",
        "topic-lgbt": "#FFAF92",
        "topic-movement": "#E03C00",
        "topic-royal": "#5B71FF",
        "side-gov": "#5F14FF",
        "side-non-gov": "#EB2323",
      },
      fontSize: {
        /* Text-size styles */
        "desktop-black-h2": "72px",
        "desktop-bold-h3": ["60px", { fontWeight: "bold" }],
        "desktop-bold-h5": ["36px", { fontWeight: "bold" }],
        "desktop-bold-b1": ["32px", { fontWeight: "bold" }],
        "desktop-bold-b2": ["24px", { fontWeight: "bold" }],
        "desktop-bold-b3": ["21px", { fontWeight: "bold" }],
        "desktop-bold-b4": ["18px", { fontWeight: "bold" }],
        "desktop-bold-b5": ["16px", { fontWeight: "bold" }],
        "desktop-bold-b6": ["14px", { fontWeight: "bold" }],
        "desktop-bold-b7": ["12px", { fontWeight: "bold" }],
        "desktop-regular-b1": "32px",
        "desktop-regular-b2": "24px",
        "desktop-regular-b3": "21px",
        "desktop-regular-b4": "18px",
        "desktop-regular-b5": "16px",
        "desktop-regular-b6": "14px",
        "desktop-regular-b7": "12px",
        "mobile-black-h2": "48px",
        "mobile-bold-h3": ["36px", { fontWeight: "bold" }],
        "mobile-bold-h5": ["28px", { fontWeight: "bold" }],
        "mobile-bold-b1": ["24px", { fontWeight: "bold" }],
        "mobile-bold-b2": ["21px", { fontWeight: "bold" }],
        "mobile-bold-b3": ["18px", { fontWeight: "bold" }],
        "mobile-bold-b4": ["16px", { fontWeight: "bold" }],
        "mobile-bold-b5": ["14px", { fontWeight: "bold" }],
        "mobile-bold-b6": ["12px", { fontWeight: "bold" }],
        "mobile-bold-b7": ["10px", { fontWeight: "bold" }],
        "mobile-regular-b1": "24px",
        "mobile-regular-b2": "21px",
        "mobile-regular-b3": "18px",
        "mobile-regular-b4": "16px",
        "mobile-regular-b5": "14px",
        "mobile-regular-b6": "12px",
        "mobile-regular-b7": "10px",
      },
    },
  },
  plugins: [],
};
