import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecordActions } from "./app/components/RecordActions";
import { StackNavigator } from "./app/components/StackNavigator";
import { LanguagemProvider } from "./app/context/LanguageContext";
import { ThemeContextProvider } from "./app/context/ThemeContext";

const app = () => {

  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <LanguagemProvider>
          <StackNavigator />
          <RecordActions />
        </LanguagemProvider>
      </ThemeContextProvider>
    </SafeAreaProvider>
  )
}

export default app;