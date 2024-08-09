import ButtonCourse from '../../components/ButtonCourse';
import ButtonRegister from '../../components/ButtonRegister';
import intensive from '/courses-images/intensive.png';
import regular from '/courses-images/regular.png';
import individual from '/courses-images/individual.png';
import { useTranslation } from 'react-i18next';

const Courses = () => {
  const { t } = useTranslation();

  return (
    <div id='courses' className='overflow-hidden'>
        <h1 className='text-center text-4xl font-serif py-12
        miniPhone:text-3xl
        '>
        {t('O’zingizga mos kursga ro’yxatdan o’ting')}
        </h1>
        <div className='grid grid-cols-3 gap-8 px-4
        miniDesktop:grid-cols-2
        bigTablet:grid-cols-1 bigTablet:px-64
        tablet:grid-cols-1 tablet:px-44
        miniTablet:grid-cols-1 miniTablet:px-20
        bigPhone:grid-cols-1 bigPhone:px-4
        phone:grid-cols-1 phone:px-2
        miniPhone:grid-cols-1 miniPhone:px-1
        '>
            <div 
            data-aos="fade-right"
            data-aos-duration="6000"
             className='bg-gray-100 rounded-xl px-4 
             phone:px-1
             miniPhone:px-1
             '>
                <img className='w-full h-56' src={intensive} alt="Building picture" />
                <span className='grid grid-cols-2 py-6 px-4'>
                    <h1 className='font-medium text-3xl 
                    miniPhone:text-2xl miniPhone:px-0
                    '>{t('Intensive')}</h1>
                    <ButtonCourse/>
                </span>
                <p className='text-lg 
                phone:text-base
                miniPhone:text-sm
                miniPhone:w-full miniPhone:px-2
                w-80 px-4'>
                {t('Koreys tilini chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.')}
                </p>
                <span className='flex items-center justify-between px-4 py-4 '>
                    <ButtonRegister/>
                    <p className='text-teal-400 font-bold
                    miniPhone:font-normal miniPhone:text-sm
                    '>{t('770.000 so’m /oy')}</p>
                </span>
            </div>

            <div
             data-aos="fade-up"
            data-aos-duration="6000"
             className='bg-gray-100  rounded-xl px-4
             phone:px-1
             miniPhone:px-1

             '>
                <img className='w-full h-56' src={regular} alt="Building picture" />
                <span className='grid grid-cols-2 py-6 px-4 miniPhone:px-2'>
                    <h1 className='font-medium text-3xl 
                    miniPhone:text-2xl
                    miniPhone:px-1
                    '>{t('Regular')}</h1>
                    <ButtonCourse/>
                </span>
                <p className='text-lg 
                phone:text-base
                miniPhone:text-sm
                miniPhone:w-full miniPhone:px-2
                w-80 px-4'>
                {t('Koreys tilini yaxshi o’zlashtirmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan odatiy kurs.')}
                </p>
                <span className='flex items-center justify-between px-4 py-4 
                miniPhone:px-2
                '>
                    <ButtonRegister/>
                    <p className='text-teal-400 font-bold
                    miniPhone:font-normal miniPhone:text-sm
                    '>{t('560.000 so’m /oy')}</p>
                </span>
            </div>

            <div 
            data-aos="fade-left"
            data-aos-duration="6000"
            className='bg-gray-100  rounded-xl px-4
            phone:px-1
            miniPhone:px-1
            '>
                <img className='w-full h-56' src={individual} alt="Building picture" />
                <span className='grid grid-cols-2 py-6 px-4'>
                    <h1 className='font-medium text-3xl 
                    miniPhone:text-2xl  miniPhone:px-0
                    '>{t('Individual')}</h1>
                    <ButtonCourse/>
                </span>
                <p className='text-lg 
                phone:text-base
                miniPhone:text-sm
                miniPhone:w-full miniPhone:px-2
                w-80 px-4'>
                {t('Koreys tilini chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan individual kurs.')}
                </p>
                <span className='flex items-center justify-between px-4 py-4 miniPhone:px-2 '>
                    <ButtonRegister/>
                    <p className='text-teal-400 font-bold
                    miniPhone:font-normal miniPhone:text-sm
                    '>{t('970.000 so’m /oy')}</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Courses;
