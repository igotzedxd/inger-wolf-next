"use client";
import { useState } from "react";
import styles from "./nav.module.css";
import { FaBars, FaX } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const currentPage = pathname.substring(1);
  console.log(currentPage);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`${isHomePage ? styles.headerHome : ""} ${styles.header} `}>
      <div className={styles.heroHeading}>
        <div className={styles.navAbout}>
          <Link href="/">
            <h1>Inger Wolf</h1>
          </Link>
          <p>Forfatter</p>
        </div>
      </div>

      <div className={`${styles.navBar} ${menuOpen ? styles.showNav : null}`}>
        <Link onClick={closeMenu} href="/bio">
          BIO
        </Link>
        <p className={styles.navSpace}>|</p>
        <Link onClick={closeMenu} href="/books">
          BØGER
        </Link>
        <p className={styles.navSpace}>|</p>
        <Link onClick={closeMenu} href="/english">
          ENGLISH
        </Link>
        <p className={styles.navSpace}>|</p>
        <Link onClick={closeMenu} href="/interview">
          INTERVIEW
        </Link>
        <p className={styles.navSpace}>|</p>
        <span>
          <div onClick={toggleContact} className={`${styles.navItem} ${styles.navContact}`}>
            KONTAKT
          </div>
          {contactOpen ? (
            <div className={`${styles.contactInfo} ${styles.showContact}`}>
              <p className={styles.contactP}>
                PRESSE, FORESPØRGSLER, UDENLANDSKE RETTIGHEDER, FILMRETTIGHEDER:
              </p>
              <p className={styles.contactP}>info@wolfproductions.dk</p>
            </div>
          ) : (
            ""
          )}
        </span>
      </div>
      <div className={styles.burger}>
        {!menuOpen ? (
          <FaBars
            onClick={toggleMenu}
            className={`${styles.burgerBtn} ${isHomePage ? styles.burgerBtnHome : null}`}
          />
        ) : (
          <FaX onClick={toggleMenu} className={`${styles.burgerBtn} ${styles.burgerX}`} />
        )}
      </div>
    </div>
  );
};

export default Navigation;
