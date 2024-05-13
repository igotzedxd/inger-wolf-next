import styles from "./bio.module.css";
import Image from "next/image";

const Bio = () => {
  return (
    <div className="glassContainer">
      <main className={styles.bioSec}>
        <div className={styles.bio}>
          <div className={styles.bioLeft}></div>
          <div className={styles.bioRight}>
            <h2>Kvinden bag tre krimiserier</h2>

            <br />
            <p>
              Inger Wolf er dansk forfatter. Hun er født i Herning i 1971, men er opvokset og bor i
              Aarhus. Hun har en BA i engelsk, som hun tidligere anvendte til at ernære sig som
              freelance oversætter, og hun er mor til Cecilie.
            </p>
            <br />

            <p>
              Inger begyndte at skrive i en meget tidlig alder. Som 15-årig gik hun i gang med sin
              første roman – en bog om et rockband. Denne endte dog i skraldespanden. Flere
              mislykkede forsøg fulgte, indtil hun i 2000 fik sin første bog, Sidespring udgivet.
            </p>

            <p>
              <br />
              Siden er det blevet til tolv andre bøger. Syv i serien om politikommissær Daniel, tre
              i serien om psykiateren Christian Falk og endelig to i serien Pyromanen om
              brandefterforskeren Klara Larsen.
            </p>

            <p></p>

            <p>
              <br />
              Ingers bøger er udgivet i Norge, Sverige, Tyskland, Frankrig, Holland, Spanien og USA.
            </p>

            <p>
              <br />
              Hun har tidligere modtaget Kriminalakademiets debutantpris, og er i 2019 nomineret til
              Mofibos lydbogpris.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bio;
