import { Link } from 'react-router-dom';
import { React, useState, useEffect } from 'react';

const Projects = ({id}) => {

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
    <div id={id} className={`${isNarrowScreen ? `flex-col` : `max-h-fit`} flex justify-center items-center bg-slate-900`}>
      <div className="w-5/6 px-2 py-2 text-white">
        <div className='text-center'>
          <div className={`${isNarrowScreen ? "mt-10" : "mt-20"} mb-10 xl:mb-14 2xl:mb-20 font-bold text-2xl md:text-3xl xl:text-4xl text-amber-100`}>SZÁLLÁSOK</div>
          <div className={`${isNarrowScreen ? `flex-col items-center` : `justify-between`} flex`}>

            <div className={`${isNarrowScreen ? `w-11/12` : `w-1/2 px-4`} mb-5 flex flex-col xl:px-6 2xl:px-8 3xl:px-10`}>
              <div className='h-56 rounded-2xl overflow-hidden relative group'>
                <a href="https://www.booking.com/hotel/hr/villa-cube-premantura.hu.html">
                  <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/283963021.jpg?k=202a970f8414c4201f6471fed6f8a77b4f9d11950a76525efcc272cc66e38fb9&o=&hp=1" alt="project-1" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
                </a>
              </div>
              <div className='mb-4 mt-4 font-bold text-md text-cyan-500'>PREMANTURA</div>
              <div className='text-sm md:text-base text-justify mb-4'>
                <span className='flex justify-center text-center mb-4'>- Lefoglalva! -</span>
                A szállásegységek teljesen felszerelt konyhával, síkképernyős tévével, kanapéval berendezett nappalival,
                saját fürdőszobával, valamint mosógéppel rendelkeznek.
                Hűtőszekrény, sütő, főzőlap és kávéfőző szintén biztosított.
                A kellemes időtöltést kert és terasz szolgálja. Parkolás az udvarban.
              </div>
            </div>

            <div className={`${isNarrowScreen ? `w-11/12` : `w-1/2 px-4`} mb-5 flex flex-col xl:px-6 2xl:px-8 3xl:px-10`}>
              <div className='h-56 rounded-2xl overflow-hidden relative group'>
                <a href="https://www.facebook.com/AzurEtterem/?locale=hu_HU">
                  <img src="https://scontent.fbud6-3.fna.fbcdn.net/v/t39.30808-6/399277454_794550762472056_246846781828259931_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TmCey_3klyMQ7kNvgE7Fggm&_nc_oc=AdiLKi88zHC80VoVyESdqseoJbj3NBmag1QGBSbKETjuZnRmbUZA5TvVbkFsKDS3Sz6cBPGxeRjcYpxECE8RBMVr&_nc_ht=scontent.fbud6-3.fna&oh=00_AfDF86IdQRE85EqJGFUwfAuHtNKNj71cn5fuazJzx6hfVg&oe=663B1089" alt="project-2" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
                </a>
              </div>
              <div className='mb-4 mt-4 font-bold text-md text-cyan-500'>CSURGÓ</div>
              <div className='text-sm md:text-base text-justify mb-4'>
                <span className='flex justify-center text-center mb-4'>- Még nincs lefoglalva! -</span>
                saját zárt parkoló, zöldövezetes udvar, napi menü az étteremben 1850 Ft, állandó menü 2350 Ft
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;