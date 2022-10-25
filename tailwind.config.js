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
      backgroundImage: {
        "พลังประชารัฐ-0-5-1-2019":
          "url('/design_assets/cover_photo/พลังประชารัฐ/0-5-1-2019.jpeg')",
        "พลังประชารัฐ-1-5-4-2019":
          "url('/design_assets/cover_photo/พลังประชารัฐ/1-5-4-2019.jpeg')",
        "พลังประชารัฐ-2-5-6-2019":
          "url('/design_assets/cover_photo/พลังประชารัฐ/2-5-6-2019.jpeg')",
        "พลังประชารัฐ-3-5-31-2019":
          "url('/design_assets/cover_photo/พลังประชารัฐ/3-5-31-2019.jpeg')",
        "พลังประชารัฐ-4-6-15-2019":
          "url('/design_assets/cover_photo/พลังประชารัฐ/4-6-15-2019.jpeg')",
        "พลังประชารัฐ-5-8-9-2019":
          "url('/design_assets/cover_photo/พลังประชารัฐ/5-8-9-2019.jpeg')",
        "พลังประชารัฐ-6-9-13-2019":
          "url('/design_assets/cover_photo/พลังประชารัฐ/6-9-13-2019.jpeg')",
        "พลังประชารัฐ-7-10-2-2019":
          "url('/design_assets/cover_photo/พลังประชารัฐ/7-10-2-2019.jpeg')",
        "พลังประชารัฐ-8-10-13-2019":
          "url('/design_assets/cover_photo/พลังประชารัฐ/8-10-13-2019.jpeg')",
        "พลังประชารัฐ-9-12-5-2019":
          "url('/design_assets/cover_photo/พลังประชารัฐ/9-12-5-2019.jpeg')",
        "พลังประชารัฐ-10-12-30-2019":
          "url('/design_assets/cover_photo/พลังประชารัฐ/10-12-30-2019.jpeg')",
        "พลังประชารัฐ-11-1-7-2020":
          "url('/design_assets/cover_photo/พลังประชารัฐ/11-1-7-2020.jpeg')",
        "พลังประชารัฐ-12-3-23-2020":
          "url('/design_assets/cover_photo/พลังประชารัฐ/12-3-23-2020.jpeg')",
        "พลังประชารัฐ-13-3-31-2020":
          "url('/design_assets/cover_photo/พลังประชารัฐ/13-3-31-2020.jpeg')",
        "พลังประชารัฐ-14-5-10-2020":
          "url('/design_assets/cover_photo/พลังประชารัฐ/14-5-10-2020.jpeg')",
        "พลังประชารัฐ-15-5-4-2021":
          "url('/design_assets/cover_photo/พลังประชารัฐ/15-5-4-2021.jpeg')",
        "พลังประชารัฐ-16-6-3-2021":
          "url('/design_assets/cover_photo/พลังประชารัฐ/16-6-3-2021.jpeg')",
        "พลังประชารัฐ-17-7-28-2021":
          "url('/design_assets/cover_photo/พลังประชารัฐ/17-7-28-2021.jpeg')",
        "พลังประชารัฐ-18-8-12-2021":
          "url('/design_assets/cover_photo/พลังประชารัฐ/18-8-12-2021.jpeg')",
        "พลังประชารัฐ-19-2-3-2022":
          "url('/design_assets/cover_photo/พลังประชารัฐ/19-2-3-2022.jpeg')",
        "พลังประชารัฐ-20-2-23-2022":
          "url('/design_assets/cover_photo/พลังประชารัฐ/20-2-23-2022.jpeg')",
        "พลังประชารัฐ-21-4-13-2022":
          "url('/design_assets/cover_photo/พลังประชารัฐ/21-4-13-2022.jpeg')",
        "ภูมิใจไทย-0-5-1-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/0-5-1-2019.jpg')",
        "ภูมิใจไทย-1-5-2-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/1-5-2-2019.jpg')",
        "ภูมิใจไทย-2-5-17-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/2-5-17-2019.jpg')",
        "ภูมิใจไทย-3-5-24-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/3-5-24-2019.jpg')",
        "ภูมิใจไทย-4-5-30-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/4-5-30-2019.jpg')",
        "ภูมิใจไทย-5-7-4-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/5-7-4-2019.jpg')",
        "ภูมิใจไทย-6-7-10-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/6-7-10-2019.jpg')",
        "ภูมิใจไทย-7-7-13-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/7-7-13-2019.jpg')",
        "ภูมิใจไทย-8-7-15-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/8-7-15-2019.jpg')",
        "ภูมิใจไทย-9-7-18-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/9-7-18-2019.jpg')",
        "ภูมิใจไทย-10-7-19-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/10-7-19-2019.jpg')",
        "ภูมิใจไทย-11-7-23-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/11-7-23-2019.jpg')",
        "ภูมิใจไทย-12-7-24-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/12-7-24-2019.jpg')",
        "ภูมิใจไทย-13-8-9-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/13-8-9-2019.jpg')",
        "ภูมิใจไทย-14-8-21-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/14-8-21-2019.jpg')",
        "ภูมิใจไทย-15-8-23-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/15-8-23-2019.jpg')",
        "ภูมิใจไทย-16-9-2-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/16-9-2-2019.jpg')",
        "ภูมิใจไทย-17-9-5-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/17-9-5-2019.jpg')",
        "ภูมิใจไทย-18-9-14-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/18-9-14-2019.jpg')",
        "ภูมิใจไทย-19-10-1-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/19-10-1-2019.jpg')",
        "ภูมิใจไทย-20-10-13-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/20-10-13-2019.jpg')",
        "ภูมิใจไทย-21-10-14-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/21-10-14-2019.jpg')",
        "ภูมิใจไทย-22-11-3-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/22-11-3-2019.jpg')",
        "ภูมิใจไทย-23-12-2-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/23-12-2-2019.jpg')",
        "ภูมิใจไทย-24-12-4-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/24-12-4-2019.jpg')",
        "ภูมิใจไทย-25-12-6-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/25-12-6-2019.jpg')",
        "ภูมิใจไทย-26-12-7-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/26-12-7-2019.jpg')",
        "ภูมิใจไทย-27-12-8-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/27-12-8-2019.jpg')",
        "ภูมิใจไทย-28-12-27-2019":
          "url('/design_assets/cover_photo/ภูมิใจไทย/28-12-27-2019.jpg')",
        "ภูมิใจไทย-29-1-8-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/29-1-8-2020.jpg')",
        "ภูมิใจไทย-30-1-9-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/30-1-9-2020.jpg')",
        "ภูมิใจไทย-31-1-11-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/31-1-11-2020.jpg')",
        "ภูมิใจไทย-32-1-16-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/32-1-16-2020.jpg')",
        "ภูมิใจไทย-33-1-17-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/33-1-17-2020.jpg')",
        "ภูมิใจไทย-34-2-1-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/34-2-1-2020.jpg')",
        "ภูมิใจไทย-35-2-2-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/35-2-2-2020.jpg')",
        "ภูมิใจไทย-36-3-1-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/36-3-1-2020.jpg')",
        "ภูมิใจไทย-37-3-2-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/37-3-2-2020.jpg')",
        "ภูมิใจไทย-38-3-24-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/38-3-24-2020.jpg')",
        "ภูมิใจไทย-39-3-25-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/39-3-25-2020.jpg')",
        "ภูมิใจไทย-40-4-2-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/40-4-2-2020.jpg')",
        "ภูมิใจไทย-41-4-3-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/41-4-3-2020.jpg')",
        "ภูมิใจไทย-42-4-5-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/42-4-5-2020.jpg')",
        "ภูมิใจไทย-43-4-6-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/43-4-6-2020.jpg')",
        "ภูมิใจไทย-44-4-7-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/44-4-7-2020.jpg')",
        "ภูมิใจไทย-45-4-9-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/45-4-9-2020.jpg')",
        "ภูมิใจไทย-46-6-1-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/46-6-1-2020.jpg')",
        "ภูมิใจไทย-47-6-2-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/47-6-2-2020.jpg')",
        "ภูมิใจไทย-48-6-3-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/48-6-3-2020.jpg')",
        "ภูมิใจไทย-49-6-7-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/49-6-7-2020.jpg')",
        "ภูมิใจไทย-50-6-28-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/50-6-28-2020.jpg')",
        "ภูมิใจไทย-51-8-12-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/51-8-12-2020.jpg')",
        "ภูมิใจไทย-52-8-29-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/52-8-29-2020.jpg')",
        "ภูมิใจไทย-53-9-8-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/53-9-8-2020.jpg')",
        "ภูมิใจไทย-54-11-13-2020":
          "url('/design_assets/cover_photo/ภูมิใจไทย/54-11-13-2020.jpg')",
        "ภูมิใจไทย-55-2-16-2021":
          "url('/design_assets/cover_photo/ภูมิใจไทย/55-2-16-2021.jpg')",
        "ภูมิใจไทย-56-11-1-2021":
          "url('/design_assets/cover_photo/ภูมิใจไทย/56-11-1-2021.jpg')",
        "ภูมิใจไทย-57-12-28-2021":
          "url('/design_assets/cover_photo/ภูมิใจไทย/57-12-28-2021.jpg')",
        "ภูมิใจไทย-58-2-3-2022":
          "url('/design_assets/cover_photo/ภูมิใจไทย/58-2-3-2022.jpg')",
        "ภูมิใจไทย-59-6-15-2022":
          "url('/design_assets/cover_photo/ภูมิใจไทย/59-6-15-2022.jpg')",

        "ประชาธิปัตย์-9-2-24-2020":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/9-2-24-2020.jpeg')",
        "ประชาธิปัตย์-0-5-1-2019":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/0-5-1-2019.jpeg')",
        "ประชาธิปัตย์-1-5-4-2019":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/1-5-4-2019.jpeg')",
        "ประชาธิปัตย์-2-6-3-2019":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/2-6-3-2019.jpeg')",
        "ประชาธิปัตย์-3-7-28-2019":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/3-7-28-2019.png')",
        "ประชาธิปัตย์-4-8-11-2019":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/4-8-11-2019.jpeg')",
        "ประชาธิปัตย์-5-9-3-2019":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/5-9-3-2019.jpeg')",
        "ประชาธิปัตย์-6-10-12-2019":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/6-10-12-2019.jpeg')",
        "ประชาธิปัตย์-7-10-31-2019":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/7-10-31-2019.png')",
        "ประชาธิปัตย์-8-12-4-2019":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/8-12-4-2019.png')",
        "ประชาธิปัตย์-10-4-1-2020":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/10-4-1-2020.jpeg')",
        "ประชาธิปัตย์-11-6-3-2020":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/11-6-3-2020.jpeg')",
        "ประชาธิปัตย์-12-7-4-2020":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/12-7-4-2020.jpeg')",
        "ประชาธิปัตย์-13-8-3-2020":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/13-8-3-2020.jpeg')",
        "ประชาธิปัตย์-14-9-3-2020":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/14-9-3-2020.jpeg')",
        "ประชาธิปัตย์-15-10-6-2020":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/15-10-6-2020.jpeg')",
        "ประชาธิปัตย์-16-10-21-2020":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/16-10-21-2020.jpeg')",
        "ประชาธิปัตย์-17-10-23-2020":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/17-10-23-2020.jpeg')",
        "ประชาธิปัตย์-18-10-25-2020":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/18-10-25-2020.jpeg')",
        "ประชาธิปัตย์-19-12-5-2020":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/19-12-5-2020.jpeg')",
        "ประชาธิปัตย์-20-2-3-2022":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/20-2-3-2022.jpeg')",
        "ประชาธิปัตย์-21-2-8-2022":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/21-2-8-2022.jpeg')",
        "ประชาธิปัตย์-22-5-24-2022":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/22-5-24-2022.jpeg')",
        "ประชาธิปัตย์-23-6-8-2022":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/23-6-8-2022.jpeg')",
        "ประชาธิปัตย์-24-7-1-2022":
          "url('/design_assets/cover_photo/ประชาธิปัตย์/24-7-1-2022.png')",
        "เพื่อไทย-7-2-5-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/7-2-5-2020.jpg')",
        "เพื่อไทย-0-5-1-2019":
          "url('/design_assets/cover_photo/เพื่อไทย/0-5-1-2019.jpg')",
        "เพื่อไทย-1-5-4-2019":
          "url('/design_assets/cover_photo/เพื่อไทย/1-5-4-2019.jpg')",
        "เพื่อไทย-2-6-3-2019":
          "url('/design_assets/cover_photo/เพื่อไทย/2-6-3-2019.jpg')",
        "เพื่อไทย-3-7-28-2019":
          "url('/design_assets/cover_photo/เพื่อไทย/3-7-28-2019.jpg')",
        "เพื่อไทย-4-12-19-2019":
          "url('/design_assets/cover_photo/เพื่อไทย/4-12-19-2019.jpg')",
        "เพื่อไทย-5-1-4-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/5-1-4-2020.jpg')",
        "เพื่อไทย-6-2-4-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/6-2-4-2020.jpg')",
        "เพื่อไทย-8-2-12-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/8-2-12-2020.jpg')",
        "เพื่อไทย-9-2-13-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/9-2-13-2020.png')",
        "เพื่อไทย-10-2-17-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/10-2-17-2020.jpg')",
        "เพื่อไทย-11-3-10-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/11-3-10-2020.jpg')",
        "เพื่อไทย-12-3-13-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/12-3-13-2020.jpg')",
        "เพื่อไทย-13-4-15-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/13-4-15-2020.jpg')",
        "เพื่อไทย-14-10-1-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/14-10-1-2020.jpg')",
        "เพื่อไทย-15-10-27-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/15-10-27-2020.jpg')",
        "เพื่อไทย-16-11-10-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/16-11-10-2020.jpg')",
        "เพื่อไทย-17-11-17-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/17-11-17-2020.jpg')",
        "เพื่อไทย-18-11-28-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/18-11-28-2020.jpg')",
        "เพื่อไทย-19-12-3-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/19-12-3-2020.jpg')",
        "เพื่อไทย-20-12-12-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/20-12-12-2020.jpg')",
        "เพื่อไทย-21-12-13-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/21-12-13-2020.jpg')",
        "เพื่อไทย-22-12-14-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/22-12-14-2020.jpg')",
        "เพื่อไทย-23-12-15-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/23-12-15-2020.jpg')",
        "เพื่อไทย-24-12-16-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/24-12-16-2020.jpg')",
        "เพื่อไทย-25-12-17-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/25-12-17-2020.jpg')",
        "เพื่อไทย-26-12-18-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/26-12-18-2020.jpg')",
        "เพื่อไทย-27-12-19-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/27-12-19-2020.jpg')",
        "เพื่อไทย-28-12-21-2020":
          "url('/design_assets/cover_photo/เพื่อไทย/28-12-21-2020.jpg')",
        "เพื่อไทย-29-1-1-2021":
          "url('/design_assets/cover_photo/เพื่อไทย/29-1-1-2021.jpg')",
        "เพื่อไทย-30-2-1-2021":
          "url('/design_assets/cover_photo/เพื่อไทย/30-2-1-2021.jpg')",
        "เพื่อไทย-31-5-11-2021":
          "url('/design_assets/cover_photo/เพื่อไทย/31-5-11-2021.jpg')",
        "เพื่อไทย-32-5-25-2021":
          "url('/design_assets/cover_photo/เพื่อไทย/32-5-25-2021.jpg')",
        "เพื่อไทย-33-7-14-2021":
          "url('/design_assets/cover_photo/เพื่อไทย/33-7-14-2021.jpg')",
        "เพื่อไทย-34-8-25-2021":
          "url('/design_assets/cover_photo/เพื่อไทย/34-8-25-2021.jpg')",
        "เพื่อไทย-35-9-4-2021":
          "url('/design_assets/cover_photo/เพื่อไทย/35-9-4-2021.jpg')",
        "เพื่อไทย-36-10-16-2021":
          "url('/design_assets/cover_photo/เพื่อไทย/36-10-16-2021.jpg')",
        "เพื่อไทย-37-10-30-2021":
          "url('/design_assets/cover_photo/เพื่อไทย/37-10-30-2021.jpg')",
        "เพื่อไทย-38-11-30-2021":
          "url('/design_assets/cover_photo/เพื่อไทย/38-11-30-2021.jpg')",
        "เพื่อไทย-39-1-7-2022":
          "url('/design_assets/cover_photo/เพื่อไทย/39-1-7-2022.jpg')",
        "เพื่อไทย-40-2-3-2022":
          "url('/design_assets/cover_photo/เพื่อไทย/40-2-3-2022.jpg')",
        "เพื่อไทย-41-3-8-2022":
          "url('/design_assets/cover_photo/เพื่อไทย/41-3-8-2022.jpg')",
        "เพื่อไทย-42-5-16-2022":
          "url('/design_assets/cover_photo/เพื่อไทย/42-5-16-2022.jpg')",
        "เพื่อไทย-43-5-22-2022":
          "url('/design_assets/cover_photo/เพื่อไทย/43-5-22-2022.jpg')",
        "เพื่อไทย-44-6-2-2022":
          "url('/design_assets/cover_photo/เพื่อไทย/44-6-2-2022.jpg')",
        "เพื่อไทย-45-6-3-2022":
          "url('/design_assets/cover_photo/เพื่อไทย/45-6-3-2022.jpg')",
        "อนาคตใหม่/ก้าวไกล-0-5-1-2019":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/0-5-1-2019.jpg')",
        "อนาคตใหม่/ก้าวไกล-1-6-2-2019":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/1-6-2-2019.jpg')",
        "อนาคตใหม่/ก้าวไกล-2-6-4-2019":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/2-6-4-2019.jpg')",
        "อนาคตใหม่/ก้าวไกล-3-6-6-2019":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/3-6-6-2019.jpg')",
        "อนาคตใหม่/ก้าวไกล-4-7-28-2019":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/4-7-28-2019.jpg')",
        "อนาคตใหม่/ก้าวไกล-5-7-30-2019":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/5-7-30-2019.jpg')",
        "อนาคตใหม่/ก้าวไกล-6-10-13-2019":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/6-10-13-2019.jpg')",
        "อนาคตใหม่/ก้าวไกล-7-11-3-2019":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/7-11-3-2019.jpg')",
        "อนาคตใหม่/ก้าวไกล-8-11-13-2019":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/8-11-13-2019.jpg')",
        "อนาคตใหม่/ก้าวไกล-9-12-17-2019":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/9-12-17-2019.jpg')",
        "อนาคตใหม่/ก้าวไกล-10-2-24-2020":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/10-2-24-2020.jpg')",
        "อนาคตใหม่/ก้าวไกล-11-3-14-2020":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/11-3-14-2020.jpg')",
        "อนาคตใหม่/ก้าวไกล-12-7-30-2020":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/12-7-30-2020.jpg')",
        "อนาคตใหม่/ก้าวไกล-13-2-11-2021":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/13-2-11-2021.jpg')",
        "อนาคตใหม่/ก้าวไกล-14-6-1-2021":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/14-6-1-2021.jpg')",
        "อนาคตใหม่/ก้าวไกล-15-1-17-2022":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/15-1-17-2022.jpg')",
        "อนาคตใหม่/ก้าวไกล-16-1-19-2022":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/16-1-19-2022.jpg')",
        "อนาคตใหม่/ก้าวไกล-17-5-17-2022":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/17-5-17-2022.jpg')",
        "อนาคตใหม่/ก้าวไกล-18-5-25-2022":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/18-5-25-2022.jpg')",
        "อนาคตใหม่/ก้าวไกล-19-6-7-2022":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/19-6-7-2022.jpg')",
        "อนาคตใหม่/ก้าวไกล-20-7-17-2022":
          "url('/design_assets/cover_photo/อนาคตใหม่_ก้าวไกล/20-7-17-2022.jpg')",
        "เสรีรวมไทย-0-5-1-2019":
          "url('/design_assets/cover_photo/เสรีรวมไทย/0-5-1-2019.jpg')",
        "เสรีรวมไทย-1-5-4-2019":
          "url('/design_assets/cover_photo/เสรีรวมไทย/1-5-4-2019.jpg')",
        "เสรีรวมไทย-2-5-7-2019":
          "url('/design_assets/cover_photo/เสรีรวมไทย/2-5-7-2019.jpg')",
        "เสรีรวมไทย-3-6-2-2019":
          "url('/design_assets/cover_photo/เสรีรวมไทย/3-6-2-2019.jpg')",
        "เสรีรวมไทย-4-7-3-2019":
          "url('/design_assets/cover_photo/เสรีรวมไทย/4-7-3-2019.jpg')",
        "เสรีรวมไทย-5-7-4-2019":
          "url('/design_assets/cover_photo/เสรีรวมไทย/5-7-4-2019.jpg')",
        "เสรีรวมไทย-6-7-13-2019":
          "url('/design_assets/cover_photo/เสรีรวมไทย/6-7-13-2019.jpg')",
        "เสรีรวมไทย-7-7-27-2019":
          "url('/design_assets/cover_photo/เสรีรวมไทย/7-7-27-2019.jpg')",
      },
    },
  },
  plugins: [],
};
