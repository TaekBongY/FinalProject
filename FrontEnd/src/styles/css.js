export const color = {
  primary: ({ theme }) => theme.colors.primary,
  secondary: ({ theme }) => theme.colors.secondary,
  info: ({ theme }) => theme.colors.info,
  success: ({ theme }) => theme.colors.success,
  warning: ({ theme }) => theme.colors.warning,
  danger: ({ theme }) => theme.colors.danger,
  white: ({ theme }) => theme.colors.white,
  black: ({ theme }) => theme.colors.black,
  gray100: ({ theme }) => theme.colors.gray[100],
  gray200: ({ theme }) => theme.colors.gray[200],
  gray300: ({ theme }) => theme.colors.gray[300],
  gray400: ({ theme }) => theme.colors.gray[400],
  gray500: ({ theme }) => theme.colors.gray[500],
  gray600: ({ theme }) => theme.colors.gray[600],
  gray700: ({ theme }) => theme.colors.gray[700],
  gray800: ({ theme }) => theme.colors.gray[800],
  gray900: ({ theme }) => theme.colors.gray[900],
};

export const fontSize = {
  xs: ({ theme }) => theme.fontSizes.xs,
  sm: ({ theme }) => theme.fontSizes.sm,
  base: ({ theme }) => theme.fontSizes.base,
  lg: ({ theme }) => theme.fontSizes.lg,
  xl: ({ theme }) => theme.fontSizes.xl,
  '2xl': ({ theme }) => theme.fontSizes['2xl'],
  '3xl': ({ theme }) => theme.fontSizes['3xl'],
  '4xl': ({ theme }) => theme.fontSizes['4xl'],
  '5xl': ({ theme }) => theme.fontSizes['5xl'],
};

export const fontWeight = {
  thin: ({ theme }) => theme.fontWeights.thin,
  light: ({ theme }) => theme.fontWeights.light,
  regular: ({ theme }) => theme.fontWeights.regular,
  medium: ({ theme }) => theme.fontWeights.medium,
  semibold: ({ theme }) => theme.fontWeights.semibold,
  bold: ({ theme }) => theme.fontWeights.bold,
  extrabold: ({ theme }) => theme.fontWeights.extrabold,
  black: ({ theme }) => theme.fontWeights.black,
};

export const spacing = {
  s1: ({ theme }) => theme.spacing[1],
  s2: ({ theme }) => theme.spacing[2],
  s4: ({ theme }) => theme.spacing[4],
  s8: ({ theme }) => theme.spacing[8],
  s16: ({ theme }) => theme.spacing[16],
  s24: ({ theme }) => theme.spacing[24],
  s32: ({ theme }) => theme.spacing[32],
};

export const borderRadius = {
  base: ({ theme }) => theme.borderRadius.base,
  md: ({ theme }) => theme.borderRadius.md,
  lg: ({ theme }) => theme.borderRadius.lg,
  xl: ({ theme }) => theme.borderRadius.xl,
  full: ({ theme }) => theme.borderRadius.full,
};

export const shadow = {
  base: ({ theme }) => theme.shadows.base,
  md: ({ theme }) => theme.shadows.md,
  lg: ({ theme }) => theme.shadows.lg,
  xl: ({ theme }) => theme.shadows.xl,
  '2xl': ({ theme }) => theme.shadows['2xl'],
  inner: ({ theme }) => theme.shadows.inner,
  none: ({ theme }) => theme.shadows.none,
};

export const zIndex = {
  hide: ({ theme }) => theme.zIndices.hide,
  auto: ({ theme }) => theme.zIndices.auto,
  base: ({ theme }) => theme.zIndices.base,
  docked: ({ theme }) => theme.zIndices.docked,
  dropdown: ({ theme }) => theme.zIndices.dropdown,
  sticky: ({ theme }) => theme.zIndices.sticky,
  banner: ({ theme }) => theme.zIndices.banner,
  overlay: ({ theme }) => theme.zIndices.overlay,
  modal: ({ theme }) => theme.zIndices.modal,
  popover: ({ theme }) => theme.zIndices.popover,
  skipLink: ({ theme }) => theme.zIndices.skipLink,
  toast: ({ theme }) => theme.zIndices.toast,
  tooltip: ({ theme }) => theme.zIndices.tooltip,
};

export default {
  color,
  fontSize,
  fontWeight,
  borderRadius,
  zIndex,
  spacing,
  shadow,
};
