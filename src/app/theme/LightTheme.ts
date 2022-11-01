import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { MD3LightTheme as PaperDefaultTheme } from 'react-native-paper';
import { Theme } from '../interface/ThemeType';

export const lightTheme: Theme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        card: '#ddd',
        accent: '#ccc'
    },
};