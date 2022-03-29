import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import useLocalization from "../locales";

// Contentful Entry ID
const PAGE_ID = "6n40P0yYxByEyt15RHBc7Q";

export default function About({ contentful }) {
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
        <div
          className="row img-fluid"
          id="about-image"
          alt="Responsive image"
          style={{
            width: "100%",
            height: "50vh",
            margin: "0 auto",
            background: `url(${entry.fields.aboutPicture.fields.file.url}) no-repeat center`,
            backgroundSize: "cover",
          }}
        >
          {/* <Picture
            url={entry.fields.aboutPicture.fields.file.url}
            width={700}
            height={500}
          /> */}
        </div>

        <div className="row" id="text-about">
          <h2 id="about-title">{pages.about.title}</h2>
          <p
            id="about-information"
            dangerouslySetInnerHTML={{ __html: pages.about.about_text_html }}
          ></p>
        </div>
      </div>
    </Layout>
  );
}
