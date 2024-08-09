import topicR from '/results-images/topicR.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Autoplay } from 'swiper/modules';
import ButtonAriza from '../../components/ButtonAriza';
import { useTranslation } from 'react-i18next';

const Results = () => {
  const { t } = useTranslation();

  return (
    <div
    id='results'
    className="py-4">
      <h1 className="text-center text-3xl pb-14
      phone:text-3xl phone:px-1
      miniPhone:text-2xl miniPhone:px-1
      ">
        {t("O’quvchilarimizning natijalari TOPIK 6 gacha")}
      </h1>

      {/* Swiper Carousel 1 - Right Scrolling */}
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          breakpoints={{
           280: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false
          }}
          speed={5000}
          className='pt-16'
          // onSwiper={(swiper) => console.log('Swiper 1 initialized:', swiper)}
          // onSlideChange={() => console.log('Swiper 1 slide change')}
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

      {/* Swiper Carousel 2 - Left Scrolling */}
      <div className='mt-20'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
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
      <div className='text-center mt-12'>
        <ButtonAriza />
      </div>
    </div>
  );
};

export default Results;
