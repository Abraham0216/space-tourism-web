import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from "../assets/destination/background-destination-mobile.jpg";
import backgroundImageTablet from "./../assets/destination/background-destination-tablet.jpg";
import backgroundImageDesktop from "./../assets/destination/background-destination-desktop.jpg";
import { windowContext } from "../App";
import moonImg from "../assets/destination/image-moon.png";
import marsImg from "../assets/destination/image-mars.png";
import europaImg from "../assets/destination/image-europa.png";
import titanImg from "../assets/destination/image-titan.png";

const moonDesc = <span className='text-base font-normal leading-6 p-barlow pt-1.5 text-center text-[#D0D6F9]'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help
  regain perspective and come back refreshed. While you’re there, take in some history
  by visiting the Luna 2 and Apollo 11 landing sites.</span>

const marsDesc = <span className='text-base font-normal leading-6 p-barlow pt-1.5 text-center text-[#D0D6F9]'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
  the tallest planetary mountain in our solar system. It’s two and a half times
  the size of Everest!</span>

const europaDesc = <span className='text-base font-normal leading-6 p-barlow pt-1.5 text-center text-[#D0D6F9]'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a
  winter lover’s dream. With an icy surface, it’s perfect for a bit of
  ice skating, curling, hockey, or simple relaxation in your snug
  wintery cabin.</span>

const titanDesc = <span className='text-base font-normal leading-6 p-barlow pt-1.5 text-center text-[#D0D6F9]'>The only moon known to have a dense atmosphere other than Earth, Titan
  is a home away from home (just a few hundred degrees colder!). As a
  bonus, you get striking views of the Rings of Saturn.</span>


const Destination = () => {



  const  windowWidth  = useContext(windowContext)


  const [planetState, setPlanetState] = useState([{ planetName: "MOON", planetDesc: moonDesc, planetImg: moonImg, avgDistance: "384,400 KM", travelTime: "3 DAYS" },
  { planetName: "MARS", planetDesc: marsDesc, planetImg: marsImg, avgDistance: "225 MIL.KM", travelTime: "9 MONTHS" },
  { planetName: "EUROPE", planetDesc: europaDesc, planetImg: europaImg, avgDistance: "628 MIL.KM", travelTime: "3 YEARS" },
  { planetName: "TITAN", planetDesc: titanDesc, planetImg: titanImg, avgDistance: "1.6 BIL.KM", travelTime: "7 YEARS" }]);

  const [planetIndex, setplanetIndex] = useState(0);


  const planet = planetState[planetIndex];

  const { planetName, planetDesc, planetImg, avgDistance, travelTime } = planet;


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
      <div className='flex justify-center pt-20 tracking-[.15em] md:justify-start md:ml-6 md:pt-[136px] md:text-xl lg:text-[28px] lg:leading-8 lg:ml-[165px] lg:pt-[212px]'><span className='p-barlow-condesed mr-5 text-gray-500 lg:text-[28px] md:text-xl text-base'>01</span><h1 className='p-barlow-condesed m-0 lg:text-[28px] md:text-xl text-base'>PICK YOUR DESTINATION</h1></div>
      <div className='w-full flex flex-col justify-center items-center '>
        <div className='lg:flex lg:flex-row'>

          <motion.div animate={{ y: [-15, 0, -15] }}
            transition={{ duration: 3, repeat: Infinity }}>
            <img className='w-44 md:w-[300px] mx-auto  lg:w-[325px] xl:w-[450px] xl:h-[450px] h-44 md:h-[300px] lg:h-[325px] mt-8 md:mt-[60px] lg:mt-14 xl:mt-[97px]' src={planetImg} alt='planet' />
          </motion.div>

          <div className='lg:ml-[157px] lg:mt-[5px] lg:text-right l'>
            <ul className='flex flex-row pt-7 md:mt-14 xl:mt-14 lg:mt-0 lg:pt-0 justify-center mx-auto lg:mx-0 h-12 w-3/4 md:w-72'>
              <li className='rounded  pb-4  p-barlow-condesed mx-auto '><button onClick={() => setplanetIndex(0)} className={`tracking-[.25em]  ${planetIndex === 0 ? 'border-b-4 text-white border-white' : 'text-blue-200'}  text-base  hover:border-b-4  leading-5 w-full hover:border-gray-400 pb-2 rounded`}> MOON </button></li>
              <li className='rounded  pb-4  p-barlow-condesed mx-auto '><button onClick={() => setplanetIndex(1)} className={`tracking-[.25em]  ${planetIndex === 1 ? 'border-b-4 text-white border-white' : 'text-blue-200'}  text-base  hover:border-b-4  leading-5 w-full hover:border-gray-400 pb-2 rounded`}> MARS </button></li>
              <li className='rounded  pb-4  p-barlow-condesed mx-auto '><button onClick={() => setplanetIndex(2)} className={`tracking-[.25em]  ${planetIndex === 2 ? 'border-b-4 text-white border-white' : 'text-blue-200'}  text-base  hover:border-b-4  leading-5 w-full hover:border-gray-400 pb-2 rounded`}> EUROPA </button></li>
              <li className='rounded  pb-4  p-barlow-condesed mx-auto '><button onClick={() => setplanetIndex(3)} className={`tracking-[.25em]  ${planetIndex === 3 ? 'border-b-4 text-white border-white' : 'text-blue-200'}  text-base  hover:border-b-4  leading-5 w-full hover:border-gray-400 pb-2 rounded`}> TITAN </button></li>
            </ul>

            <div className='flex flex-col justify-center lg:justify-start items-center lg:items-start px-2'>
              <div className='lg:text-left flex flex-col justify-center items-center lg:items-start'>
                <h2 className='text-6xl  md:text-[80px] lg:text-[100px] leading-[91px] pt-10 lg:pt-0 xl:pt-14'>{planetName}</h2>
                <p className='md:w-[573px] text-center  lg:w-[444px] md:h-[84]  lg:pt-6 lg:text-[18px] lg:leading-8 lg:text-left '>
                  {planetDesc}
                </p>
              </div>

              <hr className='bg-gray-800  mt-9 md:mt-12 lg:mt-0 xl:mt-[54px] mb-7 lg:mb-7 xl:mb-7  w-11/12 h-0' />
              <div className='md:flex md:flex-row md:justify-evenly lg:justify-between md:w-[573px] lg:w-[350px]'>
                <div className='md:flex md:flex-col md:justify-center md:items-center lg:items-start '>
                  <p className='text-base leading-4 text-blue-200 p-barlow-condesed mb-3 tracking-[.15em]'>AVG. DISTANCE</p>
                  <h4 className='text-3xl leading-8 mb-8'>{avgDistance}</h4>
                </div>
                <div className='md:flex md:flex-col md:justify-center md:items-center lg:items-start'>
                  <p className='text-base leading-4 text-blue-200 p-barlow-condesed mb-3 tracking-[.15em]'>EST. TRAVEL TIME</p>
                  <h4 className='text-3xl leading-8 mb-8'>{travelTime}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Destination;
