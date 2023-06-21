import React, { useContext } from 'react';
import { windowContext } from "../App";
import backgroundImage from "./../assets/home/background-home-mobile.jpg";
import backgroundImageTablet from "./../assets/home/background-home-tablet.jpg";
import backgroundImageDesktop from "./../assets/home/background-home-desktop.jpg";

const Home = () => {
  
  const  windowWidth  = useContext(windowContext)

  const backgroundStyle = {
    backgroundImage: `url(${windowWidth >= 1024
      ? backgroundImageDesktop
      : windowWidth >= 768
        ? backgroundImageTablet
        : backgroundImage
    })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh'
  };

  return (
    <div style={backgroundStyle}>
      <div>
        <div className='flex font-normal  lg:flex-row  flex-col justify-center items-center text-center lg:text-left pt-24  h-full'>
          <div className='lg:absolute lg:left-[165px] xl:top-[300px] lg:top-[130px]'>
            <p className='text-base md:text-xl lg:text-[28px] text-blue-200 md:mb-6 leading-5 lg:leading-8 tracking-widest md:pt-24 p-barlow-condesed'>SO, YOU WANT TO TRAVEL TO</p>
            <h1 className='text-7xl md:text-[150px] mb-7 mt-7 lg:leading-[171px] leading-[100px] lg:mt-3'>SPACE</h1>
            <p className='text-base lg:text-[18px] lg:leading-8 md:w-[444px] md:h-[112px] leading-6 px-4 pb-24 md:mb-40 lg:mb-0 font-light p-barlow text-blue-200 '>
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div>
            <button className='bg-white text-[#0B0D17] text-xl md:text-[32px] leading-6 md:leading-9 h-36 md:h-60 z-20 lg:h-[272px]  lg:w-[272px] lg:top-[300px] lg:absolute lg:left-[1001px] xl:top-[495px]  w-36 md:w-60  rounded-full  hover:shadow-[1px_1px_0_80px_rgba(255,255,255,0.2)] transition-all duration-500'>EXPLORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
