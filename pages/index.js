import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Picture from "../components/Picture";
import useLocalization from "../locales";

// ID of the Entry in Contentful
const PAGE_ID = "1tObOSALaX8lCVmhQZlDKk";

/**
 * @param {Object} props
 * @param {import("contentful").ContentfulClientApi} props.contentful
 * */
export default function Home({ contentful }) {
  const [ready, setReady] = useState(false);
  const [entry, setEntry] = useState({});

  const { locale } = useRouter();
  const { pages } = useLocalization(locale);

  useEffect(() => {
    (async () => {
      const entry = await contentful.getEntry(PAGE_ID, { locale: "en-US" });
      if (entry) {
        setEntry(entry);
        setReady(true);
      }
    })();
  }, [contentful, locale]);

  if (!ready) {
    return <Loading />;
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12" id="homelogo">
            <div
              id="home-image"
              style={{
                width: "100%",
                height: "560px",
                background: `url('/OlioRadinoLogo.jpeg') no-repeat center`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"

              }}
            ></div>
          </div>
        </div>

        <div className="row" id="home-text">
          <div className="col-md-6 col-xs-12">
            <h2 className="arvo">{pages.home.title_1}</h2>
            <div id="home-information" className="text-left">
              <h5>{pages.home.home_text_1}</h5>
            </div>
            <Link href="/about">
              <a className="btn btn-outline-dark">{pages.home.home_btn_1}</a>
            </Link>
          </div>

          <div className="col-md-6 col-xs-12">
            <div id="home-information-image" className="img-home">
              <Picture
                url={entry.fields.homeTextImage.fields.file.url}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className="row" id="home-products">
          <div className="col-md-6 col-xs-12">
            <div id="home-product-image" className="img-home">
              <Picture
                url={entry.fields.homeProductImage.fields.file.url}
                width={500}
                height={450}
              />
            </div>
          </div>

          <div className="col-md-6 col-xs-12">
            <h2 id="home-product-title" className="arvo">
              {pages.home.title_2}
            </h2>
            <div id="home-product-text" className="text-left">
              {pages.home.home_text_2}
            </div>
            <Link href="/products">
              <a className="btn btn-outline-dark">{pages.home.home_btn_1}</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
