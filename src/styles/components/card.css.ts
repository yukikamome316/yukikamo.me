import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css.ts';

export const card = style({
  backgroundColor: vars.color.surface,
  borderRadius: vars.space.medium,
  overflow: 'hidden',
  transition: 'transform 0.2s, box-shadow 0.2s',
  border: `1px solid ${vars.color.border}`,
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 10px 30px rgba(38, 202, 253, 0.15)`,
  }
});

export const cardContent = style({
  padding: vars.space.medium,
});

export const cardTitle = style({
  fontSize: '1.25rem',
  marginBottom: vars.space.small,
});

export const cardDescription = style({
  color: vars.color.muted,
  fontSize: '0.875rem',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: vars.space.large,
  marginTop: vars.space.large,
});
