import { createContext, ReactNode, useCallback, useContext, useState } from "react"

export type languageValues = 'pt-BR' | 'en-US';

export interface LanguageContextProps {
    language: languageValues | string,
    subtitle: languageValues | string,
    toggleLanguage: (value: string) => void,
    toggleSubtitle: (value: string) => void
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export const useLanguage = () => useContext(LanguageContext);

export interface LanguagemContextProviderProps {
    children: ReactNode;
}

export const LanguagemProvider = ({ children }: LanguagemContextProviderProps) => {

    const [languageState, setLanguage] = useState<languageValues | string>('pt-BR');
    const [subtitleState, setSubtitle] = useState<languageValues | string>('pt-BR');

    return (
        <LanguageContext.Provider value={{
            language: languageState,
            subtitle: subtitleState,
            toggleLanguage: setLanguage,
            toggleSubtitle: setSubtitle
        }}>
            {children}
        </LanguageContext.Provider>
    )
}