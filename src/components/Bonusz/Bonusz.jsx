import { React, useState } from 'react';

const Bonusz = ({id}) => {

  return(
    <div id={id} className='flex justify-center items-center max-h-fit bg-slate-100'>
      <div className='mt-20 mb-52 w-5/6 sm:w-4/6 md:w-1/2 lg:w-1/2 px-2 py-2 text-slate-900'>
        <div className='text-center'>
          <div className='mb-4 font-bold text-2xl md:text-3xl xl:text-4xl text-slate-900'>BÓNUSZ</div>
          <div className='mb-10 font-semibold text-xl md:text-xl xl:text-2xl text-slate-900'>Jászapáti kisállatvásár soundtrack xd</div>
          <div className='justify-center items-center text-center mb-4 px-3 py-6 bg-white rounded-2xl'>

            <div className='flex justify-center items-center text-center'>
            <img src="https://i.imgur.com/nffzQzo.png"
                alt='allatvasar'
                className='rounded-2xl' />
            </div>

            <div className='mt-6 flex justify-center items-center text-center'>
              <audio controls>
                <source src='/Jászapáti v15_edited.mp3' type='audio/mpeg' />
                Sajnos a böngésződ nem támogatja a zene lejátszását :(.
              </audio>
            </div>
          </div>

          <div className='justify-center items-center text-center mb-16 px-3 py-6 bg-white rounded-2xl'>
            <div className='mb-4 font-semibold text-lg text-cyan-700'>- DALSZÖVEG -</div>
            <div className='font-semibold text-sm'>
            Yo,<br/>

            Nincs itt értelem, miért? <br/>
            Meg sem kérdezem.<br/>
            Jászapátiban<br/>
            Állatvásár van.<br/><br/>

            Hülye emberek,<br/>
            odébb menjetek!<br/>
            Tekinteteket<br/>
            innen vigyétek!<br/><br/>

            Jön Alex<br/>
            és jön Tina,<br/>
            itt jön Rita,<br/>
            és itt jön Csita.<br/><br/>

            Apa is jön bandukolva,<br/>
            Anya is jön bandukolva,<br/>
            Andris is jön bandukolva,<br/>
            Jancsi is itt bandukolna,<br/><br/>

            Yo, ha épp nem,<br/>
            otthon aludna... (2x)<br/><br/>

            Vadászunk itt egy bak nyúlra,<br/>
            Átmegyünk az úton túlra,<br/>
            Ott vannak a kisállatok,<br/>
            Ott történnek a varázslatok.<br/><br/>

            Apa a nyulat szatyorba rakja,<br/>
            Ki ne ugorjon, szól rá anya<br/>
            Baszki kine, jaj csak kine!<br/>
            Kis nyuszika, ottan pihenj...<br/>
            (Kicsi nyuszika)<br/><br/>

            A szatyorban heverészett,<br/>
            bátoran és csenevészen,<br/>
            Míg Pintérék hazaértek,<br/>
            Pintérék csak hazaértek.<br/><br/>

            Míg Pintérék hazatértek,<br/>
            Pintérék csak hazatértek.<br/><br/>

            (csenevészen)<br/>
            (hazaértek)
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Bonusz;