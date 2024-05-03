import { React, useState, useEffect } from 'react';

const Experience = ({id}) => {

  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 1280);

  useEffect(() => {
      const handleResize = () => {
          setIsNarrowScreen(window.innerWidth < 1280);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return(
    <div id={id} className={`${isNarrowScreen ? "flex-col" : "max-h-fit"} flex justify-center items-center max-h-fit bg-slate-100`}>

      <div className={`${isNarrowScreen ? "hidden" : "h-fit w-1/3 mr-20"}`}>
        <img src="https://i.pinimg.com/originals/7a/9b/35/7a9b3533af3a5b86f656f87fca847450.jpg"
          alt='tengerpart'
          className='rounded-2xl' />
      </div>

      <div className='mt-20 mb-20 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 px-2 py-2 text-slate-900'>
        <div className='text-center xl:text-right'>
          <div className={`${isNarrowScreen ? "" : "mr-5"} mb-10 font-bold text-2xl lg:text-3xl xl:text-4xl text-cyan-700`}>TERMÉSZET</div>

          <div className={`${isNarrowScreen ? "h-fit mb-4" : "hidden"}`}>
            <img src="https://i.pinimg.com/originals/7a/9b/35/7a9b3533af3a5b86f656f87fca847450.jpg"
              alt='tengerpart'
              className='rounded-2xl' />
          </div>

          <div className={`${isNarrowScreen ? "mb-4" : "mb-12"} text-left px-3 py-3 bg-white rounded-2xl`}>
            <div className='font-normal text-md text-slate-900'>1. természeti szépség leírása {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div className='font-semibold text-lg text-cyan-700'>-</div>
          </div>

          <div className={`${isNarrowScreen ? "mb-4" : "mb-12"} text-left px-3 py-3 bg-white rounded-2xl`}>
            <div className='font-normal text-md text-slate-900'>2. természeti szépség leírása {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div className='font-semibold text-lg text-cyan-700'>-</div>
          </div>

          <div className={`${isNarrowScreen ? "mb-4" : "mb-12"} text-left px-3 py-3 bg-white rounded-2xl`}>
            <div className='font-normal text-md text-slate-900'>3. természeti szépség leírása {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div className='font-semibold text-lg text-cyan-700'>-</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;