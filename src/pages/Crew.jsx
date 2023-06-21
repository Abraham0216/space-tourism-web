import React, { useContext, useState } from 'react';
import { windowContext } from "../App";
import backgroundImage from "../assets/crew/background-crew-mobile.jpg";
import backgroundImageTablet from "./../assets/crew/background-crew-tablet.jpg";
import backgroundImageDesktop from "./../assets/crew/background-crew-desktop.jpg";
import commanderImg from "../assets/crew/image-douglas-hurley.png";
import specialistImg from "../assets/crew/image-mark-shuttleworth.png";
import pilotImg from "../assets/crew/image-victor-glover.png";
import enginnerImg from "../assets/crew/image-anousheh-ansari.png";

const commanderDesc = <span className='text-base font-normal leading-6 p-barlow pt-1.5 text-center lg:text-left text-[#D0D6F9]'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
  and former NASA astronaut. He launched into space for the third time as
  commander of Crew Dragon Demo-2.</span>

const specialistDesc = <span className='text-base font-normal leading-6 p-barlow pt-1.5 text-center lg:text-left text-[#D0D6F9]'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
  the Linux-based Ubuntu operating system. Shuttleworth became the first South
  African to travel to space as a space tourist.</span>

const pilotDesc = <span className='text-base font-normal leading-6 p-barlow pt-1.5 text-center lg:text-left text-[#D0D6F9]'>Pilot on the first operational flight of the SpaceX Crew Dragon to the
  International Space Station. Glover is a commander in the U.S. Navy where
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
  station systems flight engineer. </span>

const enginnerDesc = <span className='text-base font-normal leading-6 p-barlow pt-1.5 text-center lg:text-left text-[#D0D6F9]'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
  Ansari was the fourth self-funded space tourist, the first self-funded woman to
  fly to the ISS, and the first Iranian in space.</span>


const Crew = () => {

 

  const  windowWidth  = useContext(windowContext)


  const [crewState, setCrewState] = useState([{ crewName: "DOUGLAS HURLEY", job: "COMMANDER", crewDesc: commanderDesc, crewImg: commanderImg },
  { crewName: "MARK SHUTTLEWORTH", job: "MISSION SPECISLIST", crewDesc: specialistDesc, crewImg: specialistImg },
  { crewName: "VICTOR GLOVER", job: "PILOT", crewDesc: pilotDesc, crewImg: pilotImg },
  { crewName: "ANOUDHEH ANSARI", job: "FLIGHT ENGINEER", crewDesc: enginnerDesc, crewImg: enginnerImg }]);

  const [crewIndex, setCrewIndex] = useState(0);


  const crewMember = crewState[crewIndex];

  const { crewName: planetName, job, crewDesc: planetDesc, crewImg: planetImg } = crewMember;

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
      <div className='flex justify-center pt-20 tracking-[.15em] md:justify-start md:ml-6 md:pt-[136px] md:text-xl lg:text-[28px] lg:leading-8 lg:ml-[165px] lg:pt-[212px]'><span className='p-barlow-condesed mr-5 text-gray-500 lg:text-[28px] md:text-xl text-base'>02</span><h1 className='p-barlow-condesed lg:text-[28px] md:text-xl text-base m-0'>MEET YOUR CREW</h1></div>
      <div className='w-full flex flex-col lg:flex-row-reverse md:flex-col-reverse justify-center items-center md:mt-[60px] lg:mt-0'>

        <div className='lg:absolute lg:left-[830px] lg:top-[187px] lg:bottom-[500px]'>
          <img className='h-56 md:min-h-[532px] md:mt-0  w-full mt-8 lg:min-h-[470px]  xl:min-h-[712px]  lg:mt-0' src={planetImg} alt='planet' />
        </div>

        <hr className=' bg-gray-800 text-gray-800 mb-8 w-80 h-0 md:hidden' />
        <div className='md:flex md:flex-col-reverse lg:absolute xl:top-[330px] lg:top-[240px] lg:left-[165px]  lg:w-[615px]'>
          <ul className='flex flex-row justify-center mx-auto lg:mx-0  h-12 w-32 lg:mt-[80px] xl:mt-[130px]'>
            <li className='rounded  pb-4  p-barlow-condesed mx-auto '><button onClick={() => setCrewIndex(0)} className={`tracking-[.25em] w-3 h-3 md:w-[15px] md:h-[15px]  ${crewIndex === 0 ? 'bg-white border-white' : 'bg-blue-200'}   rounded-full`}></button></li>
            <li className='rounded  pb-4  p-barlow-condesed mx-auto '><button onClick={() => setCrewIndex(1)} className={`tracking-[.25em] w-3 h-3 md:w-[15px] md:h-[15px]  ${crewIndex === 1 ? 'bg-white border-white' : 'bg-blue-200'}   rounded-full`}></button></li>
            <li className='rounded  pb-4  p-barlow-condesed mx-auto '><button onClick={() => setCrewIndex(2)} className={`tracking-[.25em] w-3 h-3 md:w-[15px] md:h-[15px]  ${crewIndex === 2 ? 'bg-white border-white' : 'bg-blue-200'}   rounded-full`}></button></li>
            <li className='rounded  pb-4  p-barlow-condesed mx-auto '><button onClick={() => setCrewIndex(3)} className={`tracking-[.25em] w-3 h-3 md:w-[15px] md:h-[15px]  ${crewIndex === 3 ? 'bg-white border-white' : 'bg-blue-200'}   rounded-full`}></button></li>
          </ul>

          <div className='lg:w-full flex flex-col justify-center lg:justify-start lg:items-start items-center md:justify-start    mb-8  md:mb-0 lg:mt-[48px] md:min-w-full md:h-[232px]'>
            <p className='text-base md:text-2xl lg:text-[32px] lg:mb-7 leading-5 md:leading-7 opacity-50'>{job}</p>
            <h2 className='text-2xl md:text-[40px] lg:text-[56px] lg:leading-7 md:leading-[45px] lg:mb-9 pt-2'>{planetName}</h2>
            <p className='px-6  pt-4 md:px-0 md:max-w-[520px] md:h-[84px] leading-7 lg:leading-8 lg:text-left text-center  lg:w-[444px] lg:text-[18px]'>
              {planetDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
