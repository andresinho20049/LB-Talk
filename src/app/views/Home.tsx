import { StyleSheet, Text, View } from "react-native";
import { Surface } from "react-native-paper";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export const Home = () => {
    const { theme } = useTheme();
    const colors = theme.colors;

    const { language, subtitle } = useLanguage();
    
    return (
        <View style={style.container}>
            <View style={style.content1}>
                <Text style={{color: colors.text}}>
                    Home
                </Text>
            </View>
            <Surface style={[style.content2, {backgroundColor: colors.card}]} elevation={4}>
                <Text style={{color: colors.text}}>
                    Fala: {language}
                </Text>
                <Text style={{color: colors.text}}>
                    Legenda: {subtitle}
                </Text>
            </Surface>
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
        width: '95%',
        marginBottom: 7,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent:'center'
    }
})