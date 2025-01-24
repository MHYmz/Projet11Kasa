import React, { useState, useEffect} from 'react';
import "./FlatInfo.scss";

export function FlatInfo() {
  const [activeStars, setActiveStars] = useState(3);
  const [starSize, setStarSize] = useState(24);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setStarSize(18);
      } else {
        setStarSize(24);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Star = ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={starSize}
      height={starSize}
      viewBox="0 0 24 24"
      fill={filled ? "#ff6060" : "rgba(227, 227, 227, 1)"}
      stroke="none"
    >
      <path d="M12 .587l3.668 7.568L24 9.432l-6 5.858L19.335 24 12 19.771 4.665 24 6 15.29 0 9.432l8.332-1.277L12 .587z" />
    </svg>
  );

  return (
    <div className="flat-info">
      <div className="flat-details">
        <h1 className="flat-h1">Cozy loft on the Canal Saint-Martin</h1>
        <h2 className="flat-h2">Paris, Île-de-France</h2>
        <div className="flat-labels">
          <span>Cozy</span>
          <span>Canal</span>
          <span>Paris 10</span>
        </div>
      </div>
      <div className="host-info">
        <div className="host-details">
          <h3>
            <span>Alexandre</span> <span>Dumas</span>
          </h3>
          <div className="host-sticker"></div>
        </div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} onClick={() => setActiveStars(star)}>
              <Star filled={star <= activeStars} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlatInfo;
