import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.surface}; */
  border-bottom: 1px solid #303640;
`;

export const HeaderContent = styled.div`
  width: min(calc(100% - 4rem), 1200px);
  min-height: 64px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 900px) {
    width: calc(100% - 2rem);
    grid-template-columns: 1fr auto;
    gap: 1rem;
  }

  @media (max-width: 640px) {
    padding: 0.75rem 0;
  }
`;

/* Marca: símbolo + nome */
export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 0.625rem;

  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  white-space: nowrap;
`;

export const LogoMark = styled.span`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;

  border-radius: 7px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};

  font-size: 0.8rem;
  font-weight: 800;
`;

export const BrandName = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

/* Navegação central */
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavigationLink = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.75rem;
  text-decoration: none;
  white-space: nowrap;
  transition: color 160ms ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.text};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 4px;
  }
`;

/* Agrupamento das ações à direita */
export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  gap: 0.75rem;
`;

export const ThemeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 38px;
  height: 38px;
  padding: 0;

  border: 1px solid ${({ theme }) => theme.colors.surface};
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  font-size: 1rem;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  padding: 0.75rem 1rem;
  /* border: 1px solid ${({ theme }) => theme.colors.surface}; */
  border: 1px solid #303640;
  border-radius: 999px;

  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;

  transition: border-color 160ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 4px;
  }

  span {
    font-size: 1rem;
  }
`;
