import { useState, useEffect } from 'react';
import { motion, useInView, useAnimation, Variant, AnimatePresence } from 'framer-motion';
import React, { useRef } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';


const Projetos =()=>{

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
<div className={`${
  (isHovered ) ? 'bg-[#757575]' : 
  (isHovered2) ? 'bg-[#7f8994]' : 
  (isHovered3) ? 'bg-[#94917f]' : 
  (isHovered4) ? 'bg-[#947f7f]' : 
  'bg-customLight'} min-h-screen transition-all duration-700 ease-in-out pb-7`}>

<nav className="w-full sm:p-4 pt-2 sm:pl-7 flex justify-between items-center">
        <Link to={"/"} className="text-lg pl-4 font-medium text-customDark">portfolio</Link>
        <div className='pr-2'>
          <motion.button 
            onClick={toggleMenu} 
            className="text-customDark text-2xl"
            whileHover={{ scale: 0.9 }}
          >
            <div className='hidden sm:block'>
              <svg width="80" height="69" viewBox="0 0 104 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="17" y="21" width="70" height="3.6" rx="1.8" fill="#222222"/>
                <rect x="17" y="33" width="70" height="3.6" rx="1.8" fill="#222222"/>
                <rect x="17" y="45" width="70" height="3.6" rx="1.8" fill="#222222"/>
              </svg>
            </div>
            <div className=' sm:hidden'>
              <svg width="50" height="69" viewBox="0 0 104 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="17" y="21" width="70" height="3.6" rx="1.8" fill="#222222"/>
                <rect x="17" y="33" width="70" height="3.6" rx="1.8" fill="#222222"/>
                <rect x="17" y="45" width="70" height="3.6" rx="1.8" fill="#222222"/>
              </svg>
            </div>
          </motion.button>
        </div>
      </nav>

      <motion.div
         className="fixed z-30 top-0 right-0 h-full w-[80vw] sm:w-[33vw] bg-customDark text-customLight"
         style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
         initial={{ x: '100%' }}
         animate={{ x: isMenuOpen ? 0 : '100%' }}
         transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
      >
        <div className="p-4">
          <motion.button
            onClick={toggleMenu}
            className="text-xl text-customLight absolute top-4 right-4"
            whileHover={{ scale: 0.9 }}
          >
            &#10005;
          </motion.button>

          <ul className="mt-40 space-y-10 pl-20 font-futura font-medium text-customLight">
  {["Inicio", "Projetos", "Contactos"].map((item) => {
    // Define the href based on the item
    let href;
    if (item === "Inicio") {
      href = "/";
    } else if (item === "Projetos") {
      href = "/projetos";
    } else if (item === "Sobre mim") {
      href = "/sobre";
    } else if (item === "Contactos") {
      href = "/contactos";
    }

    return (
      <motion.li
        className=""
        key={item}
        whileHover={{ x: 10, duration: 0.3 }}
      >
        <Link to={href} className="text-[3vh] ">
          {item}
        </Link>
      </motion.li>
    );
  })}
</ul>
        </div>
      </motion.div>


      <div className='display sm:pl-3 flex items-center justify-center'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[3vw] w-full max-w-[88vw] h-auto min-h-[75vh] sm:pr-6">
            
            {/*DIV1*/}
          
            <Link className={`border-customDark rounded-[5px] border-[3px] p-6 ${isHovered2 ? 'bg-[#222222]' : ''}  ${isHovered ||isHovered3 || isHovered4 ? 'opacity-15' : ''} transition-all duration-700 ease-in-out flex flex-col h-full justify-between`}
            to="/navidoc"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            >
            <div>
                <div className='mt-2 text-center w-full'>
                {isHovered2 ? (
                    <video src="./navidoc.mp4" autoPlay loop muted className="w-full h-auto"></video>
                ) : (
                    <img src='./tile2.png' alt="Tile image" className="w-full h-auto" />
                )}
                </div>

                <p className={`text-[30px] font-futura pt-8 font-demi ${isHovered2 ? 'text-[#757575]' : 'text-customDark'}`}>navidoc</p>
                <p className={`text-[19px] font-futura pt-4 font-regular ${isHovered2 ? 'text-[#757575]' : 'text-customDark'}`}>react</p>
                <p className={`text-[19px] font-futura font-regular ${isHovered2 ? 'text-[#757575]' : 'text-customDark'}`}>nodejs</p>
                <p className={`text-[19px] font-futura font-regular ${isHovered2 ? 'text-[#757575]' : 'text-customDark'}`}>puppeteer</p>
                {isHovered2 ? (
                    <div className=''>
                        <div className='text-customLight flex mx-auto'>
                        <p>Ver detalhes</p>
                        <svg className='mt-1 ml-3' width="45" height="20" viewBox="0 0 56 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="-0.00225005" y1="10.5833" x2="52.4144" y2="10.5001" stroke="#EDEDED" strokeWidth="2.83333" />
                                    <line x1="44.5017" y1="0.998265" x2="54.8196" y2="11.3161" stroke="#EDEDED" strokeWidth="2.83333" />
                                    <line y1="-1.41667" x2="14.8467" y2="-1.41667" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 43.5 19)" stroke="#EDEDED" strokeWidth="2.83333" />
                         </svg>
                         </div>

                    </div>
                ) : (
                    <p></p>
                )}

            </div>

            <div className={`text-right  ${isHovered2 ? 'pt-[6.5vh]' : 'pt-[9.5vh]'}`}>
                <p className={`text-[19px] font-futura pt-4 font-regular ${isHovered2 ? 'text-[#757575]' : 'text-customDark '}`}>Universidade de Coimbra</p>
                <p className={isHovered2 ? 'text-[#757575]' : ''}>2024</p>
            </div>

            <div className="flex items-center mt-auto">
                <hr className={`flex-1 rounded-[5px] border-[1px] ${isHovered2 ? 'border-[#757575]' : 'border-customDark'} mx-2`} />
                <span className={`text-lg ${isHovered2 ? 'text-[#757575]' : 'text-customDark'}`}>01</span>
                <hr className={`flex-1 rounded-[5px] border-[1px] ${isHovered2 ? 'border-[#757575]' : 'border-customDark'} mx-2`} />
            </div>
            </Link>
           

          {/*DIV2*/}

          <Link 
            to="/spacewalk"
            className={`border-customDark rounded-[5px] border-[3px] p-6 ${isHovered3 ? 'bg-[#222222]' : ''}  ${isHovered ||isHovered2 || isHovered4 ? 'opacity-15' : ''} transition-all duration-700 ease-in-out flex flex-col h-full justify-between`}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            
            >
            <div>
                <div className='mt-2 text-center w-full'>
                {isHovered3 ? (
                    <video src="./Demo_Desktop_SpaceWalk.mp4" autoPlay loop muted className="w-full h-auto"></video>
                ) : (
                    <img src='./tile3.png' alt="Tile image" className="w-full h-auto" />
                )}
                </div>

                <p className={`text-[30px] font-futura pt-8 font-demi ${isHovered3 ? 'text-[#757575]' : 'text-customDark'}`}>spacewalk</p>
                <p className={`text-[19px] font-futura pt-4 font-regular ${isHovered3 ? 'text-[#757575]' : 'text-customDark'}`}>react</p>
                <p className={`text-[19px] font-futura font-regular ${isHovered3 ? 'text-[#757575]' : 'text-customDark pb-[24px]'}`}>wordpress</p>
                {isHovered3 ? (
                    <div className=''>
                        <div className='text-customLight flex mx-auto'>
                        <p>Ver detalhes</p>
                        <svg className='mt-1 ml-3' width="45" height="20" viewBox="0 0 56 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="-0.00225005" y1="10.5833" x2="52.4144" y2="10.5001" stroke="#EDEDED" strokeWidth="2.83333" />
                                    <line x1="44.5017" y1="0.998265" x2="54.8196" y2="11.3161" stroke="#EDEDED" strokeWidth="2.83333" />
                                    <line y1="-1.41667" x2="14.8467" y2="-1.41667" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 43.5 19)" stroke="#EDEDED" strokeWidth="2.83333" />
                         </svg>
                         </div>

                    </div>
                ) : (
                    <p></p>
                )}
            </div>

            <div className="text-right pt-[10vh]">
                <p className={`text-[19px] font-futura pt-4 font-regular ${isHovered3 ? 'text-[#757575]' : 'text-customDark'}`}>Universidade de Coimbra</p>
                <p className={isHovered3 ? 'text-[#757575]' : ''}>2023</p>
            </div>

            <div className="flex items-center mt-auto">
                <hr className={`flex-1 rounded-[5px] border-[1px] ${isHovered3 ? 'border-[#757575]' : 'border-customDark'} mx-2`} />
                <span className={`text-lg ${isHovered3 ? 'text-[#757575]' : 'text-customDark'}`}>02</span>
                <hr className={`flex-1 rounded-[5px] border-[1px] ${isHovered3 ? 'border-[#757575]' : 'border-customDark'} mx-2`} />
            </div>
            </Link>


          {/*DIV3*/}

          <Link className={`border-customDark rounded-[5px] border-[3px] p-6 ${isHovered ? 'bg-[#222222]' : ''} ${isHovered2 ||isHovered3 || isHovered4 ? 'opacity-15' : ''} transition-all duration-700 ease-in-out flex flex-col h-full justify-between`}
            to="/tilestories"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <div>
                <div className='mt-2 text-center w-full'>
                {isHovered ? (
                    <video src="./tilevideo.mp4" autoPlay loop muted className="w-full h-auto"></video>
                ) : (
                    <img src='./tile1.png' alt="Tile image" className="w-full h-auto" />
                )}
                </div>

                <p className={`text-[30px] font-futura pt-8 font-demi ${isHovered ? 'text-[#757575]' : 'text-customDark'}`}>tilestories</p>
                <p className={`text-[19px] font-futura pt-4 font-regular ${isHovered ? 'text-[#757575]' : 'text-customDark'}`}>react native</p>
                <p className={`text-[19px] font-futura font-regular  ${isHovered ? 'text-[#757575]' : 'text-customDark pb-[24px]'}`}>firebase</p>
                {isHovered ? (
                    <div className=''>
                        <div className='text-customLight flex mx-auto'>
                        <p>Ver detalhes</p>
                        <svg className='mt-1 ml-3' width="45" height="20" viewBox="0 0 56 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="-0.00225005" y1="10.5833" x2="52.4144" y2="10.5001" stroke="#EDEDED" strokeWidth="2.83333" />
                                    <line x1="44.5017" y1="0.998265" x2="54.8196" y2="11.3161" stroke="#EDEDED" strokeWidth="2.83333" />
                                    <line y1="-1.41667" x2="14.8467" y2="-1.41667" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 43.5 19)" stroke="#EDEDED" strokeWidth="2.83333" />
                         </svg>
                         </div>

                    </div>
                ) : (
                    <p></p>
                )}
                
            </div>

            <div className="text-right pt-[10vh]">
                <p className={`text-[19px] font-futura pt-4 font-regular ${isHovered ? 'text-[#757575]' : 'text-customDark'}`}>Universidade de Aveiro</p>
                <p className={isHovered ? 'text-[#757575]' : ''}>2022</p>
            </div>

            <div className="flex items-center mt-auto">
                <hr className={`flex-1 rounded-[5px] border-[1px] ${isHovered ? 'border-[#757575]' : 'border-customDark'} mx-2`} />
                <span className={`text-lg ${isHovered ? 'text-[#757575]' : 'text-customDark'}`}>03</span>
                <hr className={`flex-1 rounded-[5px] border-[1px] ${isHovered ? 'border-[#757575]' : 'border-customDark'} mx-2`} />
            </div>
            </Link>
          


          {/*DIV4*/}
          <Link className={`border-customDark rounded-[5px] border-[3px] p-6 ${isHovered4 ? 'bg-[#222222]' : ''}  ${isHovered ||isHovered3 || isHovered2 ? 'opacity-15' : ''} transition-all duration-700 ease-in-out flex flex-col h-full justify-between`}
            to="/explainua"
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
            >
            <div>
                <div className='mt-2 text-center w-full'>
                {isHovered4 ? (
                    <video src="./explainua.mp4" autoPlay loop muted className="w-full h-auto"></video>
                ) : (
                    <img src='./tile4.png' alt="Tile image" className="w-full h-auto" />
                )}
                </div>

                <p className={`text-[30px] font-futura pt-8 font-demi ${isHovered4 ? 'text-[#757575]' : 'text-customDark'}`}>explain.ua</p>
                <p className={`text-[19px] font-futura pt-4 font-regular ${isHovered4 ? 'text-[#757575]' : 'text-customDark'}`}>PHP</p>
                <p className={`text-[19px] font-futura font-regular  ${isHovered4 ? 'text-[#757575]' : 'text-customDark pb-[24px]'}`}>MySQL</p>
                {isHovered4 ? (
                    <div className=''>
                        <div className='text-customLight flex mx-auto'>
                        <p>Ver detalhes</p>
                        <svg className='mt-1 ml-3' width="45" height="20" viewBox="0 0 56 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="-0.00225005" y1="10.5833" x2="52.4144" y2="10.5001" stroke="#EDEDED" strokeWidth="2.83333" />
                                    <line x1="44.5017" y1="0.998265" x2="54.8196" y2="11.3161" stroke="#EDEDED" strokeWidth="2.83333" />
                                    <line y1="-1.41667" x2="14.8467" y2="-1.41667" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 43.5 19)" stroke="#EDEDED" strokeWidth="2.83333" />
                         </svg>
                         </div>

                    </div>
                ) : (
                    <p></p>
                )}
            </div>

            <div className="text-right pt-[10vh]">
                <p className={`text-[19px] font-futura pt-4 font-regular ${isHovered4 ? 'text-[#757575]' : 'text-customDark'}`}>Universidade de Aveiro</p>
                <p className={isHovered4 ? 'text-[#757575]' : ''}>2021</p>
            </div>

            <div className="flex items-center mt-auto">
                <hr className={`flex-1 rounded-[5px] border-[1px] ${isHovered4 ? 'border-[#757575]' : 'border-customDark'} mx-2`} />
                <span className={`text-lg ${isHovered4 ? 'text-[#757575]' : 'text-customDark'}`}>04</span>
                <hr className={`flex-1 rounded-[5px] border-[1px] ${isHovered4 ? 'border-[#757575]' : 'border-customDark'} mx-2`} />
            </div>
            </Link>
        </div>
    </div>
</div>

  
  );
};

export default Projetos;
