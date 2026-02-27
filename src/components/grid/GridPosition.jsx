import styles from "./GridPosition.module.css";

export default function GridPosition() {
  return (
    <div className={styles.wrapper}>
      <h3>Grid Position</h3>
      <p>
        You can place and size items by spanning rows and columns with
        {" "}<code>grid-column</code> and <code>grid-row</code>.<br/>
        Think of the first div as a featured item that should take up
        twice the space of the others. 
      </p>

      <div className={styles.gridContainer}>
        <div className={`${styles.box} ${styles.feature}`}>Featured Box</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
        <div className={styles.box}>4</div>
        <div className={styles.box}>5</div>
        <div className={styles.box}>6</div>
        <div className={styles.box}>7</div>
      </div>
    </div>
  );
}