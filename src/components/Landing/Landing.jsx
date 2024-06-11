import { React, useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Countdown from '../Countdown/Countdown';

function Landing ({id}) {

    const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsNarrowScreen(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

 return (
    <div id={id} className='mb-36'>
        {isNarrowScreen ? (

        <div className='justify-center items-center max-h-fit'>
            <div className='p-4 w-full text-center flex flex-col sm:flex-row justify-center items-center'>
                <div className='mt-36 w-36 h-36 xs:w-36 xs:h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-white border-4'>
                    <a href="https://www.horvatorszaginfo.hu/helyek/kamenjak-felsziget/kamejnak-1000.jpg">
                        <img className="w-full h-full object-cover overflow-hidden" src="https://www.horvatorszaginfo.hu/helyek/kamenjak-felsziget/kamejnak-1000.jpg" alt="premantura" title="premantura" />
                    </a>
                </div>
            </div>
        
            <div className='flex justify-center items-center'>
                <div className="w-5/6 sm:w-1/3 px-2 py-2 text-white text-left">
                    <div className='text-center'>
                        <div className='text-sm sm:text-xs'>
                            Sziasztok,
                        </div>
                        <div className='mt-5 font-medium text-2xl text-amber-100'>
                            <div>FEDEZZÜK FEL EGYÜTT A MESEBELI HORVÁT TENGERPARTOT!</div>
                        </div>
                    </div>
                    <div className='mt-5 text-sm sm:text-xs text-justify'>
                    Készülj fel egy felejthetetlen családi kalandra, ahol az élmények és a vidámság végigkísérik utunkat! Vár Titeket a mesés Premantura, ahol a türkizkék tenger és a ragyogó napsütés garantáltan elvarázsol majd mindenkit.
                    </div>
                    <div className='flex items-center justify-center mt-8 xs:flex-col text-xs xs:text-xs'>
                    </div>
                </div>
            </div>
        </div>

        ) : (

        <div className='mb-20 flex justify-center items-center max-h-fit'>
            <div className='mt-56 w-1/3 sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 py-2 text-white text-left'>
                <div className='text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg'>
                    Sziasztok,
                </div>
                <div className='font-medium text-lg sm:text-2xl lg:text-2xl xl:text-4xl text-amber-100'>
                FEDEZZÜK FEL EGYÜTT A MESEBELI HORVÁT TENGERPARTOT!
                </div>
                <div className='mt-5 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg'>
                Készülj fel egy felejthetetlen családi kalandra, ahol az élmények és a vidámság végigkísérik utunkat! Vár Titeket a mesés Premantura, ahol a türkizkék tenger és a ragyogó napsütés garantáltan elvarázsol majd mindenkit.
                </div>
            </div>

            <div className='mt-56 sm:mt-36 md:mt-44 w-1/3 sm:w-1/4 lg:w-1/3 text-center flex justify-center items-center'>
                <div className='w-36 h-36 md:w-44 md:h-44 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 flex justify-center items-center rounded-full overflow-hidden border-white border-4 lg:border-8'>
                    <a href="https://www.horvatorszaginfo.hu/helyek/kamenjak-felsziget/kamejnak-1000.jpg">
                        <img className="w-full h-96 object-cover rounded-full overflow-hidden" src="https://www.horvatorszaginfo.hu/helyek/kamenjak-felsziget/kamejnak-1000.jpg" alt="premantura" title="premantura" />
                    </a>
                </div>
            </div>
        </div>
        )}
        <Countdown />
    </div>
 )
}

export default Landing;