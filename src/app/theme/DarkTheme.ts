import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { MD3DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { Theme } from '../interface/ThemeType';

export const darkTheme: Theme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        accent: '#222'
    },
};