import { View } from 'react-native';
import WebView from "react-native-webview";

export const WebViewTeste = () => {
    const html = `
      <html>
      <head></head>
      <body>
        <script>
          setTimeout(function () {
            alert("Hello World!")
          }, 2000)
        </script>
      </body>
      </html>
    `;

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ html: html }}
            />
        </View>
    );
}