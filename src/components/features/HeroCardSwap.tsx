import CardSwap, { Card } from "../CardSwap";
import * as styles from "./HeroCardSwap.css";

export default function HeroCardSwap() {
  return (
    <div className={styles.container}>
      <CardSwap
        width={480}
        height={340}
        cardDistance={70}
        verticalDistance={90}
        delay={4000}
        pauseOnHover={true}
        skewAmount={8}
        onCardClick={() => {}}
      >
        <Card className={styles.cardContent}>
          <div className={styles.windowHeader}>
            <div className={styles.windowControls}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.windowTitle}>Film Camera</div>
          </div>
          <div className={styles.windowBody}>
            <img
              src="/hobby_camera.png"
              alt="Film Camera"
              className={styles.image}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Card>
        <Card className={styles.cardContent}>
          <div className={styles.windowHeader}>
            <div className={styles.windowControls}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.windowTitle}>European Street</div>
          </div>
          <div className={styles.windowBody}>
            <img
              src="/hobby_travel.png"
              alt="European Street"
              className={styles.image}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Card>
        <Card className={styles.cardContent}>
          <div className={styles.windowHeader}>
            <div className={styles.windowControls}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.windowTitle}>Flat White Coffee</div>
          </div>
          <div className={styles.windowBody}>
            <img
              src="/hobby_coffee.png"
              alt="Flat White Coffee"
              className={styles.image}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Card>
      </CardSwap>
    </div>
  );
}
