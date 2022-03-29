import Image from "next/image";
import { Carousel } from "react-bootstrap";
import Layout from "../components/Layout";

const images = [
  "/camp1.jpg",
  "/camp2.jpg",
  "/camp3.jpg",
  "/camp4.jpg",
  "/camp5.jpg",
  "/camp6.jpg",
  "/camp7.jpg",
  "/camp8.jpg",
  "/camp9.jpg",
  "/olive1.jpg",
  "/olive2.jpg",
  "/camp10.jpg",
  "/camp11.jpg",
  "/camp12.jpg",
  "/harvest1.jpg",
  "/harvest2.jpg",
  "/harvest3.jpg",
  "/harvest4.jpg",
  "/harvest5.jpg",
  "/final2.jpg",
  "/final1.jpg",
  "/Rapolla1.jpg",
];

export default function Gallery() {
  return (
    <Layout>
      <div style={{ position: "relative" }}>
        <Carousel variant="light" interval={4000}>
          {images.map((image) => (
            <Carousel.Item
              key={image}
              style={{ position: "relative", width: "100%", height: "750px" }}
            >
              <Image
                className="d-block w-100"
                src={image}
                alt="First slide"
                layout="fill"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <br />
      <div className="row">
        <h2 className="arvo text-center">Video</h2>
        <div className="col-12 d-flex align-items-center justify-content-center">
          <iframe
            className="container-fluid d-block"
            width="600"
            height="400"
            src="https://www.youtube.com/embed/hLCVfd2JfjM"
            controls
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
