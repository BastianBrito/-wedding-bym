import React, { useState, useEffect } from "react"; 
import { PiCalendarDotsLight } from "react-icons/pi";


function Countdown() {
  const [timeLeft, setTimeLeft] = useState("");
  const eventDate = new Date("2024-12-25T15:30:00"); // Fecha del evento

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        setTimeLeft("¡Es hoy!");
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        setTimeLeft(`${days} días, ${hours} horas, ${minutes} minutos`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Extraer día, mes y año del evento manualmente
  const day = eventDate.getDate().toString().padStart(2, "0"); // Día (DD)
  const month = eventDate.toLocaleDateString("es-ES", { month: "long" }); // Mes (nombre completo)
  const year = eventDate.getFullYear(); // Año (YYYY)
  const hours = eventDate.getHours().toString().padStart(2, "0"); // Hora (HH)
  const minutes = eventDate.getMinutes().toString().padStart(2, "0"); // Minutos (mm)

  return (
    <section className="countdown-section">
      <h2>
        <PiCalendarDotsLight  />
      </h2>
      <h2>
        Día del evento
      </h2>
      <div className="event-day-container">
        <p className="event-day">{day}</p> {/* Día centrado y grande */}
      </div>
      <p className="event-month-year">
        de {month.charAt(0).toUpperCase() + month.slice(1)} de {year}
      </p>
      <p className="event-time">a las {hours}:{minutes}</p> {/* Hora en línea separada */}
      <p className="time-left">{timeLeft}</p> {/* Cuenta regresiva más pequeña */}
      
      {/* Texto adicional al final */}
      <p className="special-message">
        Este día es muy especial para nosotros y nos encantaría que nos acompañaras. 
        Tu presencia es muy especial y queremos pasarlo bien contigo.
      </p>
    </section>
  );
}

export default Countdown;
