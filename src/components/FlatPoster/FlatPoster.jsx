import React from 'react'
import "./FlatPoster.scss";

export function FlatPoster(props) {
  return (
    <div className='flat-img'>
        <img src={props.imgLink} alt="Apartment view" />
      </div>
  )
}

export default FlatPoster