/* eslint-disable react/jsx-no-undef */
import { useTranslation } from 'react-i18next';
import gks from '/grant-images/gks.png';

const Grant = () => {
  const { t } = useTranslation();

  return (
    <div className='p-4 
    phone:px-2
    miniPhone;px-1
    '>
      <h1 className='text-5xl text-center my-8 w-2/3 m-auto leading-normal
      tablet:text-4xl
      miniTablet:text-4xl miniTablet:w-full
      bigPhone:text-3xl bigPhone:w-full
      phone:text-3xl phone:w-full 
      miniPhone:text-2xl miniPhone:w-full
      '>
        {t('grant.title')}
      </h1>
      <div className='grid grid-cols-2
      tablet:grid-cols-1 tablet:place-items-center tablet:gap-8
      miniTablet:grid-cols-1 miniTablet:place-items-center miniTablet:gap-7 miniTablet:pr-10
      bigPhone:grid-cols-1 bigPhone:place-items-center bigPhone:gap-7
      phone:grid-cols-1 phone:place-items-center phone:gap-7
      miniPhone:grid-cols-1 miniPhone:place-items-center miniPhone:gap-7
      '>
        <div>
          <img src={gks} className='w-[35rem]
          miniDesktop:w-[30rem] miniDesktop:h-[29rem]
          bigTablet:w-[29rem] bigTablet:h-[31rem]
          tablet:w-[20rem]
          miniTablet:w-[20rem]
          bigPhone:w-[18rem] bigPhone:pr-10
          phone:w-[17rem] phone:pr-8
          miniPhone:w-[15rem] miniPhone:pr-6


          ' alt="Picture of GKS" />
        </div>
        <div className='grid grid-cols-1 gap-8
      
        '>
          <div>
            <h1 className='text-2xl font-medium pb-8'>
              {t('grant.gksTitle')}
            </h1>
            <p className='font-serif font-normal leading-7'>
              {t('grant.gksDescription')}
            </p>
          </div>
          <div>
            <h1 className='text-2xl font-medium pb-8'>
              {t('grant.gksBenefitsTitle')}
            </h1>
            <p className='font-serif font-normal leading-7'>
              {t('grant.gksBenefit1')}
            </p>
            <p className='font-serif font-normal leading-7'>
              {t('grant.gksBenefit2')}
            </p>
            <p className='font-serif font-normal leading-7'>
              {t('grant.gksBenefit3')}
            </p>
          </div>
        </div>
      </div>
      <div className='px-36 py-20 
      miniDesktop:px-24
      bigTablet:px-20
      tablet:px-12
      miniTablet:px-4
      bigPhone:px-2
      phone:px-0 phone:py-8
      miniPhone:px-1 miniPhone:py-8
      '>
        <iframe
          alt={t('grant.videoAlt')}
          
          src="https://www.youtube.com/embed/Xorok0n3Tsc?si=fOuQ43H_ph7GWUpo"
          title="YouTube video player"
          allowFullScreen
          className='
          m-auto
          w-full
          h-screen
          miniDesktop:w-[50rem]  miniDesktop:[40rem]
          bigTablet:w-[50rem] bigTablet:h-[40rem]
          tablet:w-[40rem] tablet:h-[30rem]
          miniTablet:w-[32rem] miniTablet:h-[28rem]
          bigPhone:w-[22rem] bigPhone:h-[20rem]
          phone:w-[19rem] phone:h-[17rem]
          miniPhone:w-[15rem] miniPhone:h-[13rem]
          '
        ></iframe>
      </div>
    </div>
  );
};

export default Grant;
