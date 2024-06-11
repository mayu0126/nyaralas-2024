import { React, useState, useEffect } from 'react';

const Skills = ({id}) => {

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
    <div id={id} className='flex justify-center items-center max-h-fit bg-slate-900'>
      <div className='w-11/12 mt-20 mb-20 px-1 py-1 lg:px-2 lg:py-2 text-slate-900'>
        <div className='text-center items-center'>
          <div className='mb-10 font-bold text-2xl xl:text-4xl text-amber-100'>VÁLASZTHATÓ PROGRAMOK</div>

            <div className='text-center mb-16 px-3 py-3 bg-white rounded-2xl'>
            <div className='mb-5 mt-5 font-semibold text-lg text-cyan-700'>Program 1</div>

            {isNarrowScreen ? (
              <div className='flex-col justify-center items-center'>

                <div className='flex justify-center items-center'>
                  program leírása és kép
                </div>

              </div>
            ) : (
              <div className='flex-col justify-center items-center'>

                <div className='flex justify-center items-center'>
                program leírása és kép
                </div>

            </div>
            )}

          </div>

          <div className='text-center mb-16 px-3 py-3 bg-white rounded-2xl'>
            <div className='mb-5 mt-5 font-semibold text-lg text-cyan-700'>Program 2</div>

            {isNarrowScreen ? (
              <div className='flex-col justify-center items-center'>

                <div className='flex justify-center items-center'>
                program leírása és kép
                </div>

              </div>
            ) : (
              <div className='flex-col justify-center items-center'>

                <div className='flex justify-center items-center'>
                program leírása és kép
                </div>

            </div>
            )}

          </div>

          <div className='text-center mb-16 px-3 py-3 bg-white rounded-2xl'>
            <div className='mb-5 mt-5 font-semibold text-lg text-cyan-700'>Program 3</div>

            {isNarrowScreen ? (
              <div className='flex-col justify-center items-center'>

                <div className='flex justify-center items-center'>
                program leírása és kép
                </div>

              </div>
            ) : (
              <div className='flex-col justify-center items-center'>

                <div className='flex justify-center items-center'>
                program leírása és kép
                </div>

            </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;