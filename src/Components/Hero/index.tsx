import {
    Availability,
    AvailabilityDot,
    CodeEditor,
    CodeIcon,
    CodeKeyword,
    CodeLine,
    CodeLines,
    CodeStatus,
    CodeString,
    CodeStringStack,
    DevelopmentWorkspace,
    HeroActions,
    HeroContent,
    HeroDescription,
    HeroLabel,
    HeroSection,
    HeroTitle,
    LineNumbers,
    PrimaryButton,
    SecondaryButton,
    WindowBar,
    WindowControls,
    WindowTitle,
} from './styles';

const codeLines = [
    <>
        <CodeKeyword>const</CodeKeyword> developer = {'{'}
    </>,
    <>
        {' '}
        name: <CodeString>'Lucas F Silva'</CodeString>,
    </>,
    <>
        {' '}
        base: <CodeString>'Goiânia — GO'</CodeString>,
    </>,
    <> focus: [</>,
    <>
        {' '}
        <CodeString>'web'</CodeString>, <CodeString>'backend'</CodeString>,{' '}
        <CodeString>'automação'</CodeString>
    </>,
    <> ],</>,
    <>
        {' '}
        stack: <CodeStringStack>'JavaScript + Node.js'</CodeStringStack>,
    </>,
    <>
        {' '}
        status: <CodeString>'disponível'</CodeString>
    </>,
    <>{'}'}</>,
];

export function Hero() {
    return (
        <HeroSection id="inicio">
            <HeroContent>
                <HeroLabel>DESENVOLVEDOR DE SOFTWARE · GOIÂNIA — GO</HeroLabel>

                <HeroTitle>
                    Código que transforma processos em produtos úteis.
                </HeroTitle>

                <HeroDescription>
                    Desenvolvimento web, backend e automação com foco em
                    resolver problemas de forma clara, prática e sustentável.
                </HeroDescription>

                <HeroActions>
                    <PrimaryButton href="#projetos">
                        Explorar projetos
                        <span aria-hidden="true">↘</span>
                    </PrimaryButton>

                    <SecondaryButton href="#contato">
                        Entrar em contato
                        <span aria-hidden="true">✉</span>
                    </SecondaryButton>
                </HeroActions>

                <Availability>
                    <AvailabilityDot />
                        Aberto a oportunidades e novos projetos
                </Availability>
            </HeroContent>
            
            <DevelopmentWorkspace aria-label="Exemplo de código de apresentação">
                
                <WindowBar>
                    <WindowControls aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </WindowControls>

                    <WindowTitle>lucas.profile.ts</WindowTitle>

                    <CodeIcon aria-hidden="true">{'</>'}</CodeIcon>
                </WindowBar>

                <CodeEditor>
                    
                    <LineNumbers aria-hidden="true">
                        {codeLines.map((_, index) => (
                            <span key={index}>{index + 1}</span>
                        ))}
                    </LineNumbers>

                    <CodeLines>
                        {codeLines.map((line, index) => (
                            <CodeLine key={index}>{line}</CodeLine>
                        ))}

                        <CodeStatus>
                            <AvailabilityDot />
                            <span>ready to build</span>
                        </CodeStatus>
                    </CodeLines>
                
                </CodeEditor>

            </DevelopmentWorkspace>
        </HeroSection>
    );
}
