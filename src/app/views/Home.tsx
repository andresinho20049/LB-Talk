import { StyleSheet, Text, View } from "react-native";
import { Divider, Surface } from "react-native-paper";
import { VLibrasReactNative } from "../components/VLibrasReactNative";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export const Home = () => {
    const { theme } = useTheme();
    const colors = theme.colors;

    const { language, subtitle, transcript } = useLanguage();

    return (
        <View style={style.container}>
            <View style={style.content}>
                {/* Mater comentado, pois apresenta instabilidade */}
                {/* <VLibrasReactNative />  */}
            </View>
            <Surface style={[style.surface, { backgroundColor: colors.card }]} elevation={4}>
                <View style={style.contentSurface}>
                    <Text style={style.legenda}>
                        {transcript}
                    </Text>
                </View>
                <Divider style={{ borderColor: colors.accent }} />
                <View style={style.footerSurface}>
                    <Text style={{ color: colors.text }}>
                        Fala: {language}
                    </Text>
                    <Text style={{ color: colors.text }}>
                        Legenda: {subtitle}
                    </Text>
                </View>
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
    }, content: {
        flexGrow: 3,
        alignItems: 'center',
        justifyContent: 'center',
    }, surface: {
        flexGrow: 1,
        width: '95%',
        marginBottom: 7,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }, footerSurface: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
        width: '60%',
        borderTopWidth: 2
    }, contentSurface: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 4,
        padding: 15
    }, legenda: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})