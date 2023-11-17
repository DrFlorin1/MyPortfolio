// Intro.js
import React from 'react';
import './Intro.css'; // Importăm stilurile pentru componenta Intro
import introImage from '../Img/intro.png'
const Intro = () => {
  return (
    <div className="IntroS">
      <section className='Intro'>
        <div className="intro-content">
          <div className="text-content">
            <h1>Cinema</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Itaque natus animi
              aliquam fugit expedita eaque minus commodi
              nisi doloribus rerum quia atque eligendi eos
              totam debitis aperiam, beatae, fugiat cumque?
              Lorem ipsum dolor, sit amet consectetur 
              adipisicing elit. Tempora neque quas porro 
              animi, amet odio dolore quia, laboriosam distinctio
               nihil praesentium totam facere vitae odit, nam 
               quam doloribus ipsam sunt!
            </p>
          </div>
          <div className="image-content">
          <img src={introImage} alt="Cinema" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
