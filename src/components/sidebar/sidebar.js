import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={`${styles.nameSidebar} ${styles.leftSidebar}`}>
      <h2>Inger Wolf</h2>
    </aside>
  );
};

export default Sidebar;
