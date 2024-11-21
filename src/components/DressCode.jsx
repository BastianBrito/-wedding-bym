import React from "react";
import { PiDressLight } from "react-icons/pi";

function DressCode() {
  return (
    <section className="dress-code-section">
      <h2>
        <PiDressLight />
      </h2>
      <h2>Código de Vestimenta</h2>
      <p className="special-message">
        Por favor, vístete con elegancia: trajes para hombres y vestidos de gala
        para mujeres. El blanco es para la novia ;)
      </p>
    </section>
  );
}

export default DressCode;
