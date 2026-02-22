import styles from "./FlexBasics.module.css";

export default function FlexBasics() {
  return (
    <div className={styles.demo}>
      <p>display: flex</p>

      <div className={styles["flex-basic"]}>
        <div className={styles.box}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
      </div>
    </div>
  );
}