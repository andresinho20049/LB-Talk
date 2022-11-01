import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigator } from "./app/components/StackNavigator";
import { ThemeContextProvider } from "./app/context/ThemeContext";

const app = () => {

  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </SafeAreaProvider>
  )
}

export default app;