import { Head, Html, Main, NextScript } from "next/document";

// Wraps every page with this Document
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/olive-oil-marker.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Arvo:bold&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
