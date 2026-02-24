import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css.ts';

export const timelineContainer = style({
  position: 'relative',
  paddingLeft: vars.space.large,
  '::before': {
    content: '""',
    position: 'absolute',
    left: '7px',
    top: 0,
    bottom: 0,
    width: '2px',
    backgroundColor: `${vars.color.muted}33`,
  }
});

export const timelineItem = style({
  position: 'relative',
  paddingBottom: vars.space.large,
  ':last-child': {
    paddingBottom: 0,
  }
});

export const timelineDot = style({
  position: 'absolute',
  left: `calc(-${vars.space.large} + 3px)`,
  top: '6px',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: vars.color.primary,
  boxShadow: `0 0 0 4px ${vars.color.background}`,
});

export const timelineDate = style({
  fontSize: '0.875rem',
  color: vars.color.muted,
  marginBottom: vars.space.small,
  display: 'block',
});

export const timelineTitle = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  marginBottom: vars.space.small,
  color: vars.color.text,
});

export const timelineDescription = style({
  fontSize: '1rem',
  color: vars.color.text,
  lineHeight: 1.6,
});
