import { SegmentedButtons } from "react-native-paper";
import { useLanguage } from "../../context/LanguageContext";


export const SegmentedLanguage = () => {

    const { language, toggleLanguage } = useLanguage();

    return (
        <SegmentedButtons
         value={language}
         onValueChange={toggleLanguage}
         buttons={[
           {
             value: 'pt',
             label: 'Português',
           },
           {
             value: 'en',
             label: 'Inglês',
           },
         ]}
       />
      );
}