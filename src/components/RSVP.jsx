import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Importamos los íconos

function RSVP() {
  const [response, setResponse] = useState("");

  const handleResponse = (status) => {
    setResponse(status);
  };

  return (
    <section className="rsvp-section">
      <h2>¿Asistirás a nuestra boda?</h2>
      <p className="special-message">
        Nos encantaría saber si podrás acompañarnos en este día tan especial.
        ¡Tu presencia es muy importante para nosotros! No es obligatorio
        asistir, pero si no puedes, te agradeceríamos que nos lo informaras para
        poder invitar a más personas.
      </p>
      <div className="rsvp-buttons">
        <button onClick={() => handleResponse("Aceptado")}>
          <FaCheckCircle /> Sí, asistiré
        </button>
        <button onClick={() => handleResponse("Rechazado")}>
          <FaTimesCircle /> No, no puedo
        </button>
      </div>
      {response && <p className="rsvp-response">Tu respuesta: {response}</p>}
    </section>
  );
}

export default RSVP;
