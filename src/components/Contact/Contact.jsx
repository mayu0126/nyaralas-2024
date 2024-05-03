import { React, useState } from 'react';

const Contact = ({id}) => {

  return(
    <div id={id} className='flex justify-center items-center max-h-fit bg-slate-900'>
      <div className='mt-20 mb-52 w-5/6 sm:w-4/6 md:w-1/2 lg:w-1/3 px-2 py-2 text-slate-900'>
        <div className='text-center'>
          <div className='mb-10 font-bold text-2xl md:text-3xl xl:text-4xl text-amber-100'>KÖLTSÉGEK</div>

          <div
            className='text-center mb-16 px-3 py-6 bg-white rounded-2xl'>
              <div className='mb-2 font-semibold text-lg text-cyan-700'>- HAMAROSAN -</div>
            <div className='mb-2 font-semibold text-lg text-cyan-700'>Itt lesznek a költségek összesen és 1 főre lebontva is</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;