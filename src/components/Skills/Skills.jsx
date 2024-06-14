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
      <div className='w-10/12 mt-20 mb-20 px-1 py-1 lg:px-2 lg:py-2 text-slate-900'>
        <div className='text-center items-center'>
          <div className='mb-10 font-bold text-2xl xl:text-4xl text-amber-100'>VÁLASZTHATÓ PROGRAMOK</div>

            <div className='flex-col flex text-center mb-16 pb-10 px-3 py-3 bg-white rounded-2xl'>

              <div className='mb-5 mt-5 font-semibold text-lg text-cyan-700'>1. VÁROSNÉZÉS ROVINJBAN</div>

                <div className='flex flex-col justify-center items-center'>
                  <img src="https://utazas-nyaralas.info/horvatorszag/rovinj-6-1000.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 w-[450px] h-[200px] object-cover' />
                    
                  <div className='text-left px-4'>
                  <div ><span className='font-bold'>Időtartam:</span> 3-4 óra</div>
                  <div ><span className='font-bold'>Javasolt időszak:</span> délután, este</div>
                  <div ><span className='font-bold'>Parkolás:</span> kb. 2 €/óra (Parken Rovinj Hafen - itt szoktunk)</div>
                  </div>
                  
                  <img src="https://hellovilagvlog.hu/wp-content/uploads/2022/01/Rovinj-latnivalok-ovaros.jpg.webp"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Szép utcák</div>
                
                  <img src="https://hellovilagvlog.hu/wp-content/uploads/2022/01/Rovinj-latnivalok-eufemia-templom.jpg.webp"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Főtér és óratorony</div>

                  <img src="https://hellovilagvlog.hu/wp-content/uploads/2022/01/Rovinj-latnivalok-barok.jpg.webp"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Vízpart naplementében</div>

                  <img src="https://www.balkaninfo.hu/wp-content/uploads/2017/02/Monte-%C3%A9tterem-e1490370555680.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Éttermek</div>

                </div>
              </div>

            
              <div className='flex-col flex text-center mb-16 pb-10 px-3 py-3 bg-white rounded-2xl'>
                <div className='mb-5 mt-10 font-semibold text-lg text-cyan-700'>2. VÁROSNÉZÉS PULÁBAN</div>

                <div className='flex flex-col justify-center items-center'>
                  <img src="https://www.horvatorszag-szallas.com/img/cities_photo/52100/1.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 w-[450px] h-[200px] object-cover' />

                  <div className='text-left px-4'>
                  <div ><span className='font-bold'>Időtartam:</span> 2-3 óra</div>
                  <div ><span className='font-bold'>Javasolt időszak:</span> egész nap</div>
                  <div ><span className='font-bold'>Parkolás:</span> kb. 1,2 - 1,6 €/óra </div>
                  </div>

                  <img src="https://utazas-nyaralas.info/horvatorszag/pula-arena-3-1000.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Amfiteátrum</div>

                  <img src="https://utazas-nyaralas.info/horvatorszag/pula-varoshaza-1000.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Augustus temploma és Városháza</div>

                  <img src="https://utazas-nyaralas.info/horvatorszag/pula-diadaliv-1000.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Sergius diadalív</div>

                  <img src="https://utazas-nyaralas.info/horvatorszag/pula-szekesegyhaz-1000.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Székesegyház</div>

                </div>
              </div>


              <div className='flex-col flex text-center mb-16 pb-10 px-3 py-3 bg-white rounded-2xl'>
                <div className='mb-5 mt-10 font-semibold text-lg text-cyan-700'>3. VÁROSNÉZÉS FAZANÁBAN</div>

                <div className='flex flex-col justify-center items-center'>
                  <img src="https://www.bestofcroatia.eu/upload_data/site_photos/fazana_39.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 w-[450px] h-[200px] object-cover' />
                    
                  <div className='text-left px-4'>
                  <div ><span className='font-bold'>Időtartam:</span> 2-3 óra</div>
                  <div ><span className='font-bold'>Javasolt időszak:</span> délután, este</div>
                  <div ><span className='font-bold'>Parkolás:</span> kb. 0,8 €/óra </div>
                  </div>

                  <img src="https://images.easyreserve.it/vacation_rentals/130458/xwide/5a56365000711ee9bec7ccdcb7235a5d"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Kavicsos tengerpart</div>

                  <img src="https://www.visit-croatia.hr/photos/destinations/thumbs/Fazana-618be00d8c2bd262244903_huge.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Kikötő</div>

                  <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/74762155.jpg?k=f575ce2457dd1678474de5fb79d554ef0e9fa5ac982328d309f3aa54b93ba7ae&o=&hp=1"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Éttermek</div>

                  <img src="https://lh3.googleusercontent.com/p/AF1QipMKSI3tlWx2JgExXMtrkTUUqaR7JQj2-UsqaHQz=s680-w680-h510-rw"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Kedvenc fagyizónk - Gelateria Leone</div>

                </div>
              </div>


              <div className='flex-col flex text-center mb-16 pb-10 px-3 py-3 bg-white rounded-2xl'>
                <div className='mb-5 mt-10 font-semibold text-lg text-cyan-700'>4. BRIJUNI NEMZETI PARK</div>

                <div className='flex flex-col justify-center items-center'>
                  <img src="https://www.parkovihrvatske.hr/EasyEdit/UserFiles/Catalog/nacionalni-park-brijuni/nacionalni-park-brijuni-638229457051566421_1600_900@2x.jpeg"
                    alt='varos'
                    className='rounded-2xl m-4 w-[450px] h-[200px] object-cover' />
                    
                  <div className='text-left px-4'>
                  <div><span className='font-bold'>Időtartam:</span> 5-6 óra</div>
                  <div><span className='font-bold'>Javasolt időszak:</span> egész nap, reggel érdemes indulni</div>
                  <div><span className='font-bold'>Parkolás:</span> Fazanában, kb. 0,8 €/óra, a szigetre hajóval lehet bejutni </div>
                  <div><span className='font-bold'>Hajójegy ára:</span> 35 €/fő </div>
                  <div><span className='font-bold'>Bérelhető jármű árak:</span></div>
                  <div>Kisvonat: 40 €/fő, Bicikli: 7 €/fő/óra , Golfkocsi: 40 €/2 fő/óra, Kismotor: 20 €/óra</div>
                  <div><span className='font-bold'>Weboldal:</span> <a href='https://www.np-brijuni.hr/en' className="underline">https://www.np-brijuni.hr/en</a> </div>
                  <div><span className='font-bold'>Éttermek:</span> sütizni és kávézni tudunk, de kevés étterem van, érdemes szendvicset, pékárut vinni </div>
                  </div>

                  <img src="https://www.lunamellistravel.hr/wp-content/uploads/2019/06/001-brijuni-003.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>A sziget körbejárható</div>

                  <img src="https://www.np-brijuni.hr/imagecache/maxsize/6f67e492-4a50-4136-93fd-89f06287a549/11-03-2019/bizantski_kastrum.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Római romok</div>

                  <img src="https://www.visit-croatia.hr/photos/destinations/thumbs/Nacionalni-park-Brijuni-603a70c8a8610279671299_big.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Állatok</div>

                  <img src="https://photo620x400.mnstatic.com/b54a7e2699ed30e280743440524298cb/brijuni-national-park.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Fasor</div>

                  <img src="https://www.croatiaweek.com/wp-content/uploads/2023/04/Brijuni_Dani-dinosaura-15-April.jpg?x97329"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Dínók és dínólábnyomok</div>

                  <img src="https://www.np-brijuni.hr/imagecache/maxsize/6f67e492-4a50-4136-93fd-89f06287a549/06-07-2020/kuca_za_brodice_2.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Kiállítás</div>

                  <img src="https://www.np-brijuni.hr/imagecache/maxsize/6f67e492-4a50-4136-93fd-89f06287a549/29-12-2018/crkva_sv_marije_brijuni_3.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Mária templom</div>

                  <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/a0/8b/8b/the-mediterranean-garden.jpg?w=1200&h=1200&s=1"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Mediterrán kert</div>

                  <img src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/305250928_2312019248954021_6212859844601438223_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=d9A-8OCYWI4Q7kNvgFaN5xE&_nc_ht=scontent-vie1-1.xx&oh=00_AYAlzEV44ML2JXAiD-QBQBgI2tpZLCeHfrprpouJakvGoA&oe=66725832"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Itt tudunk sütizni</div>

                </div>
              </div>
              
              <div className='flex-col flex text-center mb-16 pb-10 px-3 py-3 bg-white rounded-2xl'>
                <div className='mb-5 mt-10 font-semibold text-lg text-cyan-700'>5. STRANDOLÁS KAMENJAKON</div>

                <div className='flex flex-col justify-center items-center'>
                  <img src="https://www.apartments-premantura.net/images/stories/premantura/Kamenjak_Njive_2.jpg"
                    alt='kamenjak'
                    className='rounded-2xl m-4 w-[450px] h-[200px] object-cover' />
                    
                  <div className='text-left px-4'>
                  <div ><span className='font-bold'>Időtartam:</span> fél nap, egész nap</div>
                  <div ><span className='font-bold'>Belépő Kamenjak-ra:</span>  </div>
                  <div>1 napos: 15 €/autó, 3 napos: 35 €/autó, 1 hetes: 80 €/autó, gyalog ingyenes</div>
                  </div>

                  <div className='flex flex-col justify-center items-center'>
                  <img src="https://imgur.com/s3NYJhc.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 w-[400px] h-[300px] object-cover' />

                  <img src="https://img.pikbest.com/wp/202343/coastline-natural-rock-texture-along-kamenjak-in-istria-croatia_9982484.jpg!sw800"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Gyönyörű sziklás partok</div>

                  <img src="https://www.istrakayak.com/img/content-slider/cave-boat-tour.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Barlang, ahová be lehet úszni</div>

                  <img src="https://cdn.kroati.de/images/uploads/info/unterhaltung/safari-bar_kap-kamenjak/pula-kamenjak_damir-kvajo.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Safari bár</div>

                  <img src="https://www.venezialines.com/wp-content/uploads/2021/01/ISTRA-Rt-Kamenjak-DJI_0249_ACR-aleksandar-gospic-1200x675.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Portic kikötő</div>

                  <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/7c/d3/46.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Ugrálós sziklák</div>

                  <img src="https://www.horvatorszaginfo.hu/helyseg-galeria/kamenjak-felsziget/kamenjak-felsziget03.jpg"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Kilátó</div>

                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzA_9Qu9C0a-7X-3CLdkzmBb1lWYpy-mq5Q&s"
                    alt='varos'
                    className='rounded-2xl m-4 mb-2 w-[450px] h-[200px] object-cover' />

                  <div className='text-center italic'>Dínólábnyomok</div>

                </div>
              </div>


              </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;