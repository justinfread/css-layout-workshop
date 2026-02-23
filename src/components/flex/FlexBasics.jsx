import styles from "./FlexBasics.module.css";

export default function FlexBasics() {
  return (
    <div className={styles.wrapper}>

      <h3>Center a Div</h3>
      <div className={styles.flexContainer}>
        <div className={styles.demoItem}>
          <span>Centered Content</span>
        </div>
      </div>

      <h3>Control Items on Both Axes</h3>
      <p>
        Because the boxes are aligned horizontally, by default flex-direction is row,
        justify-content controls alignment on the main axis (horizontal in this case).
        align-items controls alignment on the cross axis (vertical in this case).
        So when align-item is set to baseline, bigBox is aligned to the baseline of the text.
      </p>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3 className={styles.bigBox}>BOX</h3>
        </div>
        <div className={styles.box}>
          <h3>box</h3>
        </div>
        <div className={styles.box}>
          <h3>box</h3>
        </div>
      </div>

    </div>
  );
}