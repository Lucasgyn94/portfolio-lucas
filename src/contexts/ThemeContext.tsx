import { useState, type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext, type ThemeMode } from './ThemeContext';
import { GlobalStyle } from '../styles/global';
import { darkTheme, lightTheme } from '../styles/theme';

interface ThemeContextProviderProps {
    children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

    const toggleTheme = () => {
        setThemeMode((currentTheme) =>
            currentTheme === 'dark' ? 'light' : 'dark',
        );
    };

    const theme = themeMode === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
