import ButtonAriza from "../../components/ButtonAriza";
import topicR from '/results-images/topicR.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const Graduate = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 
    phone:px-2
    miniPhone:px-2
    ">
        <h1 className="
         text-5xl w-4/5 leading-normal text-center m-auto pb-12
         tablet:text-4xl
         miniTablet:text-4xl miniTablet:w-full miniTablet:font-semibold
         bigPhone:text-2xl bigPhone:w-full bigPhone:font-semibold
         phone:text-2xl phone:w-full phone:font-semibold
         miniPhone:text-xl miniphone:w-full miniPhone:font-semibold
         
        ">
        {t('Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz')}
        </h1>
        <div className="grid grid-cols-2
        miniTablet:grid-cols-1
        bigPhone:grid-cols-1
        phone:grid-cols-1
        miniPhone:grid-cols-1
        ">
            <div className="bg-white px-10 shadow-white shadow-1xl z-10
            miniTablet:px-2 miniTablet:text-center
            bigPhone:px-2 bigPhone:text-center
            phone:px-1 phone:text-center 
            miniPhone:px-1 miniPhone:text-center
            ">
                <h2 className="text-2xl font-serif w-96 pb-8
                tablet:w-92 tablet:text-xl
                miniTablet:w-full 
                bigPhone:w-full
                phone:w-full phone:text-xl 
                miniPhone:w-full miniPhone:text-lg
                ">
                {t('TOPIK academy consulting jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi')}
                </h2>
                <p className="text-lg font-serif w-80 py-4
                miniTablet:w-full
                bigPhone:w-full
                phone:w-full
                miniPhone:w-full
                ">
                {t('Ko’proq ma’lumot olish uchun bepul konsultatsiyaga yoziling!')}
                </p>
                <ButtonAriza />
            </div>
            <div className="
            miniTablet:hidden 
            phone:py-8
            miniPhone:py-6

            ">
            <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
            400: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          className='overflow-hidden'
          // onSwiper={(swiper) => console.log('Swiper 2 initialized:', swiper)}
          // onSlideChange={() => console.log('Swiper 2 slide change')}
          direction="horizontal" // Ensure it's explicitly set for clarity
        >
          {[...Array(9)].map((_, index) => (
            <SwiperSlide key={index} className='rounded'>
              <img
              className='
              bigPhone:h-[25rem] bigPhone:m-auto 
              phone:h-[25rem] phone:m-auto 
              miniPhone:h-[25rem] miniPhone:m-auto 
              ' 
              src={topicR} alt={t(`Result picture ${index + 1}`)} />
            </SwiperSlide>
          ))}
        </Swiper>

            </div>
        </div>
    </div>
  );
}

export default Graduate;
