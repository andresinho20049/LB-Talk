import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigator } from "./app/components/StackNavigator";
import { LanguagemProvider } from "./app/context/LanguageContext";
import { ThemeContextProvider } from "./app/context/ThemeContext";

const app = () => {

  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <LanguagemProvider>
          <StackNavigator />
        </LanguagemProvider>
      </ThemeContextProvider>
    </SafeAreaProvider>
  )
}

export default app;