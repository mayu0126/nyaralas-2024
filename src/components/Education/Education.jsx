import { React, useState, useEffect } from 'react';

const Education = ({id}) => {

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
    <div id={id} className={`${isNarrowScreen ? "flex-col" : "max-h-fit"} flex justify-center items-center text-center bg-slate-100`}>
      
      <div className='mt-20 mb-20 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 px-2 py-2 lg:mr-20 text-slate-900'>
        <div>
          <div className={`${isNarrowScreen ? "" : "ml-5"} mb-10 font-bold text-2xl lg:text-3xl xl:text-4xl text-cyan-700`}>ÉTTERMEK</div>

          <div className='flex-col flex justify-center items-center text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-bold text-lg text-slate-900'>1. RESTAURANT PREMANTURA {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <a href="https://cdn.qr-code-generator.com/account18899035/45516080_1.pdf?Expires=1718391952&Signature=o6y54ilFjxnY~Cy~q7SVuGdnIcIA757t~FR6Fb44sf~kZhCgCxWGMCts5NMsN61gccvSjLPdIBZTIAI8FK1XawbyROTrFYdEjZRR0jJWyleUZQzNQRBF5KJMIwsouQtpxfH9~HdcmFq8kgFZTo1IwNqhL0o~VucZ9BsQAyuyEUkY0VbjNJMEwtACLrxC0v-VlZahRJEG-LuCv0JE3HEQbTmzhi~omhWfLXi31Ddk4DII2o1xDxgrVobsHyY~MTYprc04FBwSuBG22ha35r70ikwQ2CONKhkxBvZ~RNH7yQN43mtSyDA9RzbLwdmFkB1GNXLA0Oojym8H3FrzFyba9g__&Key-Pair-Id=KKMPOJU8AYATR" className="underline">
              <div className="font-semibold text-lg text-cyan-700 mb-4">
                menü letöltése
              </div>
            </a>

            <img src="https://lh3.googleusercontent.com/p/AF1QipPcc8KeUjKjcXt_EIX_RU5VirSQS0ku1IRwY9fO=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipO03vcP2eF4vQTlrTuQaUVzOlURq0N7f-Ua7O0B=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipOmITZJxuyhVKBHQkvcbkBeOZ1WCaC5AGWq3hH1=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipN3AA6YfPLx0_jBwREtLaI0iihwGf2iwWipZc6S=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipPO1QoAtW-vSwN5vYhqVlv49isLwzIusTrlIrH3=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipOrbmFkQiCH5Fjo_qpYCn_sCO_FYlMXCcOsWKQL=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />
          </div>

          <div className='flex-col flex justify-center items-center text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-bold text-lg text-slate-900'>2. KONOBA CASA MIA {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <a href="https://cdn.website.dish.co/media/03/fe/7996360/Menu-1.pdf" class="underline">
              <div class="font-semibold text-lg text-cyan-700 mb-4">
                menü letöltése
              </div>
            </a>

            <a href="https://konoba-casa-mia.eatbu.hr/?lang=hu" class="underline">
              <div class="font-semibold text-lg text-cyan-700 mb-4">
                weboldal
              </div>
            </a>

            <img src="https://lh3.googleusercontent.com/p/AF1QipOnhxbvgHv422cufMEKoP1SQbTeDOrcXOh3B8um=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl w-[450px] h-[200px] object-cover' />

            <img src="https://cdn.website.dish.co/media/4e/d2/1083489/Konoba-Casa-mia-biftek-2-o-InPixio.jpg"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipNOlkxcTPP0CAA8tC-gyvg4i2j9QGYlcHPzmotg=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipNubGzN618B8NguYmVRDbjfYF8tw7m_7GqTP3fW=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipN6UJfVVonTDUE83-jgf_KIvFuNDVzln1L5TSpq=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipMartzLOJizkPOAhwSciFKRU3vB7m0zdQ-ApBgS=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />
          </div>


          <div className='flex-col flex justify-center items-center text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-bold text-lg text-slate-900'>3. KONOBA ANCORA {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            
            <div className='flex justify-center items-center space-x-4 text-center'>
              <a href="https://lh3.googleusercontent.com/p/AF1QipOkWOwbuQzoh7_Di7wOKRwMTaQjYy3jYyD1PLFV=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 1.
                </div>
              </a>
              <a href="https://lh3.googleusercontent.com/p/AF1QipN960WuUYdbDH4Of_EsyJ3l1kv487_gc-M-MGGf=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 2.
                </div>
              </a>
              <a href="https://lh3.googleusercontent.com/p/AF1QipMl9W8qiN5MaxMoAJojWrPGQTOI2slwpVTejP4P=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 3.
                </div>
              </a>
            </div>

            <div className='flex justify-center items-center space-x-4 text-center -mt-4'>
              <a href="https://lh3.googleusercontent.com/p/AF1QipOHdkVe46WZr38WBjtW-3SD0T_jR9XkglakBDsP=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 4.
                </div>
              </a>
              <a href="https://lh3.googleusercontent.com/p/AF1QipOsSeckfD5Ztach18yJ1ngmNgdty1Ll1sYBUeTM=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 5.
                </div>
              </a>
              <a href="https://lh3.googleusercontent.com/p/AF1QipNS4DQfTZinVygcWj05anWNEzaMPkEv-vXhlhPK=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 6.
                </div>
              </a>
            </div>

            <a href="https://www.tripadvisor.com/Restaurant_Review-g1077169-d3564919-Reviews-Konoba_Ancora-Premantura_Istria.html" class="underline">
              <div class="font-semibold text-lg text-cyan-700 mb-4">
                weboldal
              </div>
            </a>

            <img src="https://lh3.googleusercontent.com/p/AF1QipPx2UW-0Em9F8hTCQaCzOTXEGNDr7IOxbXgW2Uc=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipONt5pAKzwbTU8PpG_cPjalhy_p9EAEBR4OE-AE=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipMI_nbTpTvJr8_6ufXnv0-NbmL-IpVzJrDJf6-9=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipM6w7ikdhkPPLGGtvFeLUHhb9B5VoduGWmYwY7e=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipOSKQhCyY26oFjQ6vaeK5EsasXUdkKKlN5HqIuY=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipNb_e_b_mfPYBW0bpTQpQwdhDfqVX-fhQiTy7PS=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />
          </div>


          <div className='flex-col flex justify-center items-center text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-bold text-lg text-slate-900'>4. RESTORAN PIZZERIA KAMENJAK {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            
            <div className='flex justify-center items-center space-x-4 text-center'>
              <a href="https://lh3.googleusercontent.com/p/AF1QipMc1_lwlL5kCG4U1tBl4Ed31HQIET1tGqpmM-Jw=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 1.
                </div>
              </a>
              <a href="https://lh3.googleusercontent.com/p/AF1QipOufr8Etsh-g13jT0ZvnNSaZwWYy0c435z_D1ai=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 2.
                </div>
              </a>
              <a href="https://lh3.googleusercontent.com/p/AF1QipP-643Y3oaqXrcFELABSU3yWqL09YFvez9AsAin=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 3.
                </div>
              </a>
            </div>

            <img src="https://lh3.googleusercontent.com/p/AF1QipO56xjao9RX_qPdFfpvvfs-W2tYcCs8WjE-n9Wz=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipMyBLjGBCiKRlcTELWWLC4sj-xIiTivsIPcv2gJ=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipN8pW1gmT0A0g4bLfRgCPRFntxwxE3qehQGZ6Jc=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipNMsAJ6hSGiHXchDe41AjODMa5Yf7yQDlGNoDCs=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipPpTFLH4O9MPHtvCkh_rIMPJ2P0JTP95QGqylmD=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipOTR4nBkxcmdsEzsBvsh6uRW9cbBdafXsdw4_Ui=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />
          </div>


          <div className='flex-col flex justify-center items-center text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-bold text-lg text-slate-900'>5. IVONA BAHAMA - STEAK HOUSE {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            
            <div className='flex justify-center items-center space-x-4 text-center'>
              <a href="https://lh3.googleusercontent.com/p/AF1QipPNPd-UuQQq6crncH46YWgHR4AL1oZVciZnLaUU=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 1.
                </div>
              </a>
              <a href="https://lh3.googleusercontent.com/p/AF1QipMkdp2jfGIr1jVGFVJzpZmrWUu8UDLI43TcXZr6=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 2.
                </div>
              </a>
              <a href="https://lh3.googleusercontent.com/p/AF1QipOHOo7Lt6oeH3JJmudBWHcr7SGzqdjlnQQUpHiz=s680-w680-h510-rw" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü 3.
                </div>
              </a>
            </div>

            <img src="https://lh3.googleusercontent.com/p/AF1QipN-L7TrwzNYRWLmVU5Stiig2iS3FOoANjN-GLsG=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipNpaqoDDll0ms6r3byEwOuzRzSUI4a7B_ddMwjE=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipPyQ_RxAv7Fr-vz4DMZfmjwcb-ipd6r4faHx80o=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipMeY5H0oQWr4CavtbGHMYWMysK2Kb76IkTCYIIh=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipOeTmrdciDJueIbtgo5Acf6htJttKlmHsSmbddw=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipOdqzb-QSyVegFkw8aKyeI8sP6XHx0P1PL8TbaP=s680-w680-h510-rw"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />
          </div>


          <div className='flex-col flex justify-center items-center text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-bold text-lg text-slate-900'>6. SAFARI BAR {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div class="font-semibold text-lg text-cyan-700 mb-4">
                  Étkezési lehetőség a strandon
            </div>


            <img src="https://lh3.googleusercontent.com/p/AF1QipMwFhMf1QP635MEOKAbIFPNRL5M4oQumsGSrwgL=s680-w680-h510"
              alt='etterem-1'
              className='rounded-2xl w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipNHEgxZB4LZeeWdCi7DQV-PJ_w5KWRZTXHax02T=s680-w680-h510"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipMkjDmh9crDfhnvinj50geMK-aXoxoSx1K5Gz6Y=s680-w680-h510"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipMXCfcpRWSfySuWh_9jdK-9UAAFgcmFoLvzP1or=s680-w680-h510"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipPyq1P39LpRMn1L9k86pWUV-sLBNSWMjfDM_b1n=s680-w680-h510"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />
          </div>

          <div className='flex-col flex justify-center items-center text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-bold text-lg text-slate-900'>7. PORTICH BEACH BAR {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div class="font-semibold text-lg text-cyan-700 mb-4">
                  Étkezési lehetőség a strandon
                  <a href="https://lh3.googleusercontent.com/p/AF1QipP9YpE20i1dMkKMTST-d2urkNCdhcCV2GG5SPlB=s680-w680-h510" class="underline">
                <div class="font-semibold text-lg text-cyan-700 mb-4">
                  menü
                </div>
              </a>
            </div>
            <img src="https://lh3.googleusercontent.com/p/AF1QipOzk1f_lbrh-pa94nP-FJB3WpcTvn1aJhtFaI0j=s680-w680-h510"
              alt='etterem-1'
              className='rounded-2xl w-[450px] h-[200px] object-cover' />
            <img src="https://lh3.googleusercontent.com/p/AF1QipMrUD5WGVyJaFVPwXbB7Z64caaAZq5eUrsRhlLK=s680-w680-h510"
              alt='etterem-1'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipNzhF8jrhyVvLAwQFDcP1iVUUFBXvMSA5BknK9S=s680-w680-h510"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipMM9-ByiHyGLugCC2_UHR_5n9KkUTIAaF8avjN2=s680-w680-h510"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipMxAvncfpUJpn-hwGR71iJnyC25-vtIu_wP0oKv=s680-w680-h510"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipMsR3Jws1ZVxg7UN6kboEnBR1KgVn_JAvDZN-Jk=s680-w680-h510"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipOuGI_dLuKB7IfKPLQy1OF1FS-JyKlji8eFJ1C6=s680-w680-h510"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />
          </div>


          <div className='flex-col flex justify-center items-center text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-bold text-lg text-slate-900'>8. NJIVE BEACH BAR {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div class="font-semibold text-lg text-cyan-700 mb-4">
                  Étkezési lehetőség a strandon
            </div>
            <img src="https://lh3.googleusercontent.com/p/AF1QipO1EvUDNbrFudC7zxBTew5ysOMxavE7zI2h091i=s680-w680-h510"
              alt='etterem-1'
              className='rounded-2xl w-[450px] h-[200px] object-cover' />
            <img src="https://lh3.googleusercontent.com/p/AF1QipOZEagvoN0uyL2ksySZu912Gtjh0yJhtXMJ-I1y=s680-w680-h510"
              alt='etterem-1'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipMLQftfpmCHmb410lJEaY2gQ6iNdup_LE_704Ia=s680-w680-h510"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

            <img src="https://lh3.googleusercontent.com/p/AF1QipOeZBYb5K0TxAbORyUgrZ_AEAqTJcfahbHPOj04=s680-w680-h510"
              alt='etel'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

          </div>

          <div className='flex-col flex justify-center items-center text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-bold text-lg text-slate-900'>9. PÉKSÉGEK {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div class="font-semibold text-lg text-cyan-700 mb-4">
                  Több pékség is van a városban
            </div>
            <img src="https://lh3.googleusercontent.com/p/AF1QipMG8SvPYH-j5AbNJOD-qakCIJHna99jggnhzgGQ=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl w-[450px] h-[200px] object-cover' />
            <img src="https://lh3.googleusercontent.com/p/AF1QipMnHumwBVTcOsp5ADIEAleaO-RL61Vwk9_6z9tS=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

          </div>

          <div className='flex-col flex justify-center items-center text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-bold text-lg text-slate-900'>10. "A ROMA" FAGYIZÓ {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div class="font-semibold text-lg text-cyan-700 mb-4">
                  Több fagyizó is van, de szerintünk ez a legjobb :)
            </div>
            <img src="https://lh3.googleusercontent.com/p/AF1QipM1oIvHBKrVWPupXue2YkCZHYilWkYp3VoeeiJ-=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl w-[450px] h-[200px] object-cover' />
            <img src="https://lh3.googleusercontent.com/p/AF1QipOhZe5zSDQXujWy45QFiuX1ffb8idvuXdXuv7hR=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />
            <img src="https://lh3.googleusercontent.com/p/AF1QipNHqbT1yziJHL3dnldiBMNa-fQ0kJ5Kya5K71hU=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />
            <img src="https://lh3.googleusercontent.com/p/AF1QipN6RbrVvwnmzWuVJXPR8-rlX4KcBQYo6fjClnK9=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

          </div>

          <div className='flex-col flex justify-center items-center text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-bold text-lg text-slate-900'>11. GELATERIA VALENTINO FAGYIZÓ {isNarrowScreen ? <br/> : ""} <span className='font-bold'>-</span></div>
            <div class="font-semibold text-lg text-cyan-700 mb-4">
                  Itt a fagyik nem néznek ki jól, csak a fagyikelyhek :D
            </div>
            <img src="https://lh3.googleusercontent.com/p/AF1QipOf_CLwK7kizVi0bHJeo1VREppLY5wos2CXaGyX=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl w-[450px] h-[200px] object-cover' />
            <img src="https://lh3.googleusercontent.com/p/AF1QipOqgPCwZSX7_yXVQ2mv-JZpWqCF2tMKYJb9ioHi=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />
            <img src="https://lh3.googleusercontent.com/p/AF1QipP-qN5P5s_H_kBItCflLNbL2QhUiM0cpGNNmIfV=s680-w680-h510-rw"
              alt='etterem-1'
              className='rounded-2xl mt-4 w-[450px] h-[200px] object-cover' />

          </div>


        </div>
      </div>
    </div>
  );
};

export default Education;