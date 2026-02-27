import styles from "./FlexBasics.module.css";

export default function FlexBasics() {
  return (
    <div className={styles.wrapper}>

      <h3>Center a Div</h3>
      <div className={styles.flexContainer}>
        <div className={styles.item}>
          <span>Centered Content</span>
        </div>
      </div>

      <h3>Control Items on Both Axes</h3>
      <p>
        Because the boxes are aligned horizontally, by default flex-direction is row,<br/>
        justify-content controls alignment on the main axis (in this case horizontal).<br/>
        So align-items controls alignment on the cross axis (vertical in this case).<br/>
        When align-items is set to baseline, and attribute of the text, bigBox is aligned<br/>
        higher in the container.
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