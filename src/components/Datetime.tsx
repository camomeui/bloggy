import { IconCalendarEvent } from "@tabler/icons-react";
import clsx from "clsx";
import styles from "./Datetime.module.scss";

export interface Props {
  datetime: string | Date;
  className?: string;
}

export default function Datetime({ datetime, className }: Props) {
  return (
    <div className={clsx(styles.container, className)}>
      <IconCalendarEvent className={styles.calender} />
      <span className="sr-only">Posted on:</span>
      <span>
        <FormattedDatetime datetime={datetime} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = myDatetime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return <>{date}</>;
};
