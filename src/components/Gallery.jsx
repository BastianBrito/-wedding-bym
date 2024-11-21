import React from "react";
import { PiCameraLight } from "react-icons/pi";
import Slider from "react-slick"; // Asegúrate de tener Slick Carousel configurado
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const images = [
    // Array de imágenes (puedes reemplazarlas por las que prefieras)
    "https://via.placeholder.com/800x400?text=Imagen+1",
    "https://via.placeholder.com/800x400?text=Imagen+2",
    "https://via.placeholder.com/800x400?text=Imagen+3",
    "https://via.placeholder.com/800x400?text=Imagen+4",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <section className="gallery-section">
      <h2>
        <PiCameraLight  />
      </h2>
      <h2>Galería de Imágenes</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;
