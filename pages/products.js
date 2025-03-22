import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import useLocalization from "../locales";

// Contentful EntryID
const PAGE_ID = "59oeYVF5nPUIiHvHodbfS";

// We use the keys to toggle the modal content
const modalImages = {
  BioCertificate: (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <Image
          key={index}
          src={`/BioCert${index + 1}.jpg`} 
          className="analysis container-fluid"
          alt={`BioCert ${index + 1}`}
          width={720}
          height={900}
          layout="intrinsic"
        />
      ))}
    </>
  ),
  ChemicalAnalysis: (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <Image
          key={index}
          src={`/A${index + 1}.jpg`} // Assuming images are named analysis_1.jpg, analysis_2.jpg, etc.
          className="analysis container-fluid"
          alt={`Analysis ${index + 1}`}
          width={720}
          height={900}
          layout="intrinsic"
        />
      ))}
    </>
  ),
};

export default function Products({ contentful }) {
  const [ready, setReady] = useState(false);
  const [entry, setEntry] = useState({});

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

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
    <>
      <Modal
        show={modalVisible}
        onHide={() => setModalVisible(false) && setModalContent("")}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalContent}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalImages[modalContent]}</Modal.Body>
      </Modal>

      <Layout>
        <div className="container">
          <div>
            {entry.fields.pictures.map((product) => (
              <>
                <div
                  className="col text-center"
                  style={{
                    width: "100%",
                    margin: "0 auto",
                    minHeight: "450px",
                    background: `url(${product.fields.picture.fields.file.url}) no-repeat center`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="text-center">
                  <h5>{product.fields.title}</h5>
                </div>
                <div className="d-flex justify-content-center">
                  <h5>{product.fields.price}€</h5>&nbsp;—
                  <h5>{product.fields.priceMedium}€</h5>&nbsp;—
                  <h5>{product.fields.priceBig}€</h5>
                </div>
              </>
            ))}
          </div>

          <div className="row flex" id="text-product">
            <h2 id="product-title" className="arvo">
              {pages.products.products_title}
            </h2>
            <p
              id="product-description"
              dangerouslySetInnerHTML={{
                __html: pages.products.products_text_html,
              }}
            ></p>
            <div>
              <button
                id="button"
                className="btn btn-outline-dark"
                onClick={() => {
                  setModalContent("BioCertificate");
                  setModalVisible(true);
                }}
              >
                {pages.products.certi_bnt}
              </button>
              <button
                id="analysis_button"
                className="btn btn-outline-dark"
                onClick={() => {
                  setModalContent("ChemicalAnalysis"); // Now it will show 11 images
                  setModalVisible(true);
                }}
              >
                {pages.products.acidi_btn}
              </button>     
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
