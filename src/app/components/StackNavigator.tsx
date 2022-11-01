import { Home } from "../views/Home";
import { Button } from "react-native-paper";
import { useTheme } from "../context/ThemeContext";
import { ActionsProps, FabGroup } from "./FabGroup";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";


const actions: ActionsProps[] = [
    {
        icon: 'record-circle-outline',
        label: undefined,
        onPress: () => console.log('Pressed add')
    },
    {
        icon: 'record-rec',
        label: 'Star',
        onPress: () => console.log('Pressed star'),
    },
    {
        icon: 'record-player',
        label: 'Email',
        onPress: () => console.log('Pressed email'),
    },
    {
        icon: 'record-circle',
        label: 'Remind',
        onPress: () => console.log('Pressed notifications'),
    },
]

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
        <>
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
                <Stack.Screen name="Setup" component={Home} />
            </Stack.Navigator>
            <FabGroup iconOpen="plus" iconClose="star" actions={actions} />
        </>
    )
}