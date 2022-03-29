import "bootstrap/dist/css/bootstrap.min.css";
import { createClient } from "contentful";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/globals.css";
import "../styles/react-spinner.css";

const CUSTOMER_SPACE_ID = "pt7lnecnc1k7";
/** Delivery Token (CDA) from Contentful -- used to consume (and not change) content */
const CUSTOMER_DELIVERY_TOKEN = "za2zvlTnog6MuxQlgyAA-BioAOknisKQe7xRgJFKDfo";

// Creates a React App and a contentful client (so it doesn't re-render on every page request)
function MyApp({ Component, pageProps }) {
  const contentful = createClient({
    space: CUSTOMER_SPACE_ID,
    accessToken: CUSTOMER_DELIVERY_TOKEN,
  });

  const componentProps = { ...pageProps, contentful };

  return <Component {...componentProps} />;
}

export default MyApp;
