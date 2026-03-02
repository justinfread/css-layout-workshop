import styles from './PracticeGrid.module.css';

export default function PracticeGrid() {
  return (
    <div className={styles.wrapper}>
      <h3>Practice Grid</h3>
      <div className={styles.container}>
        <div className={styles.box}>Box 1</div>
        <div className={styles.box}>Box 2</div>           
        <div className={styles.box}>Box 3</div>
        <div className={styles.box}>Box 4</div>
        <div className={styles.box}>Box 5</div>
        <div className={styles.box}>Box 6</div>
      </div>
    </div>
  );
}