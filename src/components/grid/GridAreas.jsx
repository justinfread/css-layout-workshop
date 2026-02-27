import styles from "./GridAreas.module.css";

export default function GridAreas() {
  return (
    <div className={styles.wrapper}>
      <h3>Grid Template Areas</h3>
      <p>
        Grid areas lets you name parts of a layout (header, sidebar, content,
        footer) and place them using <code>grid-template-areas</code>{" "} which takes an<br/>
        array of string arguments. You can easily swap the position of content and sidebar 
        by changing the order of the names in the string. <br/><code>"sidebar content content"</code>
      </p>

      <div className={styles.layout}>
        <div className={styles.header}>Header</div>
        <div className={styles.sidebar}>Sidebar</div>
        <div className={styles.content}>Content</div>
        <div className={styles.footer}>Footer</div>
      </div>
    </div>
  );
}