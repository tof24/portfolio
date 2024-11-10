import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CELL_SIZE = 40; // Fixed size for each cell in pixels

const Spacewalk = () => {
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


      {/* Mobile*/}
      <div className='block sm:hidden px-4'>
        <div className="text-xl  text-customDark ">
              <p className='font-demi text-[60px] ml-[-2px] pt-10 pb-4'>spacewalk</p>
              <p className='font-regular text-[24px]'>React.js | Wordpress</p>
        </div>
        <div className="text-justify pt-10">
          <div className='text-[16px]'>
            <p className="font-regular font-futura pb-3">
            Este projeto consiste em um website editorial responsivo que oferece uma experiência imersiva de exploração pelo Sistema Solar, combinando elementos de arte e reflexão filosófica. Desenvolvido em React.js com o uso do WordPress como base de dados, o site utiliza um sistema de scroll animado, permitindo que o usuário navegue por modelos 3D de cada um dos planetas. Cada planeta é apresentado com um plano conceitual único, associado a um catálogo de conteúdos literários e audiovisuais, proporcionando uma narrativa visual sobre a brevidade e o significado da vida, e o papel do ser humano no vasto contexto do Universo. A interface é desenhada para ser fluida e envolvente, adaptada para uma experiência intuitiva em diferentes dispositivos.          
            </p>
          {showMore && (
            <p className="font-regular font-futura z-10">
              Com uma narrativa existencial que questiona o propósito humano frente à grandiosidade da galáxia, o website posiciona-se como um arquivo cultural e filosófico, exaltando o legado artístico e cultural da humanidade. A experiência proposta visa incitar uma reflexão profunda sobre a natureza efêmera da vida e sobre como a arte e a cultura nos conectam e trazem significado ao nosso breve tempo na Terra. Com objetivos principais de compartilhar cultura por meio de conteúdos literários e audiovisuais, proporcionar uma viagem virtual pelo Sistema Solar, e estimular a introspecção sobre nossa existência, este projeto une tecnologia e filosofia para construir uma narrativa sobre a condição humana e o cosmos.
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
          <video src="./Demo_Desktop_SpaceWalk.mp4" autoPlay controls loop muted className="w-full h-auto"></video>
        </div>
        
      </div>

      {/* Tablet and Desktop */}
      
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:pt-[20vh]">
        {/* Text Section */}
        <div className="px-5 md:pl-10 md:mr-[20px] lg:mr-[100px]  text-justify">
          <div className='z-10 text-[16px] pb-[10vh]'>
            <p className="font-regular font-futura ">
            Este projeto consiste em um website editorial responsivo que oferece uma experiência imersiva de exploração pelo Sistema Solar, combinando elementos de arte e reflexão filosófica. Desenvolvido em React.js com o uso do WordPress como base de dados, o site utiliza um sistema de scroll animado, permitindo que o usuário navegue por modelos 3D de cada um dos planetas. Cada planeta é apresentado com um plano conceitual único, associado a um catálogo de conteúdos literários e audiovisuais, proporcionando uma narrativa visual sobre a brevidade e o significado da vida, e o papel do ser humano no vasto contexto do Universo. A interface é desenhada para ser fluida e envolvente, adaptada para uma experiência intuitiva em diferentes dispositivos.          
            </p>
          {showMore && (
            <p className="font-regular font-futura mt-4 z-10">
              Com uma narrativa existencial que questiona o propósito humano frente à grandiosidade da galáxia, o website posiciona-se como um arquivo cultural e filosófico, exaltando o legado artístico e cultural da humanidade. A experiência proposta visa incitar uma reflexão profunda sobre a natureza efêmera da vida e sobre como a arte e a cultura nos conectam e trazem significado ao nosso breve tempo na Terra. Com objetivos principais de compartilhar cultura por meio de conteúdos literários e audiovisuais, proporcionar uma viagem virtual pelo Sistema Solar, e estimular a introspecção sobre nossa existência, este projeto une tecnologia e filosofia para construir uma narrativa sobre a condição humana e o cosmos.
            </p>
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
            <p className='font-demi text-[15vh] leading-[140px]'>Spacewalk</p>
            <p className='font-regular text-[30px]'>React.js | Wordpress</p>
          </div>
        </div>

        {/* Video Section */}
        <div className="px-5 pt-1 z-10">
          <video src="./Demo_Desktop_SpaceWalk.mp4" autoPlay controls loop muted className="w-full h-auto"></video>
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

export default Spacewalk;
