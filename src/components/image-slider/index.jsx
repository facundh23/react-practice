import React, { useEffect, useState } from "react";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setSerror] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async (currentUrl) => {
    try {
      setIsLoading(true);
      const response = await fetch(currentUrl);
      const data = await response.json();

      if (data) {
        setImages(data);
        setIsLoading(false);
      }
    } catch (error) {
      setSerror(error.message);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  return <div className="container"></div>;
};

export default ImageSlider;
