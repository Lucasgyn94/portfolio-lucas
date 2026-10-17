import styled from "styled-components";



export const HeroSection = styled.section`
    position: relative;
    width: min(calc(100% - 6rem), 1200px);
    min-height: 716px;
    margin: 0 auto;
    padding: 5rem 0;

    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    align-items: center;
    gap: 3rem;

    background-color: ${({ theme }) => theme.colors.background};

    &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.accent};
    }

    @media (max-width: 900px) {
        width: calc(100% - 3rem);
        min-height: auto;
        grid-template-columns: minmax(0, 1fr);
        gap: 2.5rem;
        padding: 4rem 0 3rem;
    }

    @media (max-width: 480px) {
        width: calc(100% - 2rem);
        gap: 2rem;
        padding: 3rem 0;
    }
`;



export const HeroContent = styled.div`
    min-width: 0;

`;

export const HeroLabel = styled.p`
    margin: 0 0 1.5rem;
    color: ${({theme}) => theme.colors.accent};
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.025em;
    line-height: 1.6;
`;



export const HeroTitle = styled.h1`
    max-width: 560px;
    margin: 0;

    color: ${({ theme }) => theme.colors.text};
    font-size: clamp(3rem, 5.5vw, 4.75rem);
    font-weight: 400;
    line-height: 0.974;
    letter-spacing: -0.15rem;
    text-wrap: balance;

    @media (max-width: 480px) {
        font-size: clamp(2.5rem, 11vw, 3rem);
        letter-spacing: -0.12rem;
    }
`;


export const HeroDescription = styled.p`
    max-width: 560px;
    margin: 1.5rem 0 1.25rem;

    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1.1875rem;
    line-height: 1.526;
`;


export const HeroActions = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.875rem;

    @media (max-width: 480px) {
        gap: 0.625rem;
    }
`;

const ActionButton = styled.a`
    min-height: 40px;
    padding: 0.7rem 0.9rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    border: 1px solid transparent;
    border-radius: 999px;

    font-size: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;

    transition:
        background 160ms ease,
        color 160ms ease,
        border-color 160ms ease
    ;
    

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.accent};
        outline-offset: 4px;
    }

    span {
        font-size: 1rem;
    }
    
`;



export const PrimaryButton = styled(ActionButton)`
    background: ${({theme}) => theme.colors.accent};
    color: ${({theme}) => theme.colors.background};

    &:hover {
        filter: brightness(0.94);
    }
`;

export const SecondaryButton = styled(ActionButton)`
    border-color: ${({theme}) => theme.colors.surface};
    background: transparent;
    color: ${({theme}) => theme.colors.text};

    &:hover {
        border-color: ${({theme}) => theme.colors.accent};
    }
`;

export const Availability = styled.p`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin: 1.25rem 0 0;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.6875rem;
    line-height: 1.6;
`;

export const AvailabilityDot = styled.span`
    width: 6px;
    height: 6px;
    flex: 0 0 6px;

    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.accent};

`;

export const DevelopmentWorkspace = styled.div`
    width: 100%;
    min-width: 0;
    max-width: 480px;
    min-height: 430px;
    overflow: hidden;

    border: 1px solid ${({ theme }) => theme.colors.surface};
    border-radius: 24px;
    background-color: #171a20;
    box-shadow: 0 18px 48px rgb(0 0 0 / 25%);

    justify-self: end;

    @media (max-width: 900px) {
        justify-self: center;
    }

    @media (max-width: 480px) {
        min-height: 0;
        border-radius: 16px;
    }
`;

export const WindowBar = styled.div`
    min-height: 54px;
    padding: 0 1rem;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 0.75rem;

    background-color: #20232b;
    border-bottom: 1px solid rgb(255 255 255 / 4%);
`;

export const WindowControls = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    
    span {
        width: 6px;
        height: 6px;
        border-radius: 50%;

        &:nth-child(1) {
            background-color: #ff6b63;
        }

        &:nth-child(2) {
            background-color: #ffc247;
        }

        &:nth-child(3) {
            background-color: #c7ff4a;
        }
    }
`;

export const WindowTitle = styled.span`
    color: #c5c9d1;
    font-size: 0.625rem;
`;

export const CodeIcon = styled.span`
    justify-self: end;
    color: #a5abb7;
    font-size: 0.75rem;
`;

export const CodeEditor = styled.div`
    display: grid;
    grid-template-columns: 30px minmax(0, 1fr);
    padding: 1.5rem 1.25rem 2rem;
`;

export const LineNumbers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.95rem;

    color: #59616e;
    font-family: monospace;
    font-size: 0.625rem;
    line-height: 1.45;
`;

export const CodeLines = styled.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    color: #d1d5de;
    font-family: monospace;
    font-size: 0.75rem;
    line-height: 1.45;
`;

export const CodeLine = styled.div`
    min-height: 0.9em;
    overflow-wrap: anywhere;
    white-space: pre-wrap;
`;

export const CodeKeyword = styled.span`
    color: #c792ea;
`;

export const CodeString = styled.span`
    color: #c7ff4a;
`;

export const CodeStringStack = styled.span`
    color: #79A7FF;

`;

export const CodeStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-top: 0.65rem;
    color: #c5c9d1;
    font-family: sans-serif;
    font-size: 0.625rem;
`;

