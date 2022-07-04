import React from 'react'
import passion1 from '../images/passion1.jpg';
import passion2 from '../images/passion2.jpg';
import passion3 from '../images/passion3.jpg';
import passion4 from '../images/passion4.jpg';
import passion5 from '../images/passion5.jpg';
import './passion.css';

export const passion = () => {
  return (
    <div className='hobby container'>
      <h1>Passion</h1>
       <div className="gallery">
       <div className="image">
        <img src={passion1} />
        <div className="image-overlay">
            <div className="image-title">Biking</div>
            <p className="image-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla inventore ullam eligendi suscipit eum harum quaerat nemo similique culpa, hic in beatae illo doloremque ipsa consequuntur unde repellat magnam!
            </p>
        </div>
       </div>
        
        <div className="image">
         <img src={passion2} />
        <div className="image-overlay">
            <div className="image-title">Playing Video games</div>
            <p className="image-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla inventore ullam eligendi suscipit eum harum quaerat nemo similique culpa, hic in beatae illo doloremque ipsa consequuntur unde repellat magnam!
            </p>
        </div>
       </div>
        <div className="image">
        <img src={passion3} />
        <div className="image-overlay">
            <div className="image-title">Coding</div>
            <p className="image-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla inventore ullam eligendi suscipit eum harum quaerat nemo similique culpa, hic in beatae illo doloremque ipsa consequuntur unde repellat magnam!
            </p>
        </div>
       </div>
       <div className="image">
        <img src={passion4} />
        <div className="image-overlay">
            <div className="image-title">Travelling</div>
            <p className="image-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla inventore ullam eligendi suscipit eum harum quaerat nemo similique culpa, hic in beatae illo doloremque ipsa consequuntur unde repellat magnam!
            </p>
        </div>
       </div>
        <div className="image">
        <img src={passion5} />
        <div className="image-overlay">
            <div className="image-title">Reading</div>
            <p className="image-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla inventore ullam eligendi suscipit eum harum quaerat nemo similique culpa, hic in beatae illo doloremque ipsa consequuntur unde repellat magnam!
            </p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default passion