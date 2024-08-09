import comment from '/section1-images/comment.png';
import rocket from '/section1-images/rocket.png';
import money from '/section1-images/money.png';
import travel from '/section1-images/travel.png';
import target from '/section1-images/target.png';
import key from '/section1-images/key.png';
import { useTranslation } from 'react-i18next';

const Secttion1 = () => {
  const { t } = useTranslation();

  return (
    <div className='p-8
    bigPhone:pt-2
    phone:py-1 phone:px-2
    miniPhone:py-2 miniPhone:px-2
    '>
        <h1 className='text-center pb-10 text-4xl 
        phone:text-3xl
        miniPhone:text-3xl
        '>
            {t("TOPIK academy aniq siz uchun agar siz:")}
        </h1>
        <div className='grid grid-cols-3 gap-16 pl-20
        bigTablet:pl-4
        tablet:pl-0
        tablet:gap-1
        miniTablet:grid-cols-2 miniTablet:pl-0 miniTablet:gap-6
        bigPhone:grid-cols-1 bigPhone:pl-0 bigPhone:gap-8 bigPhone:place-items-center
        phone:grid-cols-1 phone:pl-0 phone:gap-8 phone:place-items-center
        miniPhone:grid-cols-1 miniPhone:pl-0 miniPhone:gap-8 miniPhone:place-items-center
        '>
            <div className='w-60 text-center'>
                <div className='bg-section w-40 p-4 rounded-full m-auto'>
                    <img 
                        className='w-36 m-auto'
                        src={comment} alt={t("Comment picture")} 
                    />
                </div>
                <h1 className='pt-4 text-xl'>
                    {t("Qisqa muddat ichida Koreys tilida gapirishni istaysiz")}
                </h1>
            </div>

            <div className='w-60 text-center'>
                <div className='bg-section w-40 p-4 rounded-full m-auto'>
                    <img 
                        className='w-36 m-auto'
                        src={rocket} alt={t("Rocket picture")} 
                    />
                </div>
                <h1 className='pt-4 text-xl'>
                    {t("Koreys tili o’rganib o’z karyerangizni qurmoqchisiz")}
                </h1>
            </div>

            <div className='w-60 text-center'>
                <div className='bg-section w-40 p-4 rounded-full m-auto'>
                    <img 
                        className='w-36 m-auto'
                        src={money} alt={t("Money picture")} 
                    />
                </div>
                <h1 className='pt-4 text-xl'>
                    {t("Topik sertifikatini olib Koreyaning nufuzli universitetlariga GRANT yutmoqchisiz")}
                </h1>
            </div>

            <div className='w-60 text-center'>
                <div className='bg-section w-40 p-4 rounded-full m-auto'>
                    <img 
                        className='w-36 m-auto'
                        src={travel} alt={t("Travel picture")} 
                    />
                </div>
                <h1 className='pt-4 text-xl'>
                    {t("Janubiy Koreya davlatida o’qish va ishlash uchun ketmoqchisiz")}
                </h1>
            </div>

            <div className='w-60 text-center'>
                <div className='bg-section w-40 p-4 rounded-full m-auto'>
                    <img 
                        className='w-36 m-auto'
                        src={target} alt={t("Target picture")} 
                    />
                </div>
                <h1 className='pt-4 text-xl'>
                    {t("Koreys tilini o’rta darajda bilasiz va darajangizni oshirmoqchisiz")}
                </h1>
            </div>

            <div className='w-60 text-center'>
                <div className='bg-section w-40 p-4 rounded-full m-auto'>
                    <img 
                        className='w-36 m-auto'
                        src={key} alt={t("Key picture")} 
                    />
                </div>
                <h1 className='pt-4 text-xl'>
                    {t("Ko’p yillardan buyon o’qib ham natijaga chiqa olmayapsiz")}
                </h1>
            </div>
        </div>
        <div className='text-center py-8'>
            <button className="px-6 py-2 mt-12 bg-button text-white rounded-full hover:text-yellow-200">
                <a className="text-5xl font-medium
                bigPhone:text-4xl
                phone:text-3xl
                miniPhone:text-2xl
                " href="#contact">
                    {t("HA, BU MEN")}
                </a>
            </button>
        </div>
    </div>
  );
}

export default Secttion1;
