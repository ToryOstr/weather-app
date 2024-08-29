import styles from "./FormatDate.module.css";

// eslint-disable-next-line react/prop-types
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

//npm install prop-types - перевірка титу даних 
//пропсів, що надходять до компонента

// FormatDate.propTypes = {
//   date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
//     .isRequired,
// };