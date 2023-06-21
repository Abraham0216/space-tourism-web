import React, { useEffect, useState, createContext } from 'react'
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Technology';

export const windowContext = createContext(null)

function App() {


	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);




	const [showMenu, setShowMenu] = useState(false);
	const [page, setPage] = useState("home");

	const div = (<ul className={`fixed md:absolute md:flex md:flex-row md:justify-center md:items-center md:bg-[#151923] md:bg-opacity-4  lg:backdrop-blur-2xl lg:bg-transparent lg:pr-[123px]  lg:pl-[165px] md:pl-5 md:pr-10  md:left-[278px] lg:left-[534px] xl:left-[610px] lg:top-10 md:w-[490px] lg:w-[830px] lg:h-[96px] md:h-24 md:translate-x-0 backdrop-filter backdrop-blur-lg lg:bg-white lg:bg-opacity-5  z-10    ${showMenu ? " top-0 right-0 w-60 items-start pt-24 pl-7 min-h-screen flex flex-col gap-7 translate-x-0 ease-in-out duration-500 transition-transform " : "translate-x-full ease-in-out duration-500 transition-transform  opacity-0 md:opacity-100"}   `}>
		<li className='w-full md:h-full md:flex md:items-center  md:hover:border-r-0 hover:border-r-4 hover:border-white border-opacity-20 p-barlow-condesed'><button onClick={() => setPage("home")} className={`tracking-[.25em] flex flex-row md:items-center lg:justify-between md:mx-auto lg:mx-0  md:hover:border-b-4 md:h-full text-base leading-5 ${page === "home" ? 'md:border-b-4 text-white border-white' : 'text-blue-200 hover:border-gray-500'}`}><span className='mr-2 p-barlow-condesed md:hidden lg:block font-bold'>00</span> HOME </button></li>
		<li className='w-full md:h-full md:flex md:items-center  md:hover:border-r-0 hover:border-r-4 hover:border-white border-opacity-20 p-barlow-condesed'><button onClick={() => setPage("destination")} className={`tracking-[.25em] flex flex-row md:items-center lg:justify-between md:mx-auto lg:mr-9  md:hover:border-b-4 md:h-full text-base leading-5 ${page === "destination" ? 'md:border-b-4 text-white border-white' : 'text-blue-200 hover:border-gray-500'}`}><span className='mr-2 p-barlow-condesed md:hidden lg:block font-bold'>01</span> DESTINATION </button></li>
		<li className='w-full md:h-full md:flex md:items-center  md:hover:border-r-0 hover:border-r-4 hover:border-white border-opacity-20 p-barlow-condesed'><button onClick={() => setPage("crew")} className={`tracking-[.25em] flex flex-row md:items-center lg:justify-between md:mx-auto lg:mx-0  md:hover:border-b-4 md:h-full text-base leading-5 ${page === "crew" ? 'md:border-b-4 text-white border-white' : 'text-blue-200 hover:border-gray-500'}`}><span className='mr-2 p-barlow-condesed md:hidden lg:block font-bold'>02</span> CREW </button></li>
		<li className='w-full md:h-full md:flex md:items-center  md:hover:border-r-0 hover:border-r-4 hover:border-white border-opacity-20 p-barlow-condesed'><button onClick={() => setPage("tech")} className={`tracking-[.25em] flex flex-row md:items-center lg:justify-between md:mx-auto lg:mx-0  md:hover:border-b-4 md:h-full text-base leading-5 ${page === "tech" ? 'md:border-b-4 text-white border-white' : 'text-blue-200 hover:border-gray-500'}`}><span className='mr-2 p-barlow-condesed md:hidden lg:block font-bold'>03</span> TECHNOLOGY </button></li>
	</ul>
	)

	const componentMap = {
		home: <Home />,
		destination: <Destination />,
		crew: <Crew />,
		tech: <Technology />,

	};


	const renderComponent = (page) => {
		if (componentMap.hasOwnProperty(page)) {
			return componentMap[page];
		}

	};



	return (
		<windowContext.Provider value={windowWidth}>
			<div className="App min-h-screen">
				<svg className='absolute left-6 top-6 lg:left-14 lg:top-16' onClick={() => setPage("home")} xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
				<hr className='absolute bg-gray-800 top-[88px] left-[167px] z-30 w-[473px] h-0 hidden lg:block' />

				<div className='fixed z-20 right-6 top-8'>
					<button onClick={() => setShowMenu(!showMenu)}>

						{
							showMenu
								? <div className='fixed z-10 right-4 top-6 md:hidden '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg></div>
								: <div className='fixed z-10 right-4 top-6 md:hidden '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg></div>
						}
					</button>
				</div>

				{div}

				{renderComponent(page)}
			</div>
		</windowContext.Provider>

	);
}

export default App;
