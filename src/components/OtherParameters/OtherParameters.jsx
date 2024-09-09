import styles from "./OtherParameters.module.css";

export default function OtherParameters({
  parameterName,
  value,
  metric,
  img,
}) {
  return (
    <div className={styles.parameter}>
      <p className={styles.parameterName}>{parameterName}</p>
      <span>
        &nbsp;
        {value}
        {metric}&nbsp;
      </span>
      <div className={styles.img}>{img}</div>
    </div>
  );
}
