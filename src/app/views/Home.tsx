import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

export const Home = () => {
    const { theme, themeType, isDarkTheme } = useTheme();
    const colors = theme.colors;
    console.log(theme.colors, themeType, isDarkTheme)
        
    return (
        <View style={style.container}>
            <View style={style.content1}>
                <Text style={{color: colors.accent}}>
                    Home
                </Text>
            </View>
            <View style={style.content2}>
                <Text style={{color: colors.text}}>
                    Content 2
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
    }, content1: {
        flexGrow: 3,
        alignItems: 'center',
        justifyContent:'center',
    }, content2: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})