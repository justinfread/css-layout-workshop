import styles from "./FlexSizing.module.css";

export default function FlexSizing() {
  return (
    <div className={styles.wrapper}>
      <h3>Flex Wrap</h3>

      <div className={styles.wrapContainer}>
        <div className={styles.box}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
        <div className={styles.box}>4</div>
        <div className={styles.box}>5</div>
      </div>

      <h3>Flex Grow</h3>

      <div className={styles.growContainer}>
        <div className={styles.growOne}>flex: 1</div>
        <div className={styles.growTwo}>flex: 2</div>
        <div className={styles.growOne}>flex: 1</div>
      </div>

      <h3>Flex Shrink</h3>
        <p>
          When the container is smaller than the items, flex-shrink controls how much
          each item is allowed to shrink. Note the overflow in the yellow box when you 
          resize the window.
        </p>
        <div className={styles.shrinkContainer}>
        <div className={styles.shrinkOne}>flex-shrink: 1</div>
        <div className={styles.shrinkZero}>flex-shrink: 0</div>
        <div className={styles.shrinkTwo}>flex-shrink: 2</div>
      </div>
    </div>
  );
}