import { Colors } from '../constants/theme';
import { useColorScheme } from './use-color-scheme';

export function useThemeColor(props, colorName) {
  const { colorScheme } = useColorScheme();
  
  const theme = (colorScheme === 'light' || colorScheme === 'dark') ? colorScheme : 'light';
  
  if (!Colors[theme]) {
    console.warn(`Tema '${theme}' no encontrado en Colors, usando tema light`);
    return Colors.light[colorName] || '#000000';
  }

  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName] || Colors.light[colorName] || '#000000';
  }
}