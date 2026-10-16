
import type { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#0A0B0D',
    surface: '#17191D',
    text: '#F1F3ED',
    textMuted: '#A0A39C',
    accent: '#C7FF4A',
  },
  fonts: {
    body: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
}

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#F1F3ED',
    surface: '#FFFFFF',
    text: '#0A0B0D',
    textMuted: '#55594F',
    accent: '#557D00',
  },
  fonts: {
    body: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
}
