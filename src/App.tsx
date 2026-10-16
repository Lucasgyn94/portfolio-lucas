
import styled from 'styled-components'
import { ThemeContextProvider } from './contexts/ThemeContext.tsx'
import { useTheme } from './hooks/useTheme'

const Main = styled.main`
  min-height: 100vh;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
`

const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
  font-size: clamp(2rem, 5vw, 4rem);
  letter-spacing: -0.04em;
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`

const ThemeButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.text};
    outline-offset: 4px;
  }
`

function Home() {
  const { themeMode, toggleTheme } = useTheme()

  return (
    <Main>
      <Title>Portfólio em construção</Title>

      <Description>
        Em breve, um pouco do meu trabalho e da minha trajetória.
      </Description>

      <ThemeButton
        type="button"
        onClick={toggleTheme}
        aria-pressed={themeMode === 'light'}
      >
        Ativar tema {themeMode === 'dark' ? 'claro' : 'escuro'}
      </ThemeButton>
    </Main>
  )
}

export function App() {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  )
}
