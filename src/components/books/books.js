import styles from "./books.module.css";

import Link from "next/link";
import Image from "next/image";

import danishData from "/data/danishBooks.json";
import englishData from "/data/englishBooks.json";

const Books = ({ language }) => {
  const booksData = language === "english" ? englishData : danishData;
  return (
    <div className={`${styles.glassContainer} glassContainer`}>
      <main className={styles.booksSec}>
        <div className={styles.books}>
          {booksData.map((book, index) => {
            const descriptionParagraphs = book.description
              .split("\n")
              .map((paragraph, i) => <p key={i}>{paragraph}</p>);
            return (
              <div key={index} className={`${styles.book} ${styles[book.style]}`}>
                <div className={styles.bookPic}>
                  <Image src={book.img} alt={book.title} width={500} height={500} />
                </div>
                <div className={styles.bookText}>
                  <h3>{book.title}</h3>
                  {descriptionParagraphs}
                  {language === "english" && (
                    <Link className={styles.amazonLink} href={book.url} target="_blank">
                      <Image
                        src="/img/amazon-logo.png"
                        alt="Amazon logo"
                        width={200}
                        height={200}
                      />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Books;
