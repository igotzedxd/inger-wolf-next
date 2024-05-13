import styles from "./books.module.css";
import booksData from "/data/books.json";
import Image from "next/image";

const Books = () => {
  return (
    <div className={styles.glassContainer}>
      <main className={styles.booksSec}>
        <div className={styles.books}>
          {booksData.map((book, index) => {
            const descriptionParagraphs = book.description
              .split("\n")
              .map((paragraph, i) => <p key={i}>{paragraph}</p>);
            return (
              <div key={index} className={`${styles.book} ${styles[book.style]}`}>
                <div className={styles.bookPic}>
                  <Image src={book.img} alt={book.title} width={1000} height={1000} />
                </div>
                <div className={styles.bookText}>
                  <h3>{book.title}</h3>
                  {descriptionParagraphs}
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
