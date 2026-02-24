import React from 'react';
import CardSwap, { Card } from '../CardSwap.jsx';

// Inline simple styles to match light/cute theme
const cardContentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#ffffff', // 白
  border: '1px solid #e4e7ec',
  borderRadius: '16px',
  height: '100%',
  width: '100%',
  boxSizing: 'border-box' as const,
  boxShadow: '0 8px 24px rgba(38, 202, 253, 0.15)', // 水色の淡い影
  overflow: 'hidden',
  padding: '8px',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const,
  borderRadius: '8px',
};

const TypedCard = Card as any;

export default function HeroCardSwap() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
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
        <TypedCard style={cardContentStyle}>
          <img src="/hobby_camera.png" alt="Film Camera" style={imageStyle} />
        </TypedCard>
        <TypedCard style={cardContentStyle}>
          <img src="/hobby_travel.png" alt="European Street" style={imageStyle} />
        </TypedCard>
        <TypedCard style={cardContentStyle}>
          <img src="/hobby_coffee.png" alt="Flat White Coffee" style={imageStyle} />
        </TypedCard>
      </CardSwap>
    </div>
  );
}
