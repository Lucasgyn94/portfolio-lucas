import styled from 'styled-components';
import { ThemeContextProvider } from './contexts/ThemeContext.tsx';
import { Header } from './Components/Header/index.tsx';

const Main = styled.main`
    min-height: calc(100vh - 80px);
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 1rem;
    padding: 2rem;
    text-align: center;
`;

const Title = styled.h1`
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: clamp(2rem, 5vw, 4rem);
    letter-spacing: -0.04em;
`;

const Description = styled.p`
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.7;
`;

function Home() {
    return (
        <>
            <Header />
            <Main>
                <Title>Portfólio em construção</Title>

                <Description>
                    Em breve, um pouco do meu trabalho e da minha trajetória.
                </Description>
            </Main>
        </>
    );
}

export function App() {
    return (
        <ThemeContextProvider>
            <Home />
        </ThemeContextProvider>
    );
}
