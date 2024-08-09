import brendLogo from '/footer-images/brend_logo.png';
import { FaPhone } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Foot = () => {
    const { t } = useTranslation();
    const myPhoneNumber = '+998907678424';
  
    return (
        <div className='bg-black'>
            <div className='grid grid-cols-3 text-center m-auto px-32 py-4 bg-black text-white
            tablet:px-2
            miniTablet:px-10 miniTablet:place-items-center
            bigPhone:px-6 bigPhone:place-items-center
            phone:px-1 phone:place-items-center
            miniPhone:px-1 miniPhone:place-items-center
            '>
                <div>
                    <img className='w-24
                    tablet:ml-10
                    miniTablet:ml-8 
                    bigPhone:ml-8
                    phone:ml-4 phone:w-20
                    miniPhone:ml-2 miniPhone:w-20
                    ' src={brendLogo} alt={t("Brend logo")} />
                </div>
                <div>
                    <ul className='flex items-end justify-between pt-20
                    miniTablet:flex-col   miniTablet:pt-4
                    bigPhone:flex-col bigPhone:pt-4
                    phone:flex-col phone:pt-4
                    miniPhone:flex-col miniPhone:pt-2
                    '>
                        <li className='hover:underline underline-offset-8 font-serif text-lg'>
                            <a href="#why">{t("Nega biz")}</a>
                        </li>
                        <li className='hover:underline underline-offset-8 font-serif text-lg'>
                            <a href="#results">{t("Natijalar")}</a>
                        </li>
                        <li className='hover:underline underline-offset-8 font-serif text-lg'>
                            <a href="#courses">{t("Kurslar")}</a>
                        </li>
                        <li className='hover:underline underline-offset-8 font-serif text-lg'>
                            <a href="#faq">{t("FAQ")}</a>
                        </li>
                    </ul>
                </div>
                <div className='pt-20
                 miniTablet:flex miniTablet:flex-col miniTablet:items-center miniTablet:gap-2 miniTablet:pt-4 
                bigPhone:flex bigPhone:flex-col bigPhone:items-center bigPhone:gap-2 bigPhone:pt-4
                phone:flex phone:flex-col phone:items-center phone:gap-2 phone:pt-4
                miniPhone:flex miniPhone:flex-col miniPhone:items-center miniPhone:gap-2 miniPhone:pt-4
                '>
                    <button className='ml-4 text-xl hover:text-green-500'>
                        <a href={`tel:${myPhoneNumber}`}>
                            <FaPhone />
                        </a>
                    </button>
                    <button className='ml-4 text-xl hover:text-blue-500'>
                        <a href="https://t.me/maqsudbek_3979" target="_blank" rel="noopener noreferrer">
                            <BiLogoTelegram />
                        </a>
                    </button>
                    <button className='ml-4 text-xl hover:text-red-500'>
                        <a href="https://www.instagram.com/maqsudbek_3979" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </button>
                    <button className='ml-4 text-xl hover:text-red-500'>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </button>
                </div>
            </div>
            <div className='text-xl pb-4 w-56 m-auto'>
                <h1 className='text-gray-800 text-center hover:underline underline-offset-8'>
                    {t("Made by Maqsudbek")}
                </h1>
            </div>
        </div>
    );
};

export default Foot;
