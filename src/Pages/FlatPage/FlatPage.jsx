import React, { useState } from 'react';
import { InfoHabitat } from "../../components/InfoHabitat/InfoHabitat.jsx";
import { FlatPoster } from "../../components/FlatPoster/FlatPoster.jsx";
import { FlatInfo} from "../../components/FlatInfo/FlatInfo.jsx";

import "./FlatPage.scss";


function FlatPage() {
  return (
    <div className='flat-container'>
      <FlatPoster />
      <FlatInfo />
      <div className='apt-container'>
          <InfoHabitat />
          <InfoHabitat />
        </div>
      </div>
  );
}
export default FlatPage