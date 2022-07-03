import React from 'react'
import './about.css';
import passion1 from '../images/passion1.jpg';
import passion2 from '../images/passion2.jpg';
import passion3 from '../images/passion3.jpg';
import passion4 from '../images/passion4.jpg';
import passion5 from '../images/passion5.jpg';
const About = () => {
  return (
    <div className='container'>
    <div className="about">
      <h1>About Me</h1>
      <p className="parag">
       I love learning new things and I am fascinated by everything
       on how they are created. I joined KodeGo to meet experienced developers and motivate myself to try even harder and develop myself as a person.
      </p>
      <h1>Passion</h1>
      <div className="gallery">
        <img src={passion1} alt="" srcset="" />
        <img src={passion2} alt="" srcset="" />
        <img src={passion3} alt="" srcset="" />
        <img src={passion4} alt="" srcset="" />
        <img src={passion5} alt="" srcset="" />
      </div>
    </div>
    </div>
   
  )
}

export default About