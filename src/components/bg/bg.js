"use client";
import styles from "./bg.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Bg = () => {
  const pathname = usePathname();
  const currentPage = pathname.substring(1);
  return (
    <div className={styles.bg}>
      {currentPage ? (
        <Image
          src={`/img/bg/bg-${currentPage}.jpg`}
          alt="background image of books"
          width={1920}
          height={1080}
        />
      ) : null}
    </div>
  );
};

export default Bg;
