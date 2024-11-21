import React from "react";
import { PiGiftLight } from "react-icons/pi";

function BankDetails() {
  return (
    <section className="bank-details-section">
      <h2>
        <PiGiftLight  />
      </h2>
      <h2>Regalos</h2>
      <p className="special-message">
        No contamos con una lista de regalos, pero te agradecemos con mucho
        cariño una transferencia... siempre es un buen regalo :)
      </p>
      <p>Banco: Mi Banco</p>
      <p>Cuenta: 12345678</p>
      <p>Titular: Juan Pérez</p>
      <p>RUT: 12.345.678-9</p>
    </section>
  );
}

export default BankDetails;
