import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css.ts';

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${vars.space.large} ${vars.space.medium}`,
  borderTop: `1px solid ${vars.color.border}`,
  marginTop: vars.space.xlarge,
  color: vars.color.muted,
  fontSize: '0.875rem',
});
