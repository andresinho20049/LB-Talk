import { createContext, ReactNode, useContext, useState } from "react";

export type languageValues = 'pt' | 'en';

export interface LanguageContextProps {
    transcript: string,
    language: languageValues | string,
    subtitle: languageValues | string,
    setTranscript: (value: string) => void,
    toggleLanguage: (value: string) => void,
    toggleSubtitle: (value: string) => void
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export const useLanguage = () => useContext(LanguageContext);

export interface LanguagemContextProviderProps {
    children: ReactNode;
}

export const LanguagemProvider = ({ children }: LanguagemContextProviderProps) => {

    const [transcript, setTranscript] = useState('');
    const [languageState, setLanguage] = useState<languageValues | string>('pt');
    const [subtitleState, setSubtitle] = useState<languageValues | string>('pt');

    return (
        <LanguageContext.Provider value={{
            transcript,
            language: languageState,
            subtitle: subtitleState,
            setTranscript,
            toggleLanguage: setLanguage,
            toggleSubtitle: setSubtitle
        }}>
            {children}
        </LanguageContext.Provider>
    )
}