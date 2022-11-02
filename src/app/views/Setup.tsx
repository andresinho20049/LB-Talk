import { useState } from "react"
import { List, ToggleButton } from "react-native-paper"
import { SegmentedLanguage } from "../components/SegmentedLanguage";
import { SegmentedSubtitle } from "../components/SegmentedSubtitle";
import { useTheme } from "../context/ThemeContext";


export const Setup = () => {
    const [lingagemState, setLinguagem] = useState(false);
    const [displayState, setDisplay] = useState(false);

    const { isDarkTheme, toggleThemeType } = useTheme();

    return (
        <List.Section title="Config">
            <List.Accordion
                title={"Idioma"}
                expanded={lingagemState}
                onPress={() => setLinguagem(!lingagemState)}
            >
                <List.Item
                    title="Fala"
                    description="Informa o idioma pronunciado"
                    right={() => <SegmentedLanguage />}
                />
                <List.Item
                    title="Legenda"
                    description="Informa o idioma exibido na legenda"
                    right={() => <SegmentedSubtitle />}
                />
            </List.Accordion>
            <List.Accordion
                title="Display"
                expanded={displayState}
                onPress={() => setDisplay(!displayState)}
            >
                <List.Item
                    title={"Tema"}
                    description="Alterar Tema (Dark/Light)"
                    right={props => <ToggleButton icon={"brightness-6"} status={isDarkTheme ? 'checked' : 'unchecked'} onPress={toggleThemeType} />}
                />

            </List.Accordion>
        </List.Section>
    )
}