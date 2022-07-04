import React from 'react'
import './App.css';
import profilepic from './images/profile.JPG';

export const App = () => {
  return (
    <div className="container">
    <div className='text-about'>
      <h1>I'm <span>Ralph Yambao</span></h1>
      <h1>a web developer.</h1>
    </div>
    <div>
      <img className='img' src={profilepic}/>
    </div>  
    </div>
  )
}
export default App