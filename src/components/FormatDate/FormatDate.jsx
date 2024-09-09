import styles from "./FormatDate.module.css";

export default function FormatDate({ date }) {

  const d = new Date(date);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatedDate = `${d.toLocaleDateString("en-us", options)}`;

  return <span className={styles.date}>{`${formatedDate}`}</span>;
}
