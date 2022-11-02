import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import { useTheme } from "../context/ThemeContext";
import { Home } from "../views/Home";
import Page from "../views/PageExample";
import { Setup } from "../views/Setup";

const Stack = createStackNavigator();

export const StackNavigator = () => {

    const { theme, isDarkTheme } = useTheme();
    const colors = theme.colors;

    const screenOpt: StackNavigationOptions = {
        headerStyle: {
            backgroundColor: colors.card
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOpt}>
            <Stack.Screen name="Home" component={Home}
                options={({ navigation }) => {
                    return {
                        title: "Lb Talks",
                        headerRight: () => (
                            <Button
                                dark={isDarkTheme}
                                mode="text"
                                icon="arrow-down-bold-box-outline"
                                onPress={() => navigation.navigate("Setup")}>
                            </Button>
                        )
                    }
                }}
            />
            <Stack.Screen name="Setup" component={Setup} />
            <Stack.Screen name="Record" component={Page} />
        </Stack.Navigator>
    )
}