
import { createContext } from 'react'

export type ThemeMode = 'dark' | 'light'

export interface ThemeContextData {
  themeMode: ThemeMode
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextData | undefined>(
  undefined,
)
