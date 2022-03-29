import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const DEFAULT_PAGE_TITLE = "Azienda Agricola Dora Radino";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{DEFAULT_PAGE_TITLE}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
