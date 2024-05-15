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

            <div className={`${isNarrowScreen ? `w-11/12` : `w-1/3 px-4`} mb-5 flex flex-col xl:px-6 2xl:px-8 3xl:px-10`}>
              <div className='h-56 rounded-2xl overflow-hidden relative group'>
                <a href="https://www.booking.com/hotel/hr/villa-cube-premantura.hu.html">
                  <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/283963021.jpg?k=202a970f8414c4201f6471fed6f8a77b4f9d11950a76525efcc272cc66e38fb9&o=&hp=1" alt="project-1" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
                </a>
              </div>
              <div className='mb-1 mt-4 font-bold text-lg text-cyan-500'>PREMANTURA</div>
              <div className='mb-4 font-semibold text-md text-cyan-200'>Villa Cube</div>
              <div className='text-sm md:text-base text-justify mb-4'>
                <span className='flex justify-center text-center mb-4'>- Lefoglalva! -</span>
                A szállásegységek teljesen felszerelt konyhával, síkképernyős tévével, kanapéval berendezett nappalival,
                saját fürdőszobával, valamint mosógéppel rendelkeznek.
                Hűtőszekrény, sütő, főzőlap és kávéfőző szintén biztosított.
                A kellemes időtöltést kert és terasz szolgálja. Parkolás az udvarban. <br/>
                <span className='font-bold'>Ár: kb. 295.000 Ft / 5 fő / 5 éjszaka</span>
                <div className='mb-2 mt-2 text-xs text-cyan-200 leading-normal'>
                Érkezéskor EUR 200 fizetendő biztonsági letétként. Ez körülbelül HUF 77125. Készpénzben fizetendő. A letét kijelentkezéskor visszajár. A letét teljes mértékben visszatérítendő készpénzben, ha a kijelentkezéskori szemrevételezéskor úgy találják, hogy nem esett kár a szállásban.
                </div>
              </div>
            </div>

            <div className={`${isNarrowScreen ? `w-11/12` : `w-1/3 px-4`} mb-5 flex flex-col xl:px-6 2xl:px-8 3xl:px-10`}>
              <div className='h-56 rounded-2xl overflow-hidden relative group'>
                <a href="https://www.facebook.com/AzurEtterem/?locale=hu_HU">
                  <img src="https://scontent.fbud6-3.fna.fbcdn.net/v/t39.30808-6/399277454_794550762472056_246846781828259931_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TmCey_3klyMQ7kNvgE7Fggm&_nc_oc=AdiLKi88zHC80VoVyESdqseoJbj3NBmag1QGBSbKETjuZnRmbUZA5TvVbkFsKDS3Sz6cBPGxeRjcYpxECE8RBMVr&_nc_ht=scontent.fbud6-3.fna&oh=00_AfDF86IdQRE85EqJGFUwfAuHtNKNj71cn5fuazJzx6hfVg&oe=663B1089" alt="project-2" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
                </a>
              </div>
              <div className='mb-1 mt-4 font-bold text-lg text-cyan-500'>CSURGÓ</div>
              <div className='mb-4 font-semibold text-md text-cyan-200'>Azúr Étterem és Panzió</div>
              <div className='text-sm md:text-base text-justify mb-4'>
                <span className='flex justify-center text-red-400 text-center mb-4'>- Még nincs lefoglalva! -</span>
                Saját zárt parkoló, zöldövezetes udvar, napi menü az étteremben 1850 Ft, állandó menü 2350 Ft. Andriséktól 5 perc sétára :)
                A panzió 5 db kétágyas és 3 db háromágyas szobával rendelkezik, a szobák pótágyazhatók. <br/>
                <span className='font-bold'>Árak 1 éjszakára: </span> <br/>
                <span className='font-bold'>6.500 Ft / 1 fő</span> <br/>
                <span className='font-bold'>9.000 Ft / 2 fő</span> <br/>
                <span className='font-bold'>12.000 Ft / 3 fő</span>
                <div className='mb-2 mt-2 text-xs text-cyan-200 leading-normal'>
                SZÉP Kártyát elfogadnak. Idegenforgalmi adó: 350 Ft / fő / éjszaka
                </div>
              </div>
            </div>

            <div className={`${isNarrowScreen ? `w-11/12` : `w-1/3 px-4`} mb-5 flex flex-col xl:px-6 2xl:px-8 3xl:px-10`}>
              <div className='h-56 rounded-2xl overflow-hidden relative group'>
                <a href="https://www.booking.com/hotel/hu/szoloskert-fogado.hu.html">
                  <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/109175543.jpg?k=abbbd31b99aadb8b8443aae6b88ad815f0910ff4ea6f66cf5178d09d0a6f081f&o=&hp=1" alt="project-3" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
                </a>
              </div>
              <div className='mb-1 mt-4 font-bold text-lg text-cyan-500'>NAGYKANIZSA</div>
              <div className='mb-4 font-semibold text-md text-cyan-200'>Szőlőskert Étterem és Fogadó</div>
              <div className='text-sm md:text-base text-justify mb-4'>
                <span className='flex justify-center text-red-400 text-center mb-4'>- Még nincs lefoglalva! -</span>
                A szőlőültetvényekkel körülvett családi kézben lévő szálloda mindössze 1 km-re található az M7-es autópályától, a nagykanizsai Csónakázó-tó közelében. A Hotel Vineyard Inn - Szőlőskert gyógy- és wellnessrészleggel, valamint a Gault Millau étteremkalauz által elismert ínyenc étteremmel várja vendégeit.<br/>
                <span className='font-bold'>Árak 1 éjszakára Booking.com-on: </span> <br/>
                <span className='font-bold'>36.500 - 45.500 Ft között / 2 - 3 fő</span> <br/>
                <div className='mb-2 mt-2 text-xs text-cyan-200 leading-normal'>
                Szerintem nem fogadnak el SZÉP Kártyát, legalábbis nem találtam a fizetési módok között. Érdemes a weboldalukon foglalni, mert kicsit olcsóbb, mint a Booking.com-on.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;