import styles from "./sidebar.module.css";
import { protest } from "@/utils/fonts";

const Sidebar = () => {
  return (
    <aside className={`${styles.nameSidebar} ${styles.leftSidebar} ${protest.className}`}>
      <h2>Inger Wolf</h2>
    </aside>
  );
};

export default Sidebar;
