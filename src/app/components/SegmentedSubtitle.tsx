import { SegmentedButtons } from "react-native-paper";
import { languageValues, useLanguage } from "../context/LanguageContext";


export const SegmentedSubtitle = () => {

    const { subtitle, toggleSubtitle } = useLanguage();

    return (
        <SegmentedButtons
         value={subtitle}
         onValueChange={toggleSubtitle}
         buttons={[
           {
             value: 'pt-BR',
             label: 'Português',
           },
           {
             value: 'en-US',
             label: 'Inglês',
           },
         ]}
       />
      );
}