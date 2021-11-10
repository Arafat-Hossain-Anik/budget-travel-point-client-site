import React from 'react';
import './Banner.css';
import 'animate.css';


const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="slider">
          <img id="slideImg" src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
        <div className="overlay">
          <div className="content">
            <p className='animate__backInDown' style={{ color: "white" }}>ENJOY YOUR VACATION WITH </p>
            <h1>BUDGET <br /> TRAVEL POINT</h1>
            <h3 style={{ lineHeight: '1.6' }}> Enjoy your travel with us within lowest cost  and stay happy</h3>
            <div>
              <button className='header-btn' type='button'><a className='youtube' style={{ color: 'white', }} href="https://www.youtube.com/watch?v=LrkvTVt-wHk">WATCH MORE</a> </button>
              <button className='btn2 header-btn' type='button'><a className='youtube' style={{ color: 'white', }} href="https://www.youtube.com/channel/UCqlthGjbLIci7i3x2gk8P4Q"> SUBSCRIBE</a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;