import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CELL_SIZE = 40; // Fixed size for each cell in pixels

const Tilestories = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [cells, setCells] = useState([]);
  const [gridDimensions, setGridDimensions] = useState({ rows: 0, cols: 0 });

  const handleToggle = () => setShowMore((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Calculate grid dimensions based on window size
  const calculateGrid = () => {
    const cols = Math.ceil(window.innerWidth / CELL_SIZE);
    const rows = Math.ceil(window.innerHeight / CELL_SIZE);
    setGridDimensions({ rows, cols });
    setCells(Array(rows * cols).fill(false));
  };

  // Recalculate grid on window resize
  useEffect(() => {
    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  const handleMouseEnter = (index) => {
    setTimeout(() => {
      setCells((prev) => prev.map((cell, i) => (i === index ? true : cell)));
    }, 300); // Show circle after 0.3 seconds
  };

  const handleMouseLeave = (index) => {
    setTimeout(() => {
      setCells((prev) => prev.map((cell, i) => (i === index ? false : cell)));
    }, 3000); // Hide circle after 3 seconds
  };

  return (
    <div className="display h-screen sm:flex sm:flex-col sm:pl-3 z-40">
      {/* Navbar */}
      <nav className="w-full sm:p-4 pt-2 flex justify-between items-center z-40">
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
         className="fixed z-50 top-0 right-0 h-full w-[80vw] sm:w-[33vw] bg-customDark text-customLight"
         style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
         initial={{ x: '100%' }}
         animate={{ x: isMenuOpen ? 0 : '100%' }}
         transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
      >
        <div className="p-4 z-50">
          <motion.button
            onClick={toggleMenu}
            className="text-xl text-customLight absolute top-4 right-4"
            whileHover={{ scale: 0.9 }}
          >
            &#10005;
          </motion.button>

          <ul className="mt-40 space-y-10 pl-20 font-futura font-medium text-customLight">
            {["Inicio", "Projetos", "Sobre mim"].map((item) => {
              // Define the href based on the item
              let href;
              if (item === "Inicio") {
                href = "/";
              } else if (item === "Projetos") {
                href = "/projetos";
              } else if (item === "Sobre mim") {
                href = "/sobre";
              } else if (item === "CONTACT") {
                href = "/contact";
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


      {/* Mobile*/}
      <div className='block sm:hidden px-4'>
        <div className="text-xl  text-customDark ">
              <p className='font-demi text-[60px] ml-[-2px] pt-10 pb-4'>Tilestories</p>
              <p className='font-regular text-[24px]'>React Native | Firebase</p>
        </div>
        <div className="text-justify pt-10">
          <div className='text-[16px]'>
            <p className="font-regular font-futura pb-3">
            O projeto tilestories é uma aplicação móvel criada para a preservação e valorização do património azulejar de Aveiro, combinando tecnologia, arte e turismo cultural. A aplicação, desenvolvida em React Native com Firebase como base de dados, permite que habitantes e turistas explorem a cidade enquanto registram georreferenciadamente azulejos de interesse histórico. Com uma interface amigável, tilestories foi concebida no estilo de um “jogo sério”, incentivando o exercício físico e promovendo o turismo sustentável. Utilizadores podem desbloquear locais de azulejos já mapeados ou registrar novos, criando um catálogo visual que mapeia este patrimônio cultural português de forma colaborativa e interativa.
            </p>
          {showMore && (
            <p className="font-regular font-futura z-10">
            Além de incentivar a proteção do patrimônio, tilestories busca despertar o interesse na arte dos azulejos, integrando elementos de gamificação e uma abordagem social. Cada registro é georreferenciado e possui informações culturais que ampliam a experiência dos usuários, promovendo uma imersão cultural e histórica. A plataforma possui um sistema de pontuação e leaderboard para engajar os participantes, e um website backoffice para editores e administradores gerirem as submissões e aprovações. Com foco na usabilidade e na acessibilidade, o projeto tilestories representa uma iniciativa inovadora para a proteção cultural, ideal para tornar o turismo local mais dinâmico e interativo.
            </p>
            )}

          <motion.a 
            className="flex items-center md:absolute  md:pt-10 md:pb-10 md:z-10 cursor-pointer"
            whileHover={{ x: 5 }}
            onClick={handleToggle}
          >
            <span className="text-[19px] z-50 font-regular text-customDark mr-4">
              {showMore ? 'ver menos' : 'ver mais'}
            </span>
            <svg 
              className={`mt-1 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} 
              width="45" 
              height="20" 
              viewBox="0 0 56 21" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="-0.00225005" y1="10.5833" x2="52.4144" y2="10.5001" stroke="#222222" strokeWidth="2.83333" />
              <line x1="44.5017" y1="0.998265" x2="54.8196" y2="11.3161" stroke="#222222" strokeWidth="2.83333" />
              <line y1="-1.41667" x2="14.8467" y2="-1.41667" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 43.5 19)" stroke="#222222" strokeWidth="2.83333" />
            </svg>
          </motion.a>

          </div>
        </div>
        <div className="mt-6  pb-10">
          <p className='font-demi pb-2'>Video do website</p>
          <video src="./tilevideo.mp4" autoPlay controls loop muted className="w-full h-auto"></video>
        </div>
        
      </div>

      {/* Tablet and Desktop */}
      
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:pt-[20vh]">
        {/* Text Section */}
        <div className="px-5 md:pl-10 md:mr-[20px] lg:mr-[100px]  text-justify">
          <div className='z-10 text-[16px] pb-[10vh]'>
            <p className="font-regular font-futura ">
            O projeto tilestories é uma aplicação móvel criada para a preservação e valorização do património azulejar de Aveiro, combinando tecnologia, arte e turismo cultural. A aplicação, desenvolvida em React Native com Firebase como base de dados, permite que habitantes e turistas explorem a cidade enquanto registram georreferenciadamente azulejos de interesse histórico. Com uma interface amigável, tilestories foi concebida no estilo de um “jogo sério”, incentivando o exercício físico e promovendo o turismo sustentável. Utilizadores podem desbloquear locais de azulejos já mapeados ou registrar novos, criando um catálogo visual que mapeia este patrimônio cultural português de forma colaborativa e interativa.  
            </p>
          {showMore && (
            <p className="font-regular font-futura mt-4 z-10">
            Além de incentivar a proteção do patrimônio, tilestories busca despertar o interesse na arte dos azulejos, integrando elementos de gamificação e uma abordagem social. Cada registro é georreferenciado e possui informações culturais que ampliam a experiência dos usuários, promovendo uma imersão cultural e histórica. A plataforma possui um sistema de pontuação e leaderboard para engajar os participantes, e um website backoffice para editores e administradores gerirem as submissões e aprovações. Com foco na usabilidade e na acessibilidade, o projeto tilestories representa uma iniciativa inovadora para a proteção cultural, ideal para tornar o turismo local mais dinâmico e interativo.            </p>
          )}

          <motion.a 
            className="flex items-center sm:absolute  sm:pt-10 md:pb-10 sm:z-10 cursor-pointer"
            whileHover={{ x: 5 }}
            onClick={handleToggle}
          >
            <span className="text-[19px] z-50 font-regular text-customDark mr-4">
              {showMore ? 'ver menos' : 'ver mais'}
            </span>
            <svg 
              className={`mt-1 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} 
              width="45" 
              height="20" 
              viewBox="0 0 56 21" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="-0.00225005" y1="10.5833" x2="52.4144" y2="10.5001" stroke="#222222" strokeWidth="2.83333" />
              <line x1="44.5017" y1="0.998265" x2="54.8196" y2="11.3161" stroke="#222222" strokeWidth="2.83333" />
              <line y1="-1.41667" x2="14.8467" y2="-1.41667" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 43.5 19)" stroke="#222222" strokeWidth="2.83333" />
            </svg>
          </motion.a>

          </div>

          <div className="z-10 text-xl  pb-10 text-customDark ">
            <p className='font-demi text-[15vh] leading-[140px]'>Tilestories</p>
            <p className='font-regular text-[30px]'>React Native | Firebase</p>
          </div>
        </div>

        {/* Video Section */}
        <div className="px-5 pt-1 z-10">
          <video src="./tilevideo.mp4" autoPlay controls loop muted className="w-full h-auto"></video>
        </div>
      </div>

      {/* Full-Screen Hover Grid */}
      <div className="hidden sm:grid fixed inset-0 " style={{
        gridTemplateColumns: `repeat(${gridDimensions.cols}, minmax(0, 1fr))`,
        gridAutoRows: `${CELL_SIZE}px`,
      }}>
        {cells.map((showCircle, index) => (
          <div
            key={index}
            className="relative w-full h-full" // Keeps cell responsive
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{ zIndex: 1 }} // Ensure cells are on top
          >
            <AnimatePresence>
              {showCircle && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
                  className="absolute inset-0 flex justify-center items-center"
                  style={{ zIndex: 0 }} // Circles behind cells
                >
                  <div className="w-full h-full opacity-30 bg-customDark rounded-full pointer-events-none"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tilestories;
