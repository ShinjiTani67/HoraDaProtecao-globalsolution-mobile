import * as React from 'react';
import {
  Text as DefaultText,
  View as DefaultView,
  useColorScheme,
  TextProps as DefaultTextProps,
  ViewProps as DefaultViewProps,
} from 'react-native';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: 'text' | 'background'
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme ?? 'light'];

  if (colorFromProps) {
    return colorFromProps;
  }

  // Fallback colors (personalize se quiser)
  const fallbackColors = {
    light: {
      text: '#000',
      background: '#fff',
    },
    dark: {
      text: '#fff',
      background: '#000',
    },
  };

  return fallbackColors[theme ?? 'light'][colorName];
}

export type TextProps = ThemeProps & DefaultTextProps;
export type ViewProps = ThemeProps & DefaultViewProps;

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
