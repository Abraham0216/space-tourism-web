import React, { useContext, useState } from 'react';
import { windowContext } from "../App";
import backgroundImage from "../assets/technology/background-technology-mobile.jpg";
import backgroundImageTablet from "./../assets/technology/background-technology-tablet.jpg";
import backgroundImageDesktop from "./../assets/technology/background-technology-desktop.jpg";
import vehicleImg from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportImg from "../assets/technology/image-spaceport-landscape.jpg";
import capsuleImg from "../assets/technology/image-space-capsule-landscape.jpg";
import vehicleImgLG from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportImgLG from "../assets/technology/image-spaceport-portrait.jpg";
import capsuleImgLG from "../assets/technology/image-space-capsule-portrait.jpg";

const vehicleDesc = <span className='text-base font-normal leading-6 p-barlow pt-1.5 text-center lg:text-left text-[#D0D6F9] lg:w-full'> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
  it's quite an awe-inspiring sight on the launch pad!</span>

const spaceportDesc = <span className='text-base font-normal leading-6 p-barlow pt-1.5 text-center lg:text-left text-[#D0D6F9] lg:w-full'>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,
  by analogy to the seaport for ships or airport for aircraft. Based in the
  famous Cape Canaveral, our spaceport is ideally situated to take advantage
  of the Earth’s rotation for launch.</span>

const capsuleDesc = <span className='text-base font-normal leading-6 p-barlow pt-1.5 text-center lg:text-left text-[#D0D6F9] lg:w-full'>  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where
  you'll spend your time during the flight. It includes a space gym, cinema,
  and plenty of other activities to keep you entertained.</span>



const Technology = () => {

  const  windowWidth  = useContext(windowContext)

  const [techState, setTechState] = useState([{ techName: "LAUNCH VEHICLE", techDesc: vehicleDesc, techImg: windowWidth >= 1024 ? vehicleImgLG : vehicleImg },
  { techName: "SPACEPORT", techDesc: spaceportDesc, techImg: windowWidth >= 1024 ? spaceportImgLG : spaceportImg },
  { techName: "SPACE CAPSULE", techDesc: capsuleDesc, techImg: windowWidth >= 1024 ? capsuleImgLG : capsuleImg }]);

  const [techIndex, setTechIndex] = useState(0);


  const crewMember = techState[techIndex];

  const { techName: planetName, techDesc: planetDesc, techImg: planetImg } = crewMember;


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

      <div className='flex justify-center pt-20 tracking-[.15em] md:justify-start md:ml-6 md:pt-[136px] md:text-xl lg:text-[28px] lg:leading-8 lg:ml-[165px] lg:pt-[150px] xl:pt-[212px]'><span className='p-barlow-condesed mr-5 text-gray-500 lg:text-[28px] md:text-xl text-base'>03</span><h1 className='p-barlow-condesed m-0 lg:text-[28px] md:text-xl text-base'>SPACE LAUNCH 101</h1></div>
      <div className='w-full flex flex-col lg:flex-row-reverse justify-center items-center md:mt-[60px] lg:mt-0 '>
        <div className='lg:relative xl:left-[155px] xl:top-[2px] lg:left-[172px] lg:top-[45px]'>
          <img className='w-full mt-8 mb-8 md:mt-0 md:mb-0  lg:h-[400px] xl:h-[525px]' src={planetImg} alt='planet' />
        </div>

        <div className='lg:flex lg:flex-row'>
          <ul className='flex flex-row justify-between mx-auto items-center lg:flex-col h-12 w-36 md:w-52 lg:w-40 lg:h-[295px] lg:items-start md:mt-14 md:mb-11 mb-7'>
            <li><button onClick={() => setTechIndex(0)} className={`w-10 md:w-[60px] lg:w-[80px]   h-10 md:h-[60px] lg:h-[80px]  text-base md:text-2xl border border-gray-700 leading-5 ${techIndex === 0 ? 'bg-white text-slate-950' : 'bg-slate-950'} rounded-full m-auto `}>1</button></li>
            <li><button onClick={() => setTechIndex(1)} className={`w-10 md:w-[60px] lg:w-[80px]  h-10 md:h-[60px]  lg:h-[80px] text-base md:text-2xl border border-gray-700 leading-5 ${techIndex === 1 ? 'bg-white text-slate-950' : 'bg-slate-950'} rounded-full m-auto `}>2</button></li>
            <li><button onClick={() => setTechIndex(2)} className={`w-10 md:w-[60px] lg:w-[80px]  h-10 md:h-[60px]  lg:h-[80px] text-base md:text-2xl border border-gray-700 leading-5 ${techIndex === 2 ? 'bg-white text-slate-950' : 'bg-slate-950'} rounded-full m-auto `}>3</button></li>
          </ul>

          <div className='flex flex-col lg:mt-14  lg:mb-11 justify-center lg:justify-start lg:items-start lg:relative lg:left-4  items-center  mb-5 md:w-[458px] md:h-[237px] lg:h-[300px] lg:w-[470px]'>
            <p className='text-sm lg:text-base leading-5 opacity-50'>THE TERMINOLOGY...</p>
            <h2 className='text-2xl md:text-[40px] lg:text-[56px] lg:leading-7 leading-7 md:leading-[45px] pt-2 lg:mt-6'>{planetName}</h2>
            <p className='min-w-80 h-44 lg:leading-8 text-center lg:text-left lg:w-[444px] lg:text-[18px] px-6 lg:px-0  pt-4 lg:mt-8'>
              {planetDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
