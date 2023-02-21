import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://camome.net/templates/bloggy",
  author: "Matsura Yuma",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Bloggy",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 9,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://camome.net",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://camome.net",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://camome.net",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://camome.net",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://camome.net",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://camome.net",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://camome.net",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://camome.net",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://camome.net",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://camome.net",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
