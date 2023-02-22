import { SOCIALS } from "@config";
import { IconButton } from "@camome/core/IconButton";
import socialIcons from "@assets/socialIcons";
import styles from "./Socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.container}>
      {SOCIALS.filter((social) => social.active).map((social) => (
        <IconButton
          component="a"
          href={social.href}
          aria-label={social.linkTitle}
          variant="ghost"
          colorScheme="neutral"
          key={social.name}
        >
          {socialIcons[social.name]}
        </IconButton>
      ))}
    </div>
  );
}
