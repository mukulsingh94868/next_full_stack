import Image from "next/image";
import Button from "../components/Button/Button";
import styles from "./page.module.css";
// import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={'/hero.png'} alt="" className={styles.img} height={500} width={500} />
      </div>
    </div>
  );
}

