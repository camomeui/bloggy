import type { SocialIcons } from "@types";
import {
  TbBrandGithub,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitch,
  TbBrandTwitter,
  TbBrandYoutube,
  TbBrandDiscord,
  TbBrandGitlab,
  TbBrandTelegram,
  TbMail,
} from "react-icons/tb";

const socialIcons: SocialIcons = {
  Github: <TbBrandGithub />,
  Facebook: <TbBrandFacebook />,
  Instagram: <TbBrandInstagram />,
  LinkedIn: <TbBrandLinkedin />,
  Mail: <TbMail />,
  Twitter: <TbBrandTwitter />,
  Twitch: <TbBrandTwitch />,
  YouTube: <TbBrandYoutube />,
  Discord: <TbBrandDiscord />,
  GitLab: <TbBrandGitlab />,
  Telegram: <TbBrandTelegram />,
};

export default socialIcons;
