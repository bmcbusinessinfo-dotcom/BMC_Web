import React, { useState, useEffect } from "react";

const ProgressiveImage = ({ placeholderSrc, src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className="relative overflow-hidden bg-white/5 rounded-2xl">
      <img
        {...props}
        src={imgSrc}
        alt={alt}
        className={`transition-all duration-1000 ease-in-out ${
          isLoaded ? "blur-0 scale-100" : "blur-xl scale-110"
        } ${props.className}`}
        style={{ filter: isLoaded ? "none" : "blur(20px)" }}
      />

      {/* Overlay sutil mientras carga */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default ProgressiveImage;
