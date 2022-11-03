import WebView from "react-native-webview";

export const VLibrasReactNative = () => {

  const widget = `<!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <title>LB Talks</title>
  </head>
  <body>
      <div vw class="enabled">
          <div vw-access-button class="active"></div>
          <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
          </div>
        </div>
        <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
        <script>
          new window.VLibras.Widget('https://vlibras.gov.br/app');
        </script>
  </body>
  </html>`;

  return (
    <WebView 
      source={{html: widget}}
    />
  )

}