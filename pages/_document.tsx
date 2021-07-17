import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const reload = `
    (function (l) {
      if (l.search[1] === "/") {
        var decoded = l.search
          .slice(1)
          .split("&")
          .map(function (s) {
            return s.replace(/~and~/g, "&");
          })
          .join("?");

        window.history.replaceState(null, null, decoded + l.hash);
      }
    })(window.location);
    `;
    return (
      <Html>
        <Head>
          <script type="text/javascript">{reload}</script>
          <link rel="stylesheet" href="/fonts/fonts.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
