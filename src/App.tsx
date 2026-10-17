import { ThemeContextProvider } from './contexts/ThemeContext.tsx';
import { Header } from './Components/Header/index.tsx';
import { Hero } from './Components/Hero/index.tsx';


function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
            </main>
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
