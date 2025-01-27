import React, {useState} from 'react'
import "./FlatPoster.scss";

export function FlatPoster(props) {
  const pictures = props.imgFlatPoster;
  const [activeIndex, setActiveIndex] = useState(0);

  const determineClassName = (index) => (index === activeIndex ? "active" : '' );

  const goNext = () => {
    setActiveIndex ((prevIndex) => (prevIndex + 1 ) % pictures.length);
  };

  const goPrevious = () => {
    setActiveIndex ((prevIndex) => (prevIndex -1 + pictures.length) % pictures.length);
  };


  return (
    <div className='flat_poster'>
      <div className='flat_wrapper'>
        {pictures.map((pic, index) => (
          <img 
          key={pic}
          src={pic} 
          alt='Image des logements' 
          className={determineClassName(index)} />
      ))}
      </div>

        {/*Counter */}
      <div className='carousel-counter'>
        {activeIndex +1} / {pictures.length}
      </div>
    
      <button className="chevron chevron-prev" onClick={goPrevious}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="chevron chevron-next" onClick={goNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
      </div>
  )
}

export default FlatPoster