import { Spinner } from "react-bootstrap";
import Layout from "./Layout";

export default function Loading() {
  return (
    <Layout>
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          height: "100vh",
          minHeight: "100%",
          textAlign: "center",
        }}
      >
        <Spinner
          animation="border"
          role="status"
          style={{ width: "75px", height: "75px", marginTop: "40vh" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </Layout>
  );
}
