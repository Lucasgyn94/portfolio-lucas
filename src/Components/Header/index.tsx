
import { useTheme } from '../../hooks/useTheme'
import {
  HeaderContainer,
  HeaderContent,
  Brand,
  LogoMark,
  BrandName,
  Navigation,
  NavigationLink,
  HeaderActions,
  ThemeButton,
  ContactButton,
} from './styles'

export function Header() {
  const { themeMode, toggleTheme } = useTheme()

  return (
    <HeaderContainer>
      <HeaderContent>
        <Brand href="#inicio" aria-label="Lucas F Silva — página inicial">
          <LogoMark>LF</LogoMark>
          <BrandName>Lucas F Silva</BrandName>
        </Brand>

        <Navigation aria-label="Navegação principal">
          <NavigationLink href="#sobre">Sobre</NavigationLink>
          <NavigationLink href="#projetos">Projetos</NavigationLink>
          <NavigationLink href="#experiencias">Experiência</NavigationLink>
          <NavigationLink href="#tecnologias">Stack</NavigationLink>
        </Navigation>

        <HeaderActions>
          <ThemeButton
            type="button"
            onClick={toggleTheme}
            aria-label={
              themeMode === 'dark'
                ? 'Ativar tema claro'
                : 'Ativar tema escuro'
            }
            aria-pressed={themeMode === 'light'}
          >
            {themeMode === 'dark' ? '☀' : '☾'}
          </ThemeButton>

          <ContactButton href="#contato">
            Vamos conversar
            <span aria-hidden="true">☏</span>
          </ContactButton>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  )
}
