import React, { useState, useEffect} from 'react';
import "./FlatInfo.scss";

export function FlatInfo(props) {
  const { home, tags } = props;

  if (!home) {
    console.error("La prop 'home' est manquante dans FlatInfo.");
    return <div>Informations non disponibles</div>;
  } 

  const [activeStars, setActiveStars] = useState(home.rating || 0);
  const initialRating = home.rating || 0;
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

  const host = home.host || {};
  const name = host.name || '';
  const [firstName = '', lastName = ''] = name.split(' ');

  return (
    <div className="flat-info">
      <div className="flat-details">
        <h1 className="flat-h1">{props.home.title}</h1>
        <h2 className="flat-h2">{props.home.location}</h2>
        <div className="flat-labels">
        {props.tags && props.tags.length > 0 ? (
            props.tags.map((tag, index) => <span key={index}>{tag}</span>)
          ) : (
            <span>Aucun tag disponible</span>
          )}
        </div>
      </div>
      <div className="host-info">
        <div className="host-details">
          <h3>
            <span>{firstName ||'Hôte' }</span> 
            <span>{lastName}</span>
          </h3>
          <div className="host-sticker">
          <img src={home.host.picture} alt="Image de l'hôte"/>
          </div>
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
