import { TypographyVariants } from '@mui/material';

export const typography: Partial<TypographyVariants> = {
  fontFamily: 'inherit',
  htmlFontSize: 14,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightLight: 300,
  fontWeightBold: 700,
  fontSize: 14,
  h1: {
    fontWeight: 700,
    fontSize: 'clamp(34px,6.8vw,46px)',
    lineHeight: 'clamp(58px,11vw,75px)',
    letterSpacing: '-0.01562em',
  },

  h2: {
    fontWeight: 700,
    fontSize: 'clamp(32px,6.8vw,41px)',
    lineHeight: 'clamp(52px,11vw,67px)',
    letterSpacing: '-0.00833em',
  },

  h3: {
    fontWeight: 700,
    fontSize: 'clamp(28px,5.3vw,36px)',
    lineHeight: 'clamp(45px,10vw,58px)',
    letterSpacing: '0em',
  },

  h4: {
    fontWeight: 700,
    fontSize: 'clamp(25px,4.8vw,32px)',
    lineHeight: 'clamp(40px,7.9vw,52px)',
    letterSpacing: '0.00735em',
  },

  h5: {
    fontWeight: 700,
    fontSize: 'clamp(22px,4.3vw,29px)',
    lineHeight: 'clamp(35px,7vw,47px)',
    letterSpacing: '0em',
  },

  h6: {
    fontWeight: 700,
    fontSize: 'clamp(20px,3.8vw,26px)',
    lineHeight: 'clamp(32px,6.2vw,42px)',
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: 'clamp(12px,2.35vw,16px)',
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: 'clamp(11px,2.2vw,14px)',
    lineHeight: 'clamp(20px,3.85vw,24px)',
    letterSpacing: '0.00714em',
  },
  body1: {
    fontWeight: 400,
    fontSize: 'clamp(12px,2.35vw,16px)',
    lineHeight: 'clamp(31px,5.7vw,37px)',
    letterSpacing: '0.01071em',
  },

  body2: {
    fontWeight: 400,
    fontSize: 'clamp(11px,2.2vw,14px)',
    lineHeight: 'clamp(20px,3.85vw,24px)',
    letterSpacing: '0.01071em',
  },

  button: {
    fontWeight: 500,
    fontSize: 'clamp(11px,2.2vw,14px)',
    lineHeight: 'clamp(20px,3.85vw,24px)',
    letterSpacing: '0.02857em',
  },
  caption: {
    fontWeight: 400,
    fontSize: 'clamp(10px,1.85vw,12px)',
    lineHeight: 'clamp(18px,3.31vw,21px)',
    letterSpacing: '0.03333em',
  },
  overline: {
    letterSpacing: '0.08333em',
    fontWeight: 400,
    fontSize: 'clamp(10px,1.85vw,12px)',
    lineHeight: 'clamp(18px,3.31vw,21px)',
  },
};
