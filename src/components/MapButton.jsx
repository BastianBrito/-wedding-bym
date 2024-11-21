import React from "react";
import { PiMapPinLight } from "react-icons/pi";

function MapButton() {
  return (
    <section className="map-button-section">
      <h2>
        <PiMapPinLight  />
      </h2>
      <h2>Ubicación</h2>
      <p className="special-message">
        Aquí encontrarás el lugar de la ceremonia
      </p>
      <a
        href="https://www.google.com/maps?q=-33.4489,-70.6693"
        target="_blank"
        rel="noopener noreferrer"
        className="map-button"
      >
        Ver en Google Maps
      </a>
    </section>
  );
}

export default MapButton;
