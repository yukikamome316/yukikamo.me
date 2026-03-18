import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import * as styles from "./CardSwap.css";

interface CardProps extends React.ComponentPropsWithRef<"div"> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, children, className, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`${styles.card} ${customClass ?? ""} ${className ?? ""}`.trim()}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: "elastic" | "smooth";
  direction?: "vertical" | "horizontal";
  children: React.ReactNode;
}

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  direction = "vertical",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power3.inOut",
          durDrop: 0.5,
          durMove: 0.5,
          durReturn: 0.5,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const intervalRef = useRef<number>(0);
  const container = useRef<HTMLDivElement>(null);
  const flyingOut = useRef(new Set<number>());

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current!,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );

    const updateCursors = () => {
      refs.forEach((r, i) => {
        if (r.current) {
          r.current.style.cursor =
            order.current[0] === i ? "pointer" : "default";
        }
      });
    };

    const swap = () => {
      if (order.current.length < 2) return;

      // 状態を即座に更新しておく
      const [front, ...rest] = order.current;
      order.current = [...rest, front];
      updateCursors();

      const elFront = refs[front].current!;
      flyingOut.current.add(front);

      const dropVars =
        direction === "horizontal"
          ? {
              x: `+=${width + refs.length * cardDistance + 50}`,
              y: `-=80`,
              rotation: 8,
              scale: 1.05,
            }
          : {
              y: `+=${height + refs.length * verticalDistance + 50}`,
              x: `+=80`,
              rotation: -8,
              scale: 1.05,
            };

      // 「いま最前面にいるカード」は一番手前のまま飛び出させる
      gsap.set(elFront, { zIndex: refs.length + 10 });

      // 飛び出しアニメーション
      gsap.to(elFront, {
        ...dropVars,
        duration: config.durDrop,
        ease: config.ease,
        overwrite: "auto",
        onComplete: () => {
          gsap.killTweensOf(elFront);
          flyingOut.current.delete(front);

          // 後ろに回り込む位置を、現在のアニメーション完了時点の配列から計算
          const currentIdx = order.current.indexOf(front);
          const backSlot = makeSlot(
            currentIdx,
            cardDistance,
            verticalDistance,
            refs.length
          );

          gsap.set(elFront, { zIndex: backSlot.zIndex });
          gsap.to(elFront, {
            x: backSlot.x,
            y: backSlot.y,
            z: backSlot.z,
            rotation: 0,
            scale: 1,
            duration: config.durReturn,
            ease: config.ease,
            overwrite: "auto",
          });
        },
      });

      // 後続のカードを前に詰めるアニメーション
      rest.forEach((idx, i) => {
        // もし直前にクリックされて別の飛び出しアニメーション中なら、その軌道を邪魔しない
        if (flyingOut.current.has(idx)) return;

        const el = refs[idx].current!;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);

        // アニメーションを開始する前に zIndex だけ即座に更新しておく
        gsap.set(el, { zIndex: slot.zIndex });

        gsap.to(el, {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove,
          ease: config.ease,
          delay: i * 0.05,
          overwrite: "auto",
        });
      });
    };

    const handleCardClick = (i: number) => {
      // 常に現在のトップカードがクリックされたらスワップを発動
      if (order.current[0] === i) {
        clearInterval(intervalRef.current);
        swap();
        intervalRef.current = window.setInterval(swap, delay);
      }
    };

    // 初期ポインター設定とクリックイベント登録
    refs.forEach((r, i) => {
      if (r.current) {
        r.current.onclick = () => handleCardClick(i);
      }
    });
    updateCursors();

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current!;
      const pause = () => {
        refs.forEach((r) => {
          if (r.current) gsap.getTweensOf(r.current).forEach((t) => t.pause());
        });
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        refs.forEach((r) => {
          if (r.current) gsap.getTweensOf(r.current).forEach((t) => t.play());
        });
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    width,
    height,
    cardDistance,
    verticalDistance,
    delay,
    pauseOnHover,
    skewAmount,
    easing,
    direction,
  ]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child as React.ReactElement<CardProps>, {
          key: i,
          ref: refs[i],
          style: {
            width,
            height,
            ...((child as React.ReactElement<CardProps>).props.style ?? {}),
          },
          onClick: (e: React.MouseEvent) => {
            (child as React.ReactElement<CardProps>).props.onClick?.(
              e as React.MouseEvent<HTMLDivElement>
            );
            onCardClick?.(i);
          },
        })
      : child
  );

  return (
    <div ref={container} className={styles.container} style={{ width, height }}>
      {rendered}
    </div>
  );
};

export default CardSwap;
