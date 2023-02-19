import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";
import styles from "./Card.module.scss";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;
  return (
    <li className={styles.container}>
      <a href={href}>{secHeading ? <h2>{title}</h2> : <h3>{title}</h3>}</a>
      <Datetime datetime={pubDatetime} className={styles.datetime} />
      <p>{description}</p>
    </li>
  );
}
