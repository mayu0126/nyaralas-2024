import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { React, useState, useEffect } from 'react';

const navigation = [
  { name: 'Infók', href: 'informaciok' },
  { name: 'Szállások', href: 'szallasok' },
  { name: 'Éttermek', href: 'ettermek' },
  { name: 'Látnivalók', href: 'latnivalok' },
  { name: 'Természet', href: 'termeszet' },
  { name: `Költségek`, href: 'koltsegek' },

];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCloseIcon, setIsCloseIcon] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHeaderOpen(currentScrollPos <= 0); // scrolling direction check
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCloseIcon(!isCloseIcon);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsCloseIcon(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${isHeaderOpen ? 'h-28' : 'h-20'}`}>
      <nav className={`flex items-center justify-between p-4 xl:px-4" aria-label="Global" ${isHeaderOpen ? 'h-28' : 'h-20'}`}>

        <div className="flex-1">
          <ScrollLink to="landing" className="-m-1.5 p-1.5 flex items-center cursor-pointer" spy={true} smooth={true} offset={-70} duration={500}>
            <img
              className={`w-auto transition-all duration-500 ${isHeaderOpen ? 'h-16' : 'h-12'}`}
              src="https://static.vecteezy.com/system/resources/previews/011/794/230/original/sea-starfish-blue-icon-element-png.png"
              alt=""
            />
            <div className={`w-auto transition-all duration-500 ${isHeaderOpen ? 'text-4xl' : 'text-3xl'} text-slate-800 font-semibold`}><span className="ml-2 text-cyan-500 font-bold" style={{ fontFamily: 'Dancing Script, cursive'}}>Nyaralás 2024</span></div>
          </ScrollLink>
        </div>

        <div className="md:hidden">
          <div className="flex items-center">

            <button
              className="text-gray-900 p-2 focus:outline-none focus:ring"
              onClick={toggleMenu}
            >
              {isCloseIcon ? (
                // X icon
                <svg
                  className="h-6 w-6 text-cyan-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon

                <svg
                  className="h-6 w-6 text-cyan-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
              
            </button>
            {isMenuOpen && (
              <div className="absolute top-16 right-0 w-48 bg-white border border-slate-200 rounded-lg p-2">
                  <>
                  {navigation.map((item) => (
                    <ScrollLink
                      key={item.name}
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={closeMenu}
                      className={`text-sm ${item.name === "Projects" ? 'text-cyan-700 font-bold' : 'text-slate-800 font-semibold'} leading-6 block px-4 py-2 hover:bg-slate-100 cursor-pointer`}>
                      {item.name.toUpperCase()}
                    </ScrollLink>
                  ))
                  }
                </>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex md:gap-x-10">
          {navigation.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href} 
              spy={true}
              smooth={true}
              offset={-70} //fine-tune the scrolling position
              duration={500}
              className={`text-base cursor-pointer ${item.name === "Szállások" ? 'hover:text-cyan-600 text-cyan-700 font-bold' : 'hover:text-slate-600 text-slate-800 font-semibold'}`}>
              {item.name.toUpperCase()}
            </ScrollLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;