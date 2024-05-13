import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroStuff}>
        <div className={styles.header}></div>

        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <Image
              src="/img/latest.jpeg"
              alt="Inger Wolf"
              width={1666}
              height={1666}
            />
          </div>
          <div className={styles.heroRight}>
            Et lille isoleret øsamfund fuld af hemmeligheder
            <p>
              <br />
            </p>
            Helholm er en turistperle midt i Kattegat. Det er naturøen, du
            aldrig glemmer, et lille isoleret øsamfund. De fleste føler en stor
            ro allerede på færgen på vej dertil, men for Agnes Vrangler, der
            selv kommer fra øen, er det et klaustrofobisk sted fuld af skyld,
            skam og fortielser. Derfor har hun undgået at tage hjem i 14 år.
            <p>
              <br />
            </p>
            Agnes har i stedet skabt sit eget liv i byen. Med sin kæreste,
            Morten, et job som journalist på Radio Swift og en altopslugende
            interesse for uopklarede drabssager. Hun bruger størstedelen af sin
            tid på sin true crime-blog, Nattens stemme.
            <p>
              <br />
            </p>
            Men da to drenge finder et afskåret hoved i en af Helholms moser,
            ser Agnes pludselig en unik chance for at lave en helt særlig
            historie – den podcast, hun så længe har drømt om. Men Agnes’ drøm
            bliver hurtigt til et mareridt, for øen gemmer på langt flere
            hemmeligheder.
            <p>
              <br />
            </p>
            Mordene på Helholm er første bind i Inger Wolfs nye krimiserie med
            journalisten Agnes Vrangler.
          </div>
        </div>
      </div>
    </section>
  );
}
