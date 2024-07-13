import React, { useState, useEffect } from "react";
import "./CustomSlider.css";
const CustomSlider = ({ images }) => {
  //   const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage < images.length - 1 ? prevImage + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage > 0 ? prevImage - 1 : images.length - 1
    );
  };

  const autoPlay = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const id = setInterval(nextImage, 1000);
      setIntervalId(id);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="slider">
      <img className="slider__image" src={images[currentImage]} alt="slider" />
      <div class="slider__controls">
        <button
          className="slider__button slider__button_prev"
          onClick={prevImage}
        >
          <i
            className="fa-solid fa-chevron-left fa-beat"
            style={{ animationDuration: "2s" }}
          ></i>
        </button>
        <button
          className="slider__button slider__button_play"
          onClick={autoPlay}
        >
          <i className={intervalId ? "fa fa-pause" : "fa fa-play"}></i>
        </button>
        <button class="slider__button slider__button_next" onClick={nextImage}>
          <i
            className="fa-solid fa-chevron-right fa-beat"
            style={{ animationDuration: "2s" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
