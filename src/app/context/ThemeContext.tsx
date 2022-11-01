import { NavigationContainer } from '@react-navigation/native';
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Theme } from '../interface/ThemeType';
import { darkTheme } from '../theme/DarkTheme';
import { lightTheme } from '../theme/LightTheme';

export type ThemeType = 'light' | 'dark';

export interface ThemeContextValue {
    theme: Theme;
    themeType: ThemeType;
    isDarkTheme: boolean;
    toggleThemeType: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
    theme: lightTheme,
    themeType: 'light',
    isDarkTheme: false,
    toggleThemeType: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const colorScheme = useColorScheme();
    const [themeType, setThemeType] = useState<ThemeType>(colorScheme || 'light');

    const toggleThemeType = useCallback(() => {
        setThemeType(prev => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const isDarkTheme = useMemo(() => themeType === 'dark', [themeType]);
    const theme = useMemo(
        () => (isDarkTheme ? darkTheme : lightTheme),
        [isDarkTheme],
    );

    return (
        <NavigationContainer theme={theme}>
            <PaperProvider theme={theme}>
                <ThemeContext.Provider
                    value={{
                        theme,
                        themeType,
                        isDarkTheme,
                        toggleThemeType,
                    }}>
                    {children}
                </ThemeContext.Provider>
            </PaperProvider>
        </NavigationContainer>
    );
};