import { Theme as NavigationTheme } from '@react-navigation/native';
import { ThemeBase as PaperTheme } from 'react-native-paper/lib/typescript/types';

export type Theme = NavigationTheme &
    PaperTheme & {
        // Abaixo pode ser adicionado atributos extras
        colors: {
            accent: string
        }
    };