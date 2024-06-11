import { React, useState, useEffect } from 'react';

const PackingList = ({id}) => {

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
        <img src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt='borond'
          className='rounded-2xl' />
      </div>

      <div className='mt-20 mb-20 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 px-2 py-2 text-slate-900'>
        <div className='text-center xl:text-right'>
          <div className={`${isNarrowScreen ? "" : "mr-5"} mb-10 font-bold text-2xl lg:text-3xl xl:text-4xl text-cyan-700`}>HOZD MAGADDAL</div>

          <div className={`${isNarrowScreen ? "h-fit mb-4" : "hidden"}`}>
            <img src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt='borond'
              className='rounded-2xl' />
          </div>

          <div className={`${isNarrowScreen ? "mb-4" : "mb-12"} text-left px-3 py-3 bg-white rounded-2xl`}>
            <div className='font-normal text-md text-slate-900'> Ezeket ne felejtsd otthon: {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div className='font-semibold text-lg text-cyan-700'>-</div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default PackingList;