import CardSwap, { Card } from "../CardSwap";
import * as styles from "./HeroCardSwap.css";

export default function HeroCardSwap() {
  return (
    <div className={styles.container}>
      <CardSwap
        width={380}
        height={260}
        cardDistance={60}
        verticalDistance={80}
        delay={4000}
        pauseOnHover={true}
        skewAmount={8}
        onCardClick={() => {}}
      >
        <Card className={styles.cardContent}>
          <img
            src="/hobby_camera.png"
            alt="Film Camera"
            className={styles.image}
          />
        </Card>
        <Card className={styles.cardContent}>
          <img
            src="/hobby_travel.png"
            alt="European Street"
            className={styles.image}
          />
        </Card>
        <Card className={styles.cardContent}>
          <img
            src="/hobby_coffee.png"
            alt="Flat White Coffee"
            className={styles.image}
          />
        </Card>
      </CardSwap>
    </div>
  );
}
