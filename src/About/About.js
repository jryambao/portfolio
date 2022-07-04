import React from 'react'
import './about.css';
import passion1 from '../images/passion1.jpg';
import passion2 from '../images/passion2.jpg';
import passion3 from '../images/passion3.jpg';
import passion4 from '../images/passion4.jpg';
import passion5 from '../images/passion5.jpg';
import about from '../images/about.jpg';
import about1 from '../images/about1.jpg';
import about2 from '../images/about2.JPG';
const About = () => {
  return (
    <section className="about">
      <div className="main">
        <img src={about2}/>
        <div className="about-text">
          <h2>About Me</h2>
          <h5>  I love learning new things and I am fascinated by everything on how they are created. I joined KodeGo to meet experienced developers and motivate myself to try even harder and develop myself as a person.</h5>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sunt dolores minus culpa exercitationem voluptates corrupti quo, reprehenderit nihil debitis eaque qui hic sapiente obcaecati, explicabo quia aliquid perferendis! Vitae.</h5>
          <button><span>Click to know more</span></button>
        </div>
      </div>
    </section>

  )
}

export default About


   
   