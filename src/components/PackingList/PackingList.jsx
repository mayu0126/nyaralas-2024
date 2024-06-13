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
            <div className='font-normal text-md text-slate-900'> Ezeket ne felejtsd otthon: {isNarrowScreen ? <br/> : ""}</div>
            <div className='mt-4 font-bold'>
              RUHÁK
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />pólók
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />rövidnadrágok
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />fürdőruhák
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />fehérneműk
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />zoknik
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />1 pulcsi és 1 hosszú nadrág
            </div>

            <div className='mt-4 font-bold'>
              CIPŐK
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />strandpapucs
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />sportcipő
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />szandál
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />úszócipő
            </div>
            <div className='flex'>
            <img src="https://s13emagst.akamaized.net/products/20685/20684458/images/res_859d84b7e7cf0c7937d3c6e20fe8bd8d.jpg?width=300&height=300&hash=946D5BBFBBA6A16FFB4C8EEDC829E416"
              alt='uszocipo'
              className='rounded-2xl w-[180px] h-[180px] object-cover' />
              <div className='mt-16 text-xs ml-2'>egy ilyen az éles sziklák és tengerisünök miatt :) (ott is lehet venni az árusoknál)</div>
            </div>

            <div className='mt-4 font-bold'>
              TÁSKÁK
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />hátizsák/kistáska
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />strandtáska
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />hűtőtáska
            </div>

            <div className='mt-4 font-bold'>
              KIEGÉSZÍTŐK
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />úszószemüveg, sznorkel cucc
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />békatalp
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />kalap/baseball sapi
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />kendő
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />napszemüveg
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />ékszer
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />öv
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />látó- és olvasószemüveg
            </div>

            <div className='mt-4 font-bold'>
              KOZMETIKUMOK, PIPERE CUCCOK
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />❗ naptej ❗
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />tusfürdő
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />sampon, hajbalzsam
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />fogkefe, fogkrém
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />testápoló, kézkrém
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />smink
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />fésű
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />hajformázó
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />hajgumi
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />borotva
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />sebtapasz, betadine
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />gyógyszerek, vitaminok
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />kontaktlencse, lencsefolyadék, tartó
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />kézfertőtlenítő
            </div>

            <div className='mt-4 font-bold'>
              MŰSZAKI
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />laptop + töltő
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />telefon + töltő
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />powerbank
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />fényképező, gopro
            </div>

            <div className='mt-4 font-bold'>
              KONYHA & FÜRDŐSZOBA
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />tartós élelem, nassolnivalók
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />sör és egyéb pia :)
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />mosogatószer + szivacs
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />mosogatógép tabletta
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />mosópor vagy kapszula
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />alufólia, folpack, zacsik
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />só, bors
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />instant kávé, energiaital
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />műanyag evőeszközök a partra
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />papírtörlő, WC papír
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />konyharuha
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />törölköző: min 2 db nagy/fő
            </div>

            <div className='mt-4 font-bold'>
              EGYÉB HASZNOS
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />pénz és bankkártya :D
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />igazolványok
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />rágó, cukorka
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />úszódeszka
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />napsátor
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />gyékény, polifoam
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />olvasnivaló
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />társasjáték, kártya
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />edzéshez eszközök
            </div>
            <div className='font-semibold text-md text-cyan-700'>
              <input type="checkbox" className="mr-2" />rajzcuccok :)
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default PackingList;