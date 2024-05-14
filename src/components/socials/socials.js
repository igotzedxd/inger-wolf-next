import styles from "./socials.module.css";
import Link from "next/link";
import { FaFacebook, FaSquareInstagram, FaY, FaYoutube } from "react-icons/fa6";

const Socials = () => {
  return (
    <aside className={styles.socialsContainer}>
      <Link href="https://www.facebook.com/Ingerwolf.writer">
        <FaFacebook className={styles.socialIcon} />
      </Link>
      <Link href="https://www.instagram.com/ingerwolf">
        <FaSquareInstagram className={styles.socialIcon} />
      </Link>
      <Link href="https://www.youtube.com/@ingerwolf1">
        <FaYoutube className={styles.socialIcon} />
      </Link>
    </aside>
  );
};

export default Socials;
