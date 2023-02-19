import { Button, type ButtonProps } from "@camome/core/Button";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import clsx from "clsx";

import styles from "./ArrowButtonLink.module.scss";

type Props = {
  href: string;
  direction: "next" | "prev";
} & Omit<ButtonProps, "ref">;

export function ArrowButtonLink({
  href,
  direction,
  className,
  ...props
}: Props) {
  const arrowProps: Partial<Omit<ButtonProps, "ref">> =
    direction === "next"
      ? {
          endDecorator: <TbChevronRight />,
        }
      : {
          startDecorator: <TbChevronLeft />,
        };

  return (
    <Button
      component="a"
      variant="ghost"
      colorScheme="neutral"
      href={href}
      {...arrowProps}
      {...props}
      className={clsx(styles.container, className)}
    />
  );
}
