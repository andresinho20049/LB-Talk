import { SegmentedButtons } from "react-native-paper";
import { useLanguage } from "../../context/LanguageContext";


export const SegmentedSubtitle = () => {

    const { subtitle, toggleSubtitle } = useLanguage();

    return (
        <SegmentedButtons
         value={subtitle}
         onValueChange={toggleSubtitle}
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