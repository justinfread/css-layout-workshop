import styles from "./GridBasics.module.css";

export default function GridBasics() {
  return (
    <div className={styles.wrapper}>
      <h3>Basic Grid</h3>
      <p>
        Grid allows you to define rows and columns explicitly. 
        The <code>fr</code> unit distributes available space.
      </p>

      <div className={styles.gridContainer}>
        <div className={styles.box}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
        <div className={styles.box}>4</div>
        <div className={styles.box}>5</div>
        <div className={styles.box}>6</div>
      </div>
    </div>
  );
}