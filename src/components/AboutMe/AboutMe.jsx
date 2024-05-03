import { React, useState, useEffect } from 'react';

const AboutMe = ({id}) => {

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
    <div id={id} className={`${isNarrowScreen ? "flex-col" : "max-h-fit"} flex justify-center items-center bg-[url(https://www.horvatorszagonline.hu/images/Varos/premantura.jpg)] bg-[cover] bg-[center] bg-[no-repeat]`}>
      <div className='w-2/3 lg:w-1/3 px-2 py-2 mt-20 text-center'>
          <div className='mb-10 md:mb-20 font-bold text-2xl md:text-3xl xl:text-4xl text-white'>INFORMÁCIÓK</div>
          <div className='mb-20 text-left font-semibold text-sm md:text-base px-5 py-5 text-slate-900 bg-white rounded-2xl bg-opacity-60'>
          <div className='flex justify-center align-middle text-center'>
            <div>Időpont:</div>
            <div className='font-extrabold ml-2'> 2024. június 20 - 27. </div>
          </div><br/>
            Menetrend:<br/>
            - 20-án lemegyünk Csurgóra, itt egy éjszaka pihenő <br/>
            - 21-én reggel (vagy hajnalban) elindulunk Horvátországba <br/>
            - Premanturában 5 éjszakát leszünk: június 21-től 26-ig <br/>
            - 26-án délután elindulunk Csurgóra, itt alszunk 1-et <br/>
            - 27-én indulás haza Budapestre/Apcra <br/>
          </div>
        </div>
    </div>
  );
};

export default AboutMe;