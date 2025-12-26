import { useState } from "react";
import "./ImageCarousel.scss";

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prev}>‹</button>

      <img src={images[index]} alt={`Slide ${index + 1}`} />

      <button className="arrow right" onClick={next}>›</button>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
