import { useTranslation } from 'react-i18next'
import ButtonAriza from '../../components/ButtonAriza'
import leave from '/head-images/leave.png'

const Head = () => {
    const {t} = useTranslation();
  return (
    <div
      id='head'
      className="
      bg-building  bg-right bg-no-repeat bg-960 pb-32 pt-4 mt-28
      miniDesktop:bg-640 
      bigTablet:bg-640
      tablet:bg-[length:420px_400px] tablet:bg-right-top
      miniTablet:bg-[length:420px_410px] miniTablet:bg-right-bottom
      bigPhone:bg-none 
      phone:bg-none phone:mt-20 phone:pb-16
      miniPhone:bg-none miniPhone:mt-14 miniPhone:pb-10
      "
    >
      <div className="
      px-8
      phone:px-4
      miniPhone:px-2
      ">

        <div
          className="
          flex items-center gap-4 pt-6
          phone:gap-3
          miniPhone:gap-2
          ">
          <div
            className="
            bg-green-400 w-8 h-0.5
            phone:w-4
            miniPhone:w-2
            "
          ></div>
          <span className='
          phone:text-sm
          miniPhone:text-sm
          '>
            {t('3 oyda Koreys tilida gapirishni boshlang')}
          </span>
        </div>

        <h1 className='
        text-6xl w-2/3 leading-normal pb-2
        miniDesktop:text-5xl
        bigTablet:text-5xl
        tablet:text-5xl tablet:py-4 tablet:font-thin
        miniTablet:text-3xl miniTablet:w-full miniTablet:py-4
        bigPhone:text-2xl bigPhone:w-full bigPhone:py-3 bigPhone:font-semibold
        phone:text-xl phone:w-full phone:py-2 phone:font-semibold
        miniPhone:text-lg miniPhone:w-full miniPhone:py-2 miniPhone:font-semibold
        '>
          {t('Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati')}
        </h1>

        <div className='
        flex items-center pb-4
        miniTablet:items-start miniTablet:gap-8 miniTablet:flex-col-reverse
        bigPhone:items-start bigPhone:gap-8 bigPhone:flex-col-reverse
        phone:items-start phone:gap-8 phone:flex-col-reverse
        miniPhone:items-start miniPhone:gap-8 miniPhone:flex-col-reverse
        
        '>
          <span 
            className='flex items-center w-52 gap-4
            bigTablet:w-48
            phone:w-full
            miniPhone:w-full
            
            '
          >
            <img 
              className='w-12 h-12
              phone:w-6
              miniPhone:w-4
              '
              src={leave} alt={t('There is a picture of leave')} />
            <h2>{t('5 oyda Topikdan 6 darajagacha olishda yordam beramiz')}</h2>
          </span>
          <span 
            className='flex items-center w-72 gap-4
            bigTablet:w-64
            phone:w-full
            '
          >
            <img 
              className='w-12 h-12
              phone:w-6
              miniPhone:w-4
              '
              src={leave} alt={t('There is a picture of leave')} />
            <h2>
              {t('Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati')}
            </h2>
          </span>
        </div>
        <span className="miniTablet:mt-20
        bigPhone:m-auto bigPhone:text-center
        ">
          <ButtonAriza 
          
          />
          <p >{t('Birinchi darsga bepul yoziling!')}</p>
        </span>

      </div>
    </div>
  )
}

export default Head
