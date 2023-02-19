import { SOCIALS } from "@config";
import { IconButton } from "@camome/core/IconButton";
import socialIcons from "@assets/socialIcons";
import styles from "./Socials.module.scss";

type Props = {
  centered?: boolean;
};

export default function Socials({ centered }: Props) {
  return (
    <div className={styles.container}>
      {SOCIALS.filter(social => social.active).map(social => (
        <IconButton
          component="a"
          href={social.href}
          aria-label={social.linkTitle}
          variant="ghost"
          colorScheme="neutral"
        >
          {socialIcons[social.name]}
        </IconButton>
      ))}
    </div>
  );
}
