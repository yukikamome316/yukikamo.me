import CardSwap, { Card } from "../CardSwap";
import * as styles from "./HeroCardSwap.css";

interface HeroCard {
  title: string;
  src: string;
}

interface HeroCardSwapProps {
  cards: HeroCard[];
}

export default function HeroCardSwap({ cards }: HeroCardSwapProps) {
  return (
    <div className={styles.container}>
      <CardSwap
        width={600}
        height={381}
        cardDistance={80}
        verticalDistance={56}
        delay={4000}
        skewAmount={4}
      >
        {cards.map((card) => (
          <Card key={card.src} className={styles.cardContent}>
            <div className={styles.windowHeader}>
              <div className={styles.windowControls}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <div className={styles.windowTitle}>{card.title}</div>
            </div>
            <div className={styles.windowBody}>
              <img
                src={card.src}
                alt={card.title}
                className={styles.image}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Card>
        ))}
      </CardSwap>
    </div>
  );
}
