import { useState, useEffect } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import React, { useRef } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className,
  once,
  animation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  },
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView]);

  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.003,
        y: prev.y + (mousePosition.y - prev.y) * 0.003,
      }));
    }, 10);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  const gradientBackground = `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, #222222 1%, #EDEDED 15%)`;

  return (
    <div
      className="display h-screen sm:flex sm:flex-col sm:pl-3 z-50"
      style={{background: window.innerWidth >= 640 ? 
        gradientBackground : 
        'none'  }}
    >


      <nav className="w-full sm:p-4 pt-2 flex justify-between items-center">
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
      

      {/* Telemovel  */}
      <div className='block sm:hidden pb-10'>
        <div className="px-4 pb-4"> 
          <img
            src="telehome.png" 
            alt="André Domingues"
            className="w-full object-contain " 
          />
        </div>
        <motion.a 
            className="flex items-center pl-4"
            whileHover={{ x: 5 }}
          >
            <Link className='flex' to="/projetos">
            <span className="pl-2 text-[19px] font-regular text-customDark mr-4">ver projetos</span>
            <svg className='mt-1' width="45" height="20" viewBox="0 0 56 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-0.00225005" y1="10.5833" x2="52.4144" y2="10.5001" stroke="#222222" strokeWidth="2.83333" />
              <line x1="44.5017" y1="0.998265" x2="54.8196" y2="11.3161" stroke="#222222" strokeWidth="2.83333" />
              <line y1="-1.41667" x2="14.8467" y2="-1.41667" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 43.5 19)" stroke="#222222" strokeWidth="2.83333" />
            </svg>
            </Link>
          </motion.a>
      </div>


      {/* Tablet e Desktop  */}
      <div className="hidden sm:block  w-full p-4 flex justify-between items-center pt-[38vh]">
        <div className="text-left space-y-4 col-10 pl-4">
          <AnimatedText
            text={"André"}
            className="lg:text-[7vw] md:text-[8vw] sm:text-[8vw] leading-[3.5vw] pl-2 font-medium font-futura text-customDark "
            animation={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          />
          <br />
          <AnimatedText
            text={"Domingues"}
            className="lg:text-[7vw] md:text-[8vw] sm:text-[8vw] leading-[3.5vw] font-medium font-futura text-customDark "
            animation={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0,transition: { delay: 0.5, duration: 0.5, staggerChildren: 1,  } },
            }}
          />
          <p className="pl-2 text-[23px] text-xl font-regular text-customDark pt-8">Web Developer</p>
          <motion.a 
            className="flex items-center"
            whileHover={{ x: 5 }}
          >
            <Link className='flex' to="/projetos">
            <span className="pl-2 text-[19px] font-regular text-customDark mr-4">ver projetos</span>
            <svg className='mt-1' width="45" height="20" viewBox="0 0 56 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-0.00225005" y1="10.5833" x2="52.4144" y2="10.5001" stroke="#222222" strokeWidth="2.83333" />
              <line x1="44.5017" y1="0.998265" x2="54.8196" y2="11.3161" stroke="#222222" strokeWidth="2.83333" />
              <line y1="-1.41667" x2="14.8467" y2="-1.41667" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 43.5 19)" stroke="#222222" strokeWidth="2.83333" />
            </svg>
            </Link>
          </motion.a>
        </div>

        <div className="absolute bottom-0 sm:left-[51vw] md:left-[50vw] lg:left-[55vw] sm:w-[40vw] md:w-[43vw] lg:w-[30vw] z-10"> 
          <img
            src="imghome.png" 
            alt="André Domingues"
            className="object-contain" 
          />
        </div>
      </div>
      
      
    </div>
  );
};

export default Home;
