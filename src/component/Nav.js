/* eslint-disable global-require */

import React from 'react';
import '../style/style.css';

function Nav() {
  return (

    <div>

      <nav className="navBar">
        <img src={require('../img/frog.png')} alt="froG" className="navFrog" />
        各式各樣寵物賣場
        <br />
        讓您擁有全世界的生物多樣性
        <br />

      </nav>

    </div>
  );
}

export default Nav;
