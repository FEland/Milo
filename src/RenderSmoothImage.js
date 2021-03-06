  /*From https://codebrahma.com/how-to-smoothly-render-images-in-react-app/ */

import React from "react";

export default ({ src, alt = "Not Found", objectFit = "contain" }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [isValidSrc, setIsValidSrc] = React.useState(!!src);

  return (
    <div className="smooth-image-wrapper">
      {isValidSrc ? (
        <img
          className={`smooth-image img-${imageLoaded ? "visible" : "hidden"}`}
          style={{ objectFit }}
          src={src}
          alt={alt}
          onLoad={() => setImageLoaded(true)}
          onError={() => setIsValidSrc(false)}
        />
      ) : (
        <div className="smooth-no-image">{alt}</div>
      )}
      {isValidSrc && !imageLoaded && (
        <div className="smooth-preloader">
          <span className="loader" />
        </div>
      )}
    </div>
  );
};