import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import Layout from "../components/Layout";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFuaWVsc3BlcmxpbmciLCJhIjoiY2s2a2w0eDV6MDR5cjNscDc5bmkxaDB6YSJ9.rj_INuWDtQIt1BumHHUgAg";

const createMapboxMap = () => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/danielsperling/ckcf4r1dn17kd1inyikg0gzth",
    center: [15.672, 40.975],
    zoom: 7,
  });

  const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
    .setLngLat([15.672, 40.975])
    .addTo(map);

  map.scrollZoom.disable();
  map.dragPan.disable();
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [15.672, 40.975],
        },
        properties: {
          title: "Mapbox",
          description: "Dora Radino",
        },
      },
    ],
  };

  // add markers to map
  geojson.features.forEach(function (marker) {
    // create a HTML element for each feature
    const el = document.createElement("div");
    el.className = "marker";

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
  });
};

export default function Contact() {
  useEffect(() => {
    createMapboxMap();
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div id="map"></div>
        </div>
        <div className="row">
          <div className="contact">
            <h3 className="arvo">
              Azienda Agricola Dora Radino di Telesca Giuseppe
            </h3>
            <br />
            <h5> Partita IVA IT 01673830764 </h5>
            <p>Via Guglielmo Marconi, 37 85027 Rapolla, Basilicata, Italy</p>
            <p>
              <b>Email:</b> dora.radino@alice.it
            </p>
            <p>
              <b>Tel:</b> +39 335 661 2802
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
}
