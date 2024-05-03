import { React, useState, useEffect } from 'react';

const Education = ({id}) => {

  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
      const handleResize = () => {
          setIsNarrowScreen(window.innerWidth < 1024);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return(
    <div id={id} className={`${isNarrowScreen ? "flex-col" : "max-h-fit"} flex justify-center items-center bg-slate-100`}>
      
      <div className='mt-20 mb-20 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 px-2 py-2 lg:mr-20 text-slate-900'>
        <div className={`${isNarrowScreen ? "text-center" : "text-left"}`}>
          <div className={`${isNarrowScreen ? "" : "ml-5"} mb-10 font-bold text-2xl lg:text-3xl xl:text-4xl text-cyan-700`}>ÉTTERMEK</div>

          <div className={`${isNarrowScreen ? "h-fit mb-4" : "hidden"}`}>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0a/90/71/casa-mia.jpg?w=600&h=400&s=1"
              alt='etterem'
              className='rounded-2xl' />

          </div>

          <div className='text-left mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>ÉTTEREM 1 {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div className='font-semibold text-lg text-cyan-700'>-</div>
          </div>

          <div className='text-left mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>ÉTTEREM 2 {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div className='font-semibold text-lg text-cyan-700'>-</div>
          </div>

          <div className='text-left mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>ÉTTEREM 3 {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div className='font-semibold text-lg text-cyan-700'>-</div>
          </div>

          <div className='text-left mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>ÉTTEREM 4 {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div className='font-semibold text-lg text-cyan-700'>-</div>
          </div>

          <div className='text-left mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>ÉTTEREM 5 {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div className='font-semibold text-lg text-cyan-700'>-</div>
          </div>

        </div>
      </div>
      <div className={`${isNarrowScreen ? "hidden" : "h-fit"} w-1/3`}>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0a/90/71/casa-mia.jpg?w=600&h=400&s=1"
          alt='etterem'
          className='rounded-2xl' />

      </div>
    </div>
  );
};

export default Education;