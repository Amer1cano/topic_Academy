/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import topic from '/public/head-images/topic.png'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import { SlMenu } from "react-icons/sl";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const language = localStorage.getItem('i18nextLng') 
    const [ismobile, setIsmobile] = useState(false)
 
    const { t, i18n} = useTranslation();
    const handleChangeSelect = (event) => {
      const selectedLanguage = event.target.value;
      i18n.changeLanguage(selectedLanguage);
      console.log(event);  
    }

    useEffect(()=>{
        const handleResize = ()=>{
          if(window.innerWidth > 280){
            setIsmobile(false)
          }
          
        }
        window.addEventListener('resize', handleResize);
        return()=>window.removeEventListener('resize', handleResize)
      },[])
    
    
    useEffect(() => {
       const handleScroll = () => {
        if (window.scrollY > 30) {
            setScroll(true)
            setIsmobile(false)
        } else {
            setScroll(false)
        }
       }
       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <div
            className={`px-8 py-2 fixed top-0 z-50 left-0 w-full ${scroll ? 'bg-white' : 'bg-transparent'}
            bigPhone:px-6 bigPhone:py-0
            phone:px-4 phone:py-0
            miniPhone:px-4 miniPhone:py-0
            `}
        >
            <div 
                className='flex items-center justify-between'
            >
                <div 
                    className='flex items-end justify-evenly gap-6'
                >
                    <a href="#head">
                        <img
                            className='w-52'
                            src={topic} alt={t('There is a picture of brend')} 
                        />
                    </a>
                    <p className='w-48
                    tablet:hidden
                    miniTablet:hidden
                    bigPhone:hidden
                    phone:hidden
                    miniPhone:hidden
                    '>
                        {t('Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi')}
                    </p>
                </div>
                <ul className='flex items-center justify-between gap-16 text-lg
                miniDesktop:gap-8
                bigTablet:gap-4
                tablet:hidden
                miniTablet:hidden
                bigPhone:hidden
                phone:hidden
                miniPhone:hidden
                '>
                    <li className='hover:underline underline-offset-8'>
                        <a href="#why">
                            {t('Nega biz')}
                        </a>
                    </li>
                    <li className='hover:underline underline-offset-8'>
                        <a href="#results">
                            {t('Natijalar')}
                        </a>
                    </li>
                    <li className='hover:underline underline-offset-8'>
                        <a href="#courses">
                            {t('Kurslar')}
                        </a>
                    </li>
                    <li className='hover:underline underline-offset-8'>
                        <a href="#faq">
                            {t('FAQ')}
                        </a>
                    </li>
                </ul>
                {
                    ismobile && (

                        <ul className={`${ismobile? "  flex flex-col w-screen absolute z-1 top-28 left-0 text-center text-white  items-center gap-2 py-6  bg-black" : "tablet:hidden "} desktop:invisible`}>
            <li className="  text-xl  hover:underline underline-offset-8 miniDesktop:text-lg tablet:text-3xl tablet:font-bold miniTablet:text-3xl">
            <a href="#why">{t('Nega biz')}</a>
            </li>
            <li className=" text-xl hover:underline underline-offset-8 miniDesktop:text-lg tablet:text-3xl tablet:font-bold miniTablet:text-3xl">
             <a href="#results">{t('Natijalar')}</a>
            </li>
            <li className=" text-xl hover:underline underline-offset-8 miniDesktop:text-lg tablet:text-3xl tablet:font-bold miniTablet:text-3xl">
            <a href="#courses">{t('Kurslar')}</a>
            </li>
            <li className=" text-xl hover:underline underline-offset-8 miniDesktop:text-lg tablet:text-3xl tablet:font-bold miniTablet:text-3xl">
            <a href="#faq">{t('FAQ')}</a>   
            </li>
            <div className='flex flex-col gap-4 items-center justify-center'>
        <select value={language} name="Lng" id="lng1" onChange={handleChangeSelect} className="text-yellow-700 border-solid border-2 text-2xl border-gray-400 rounded-lg pl-2 outline-none mt-2 
        bigPhone:text-xl
        phone:text-xl 
        miniPhone:text-lg
        ">
            <option value="uz">Uzbek</option>
            <option value="ru">Russia</option>
            <option value="en">English</option>
        </select>
        <button className="
       px-4 py-2 rounded-full 
       bg-blue-600
       hover:bg-blue-800
        miniDesktop:px-3 miniDesktop:py-1
        mr-4 ml-8
        bigPhone:px-3 bigPhone:py-1
        phone:px-3 phone:py-1
        miniPhone:px-3 miniPhone:py-1

        
         ">
            <a className="text-2xl text-white  font-bold 
            miniDesktop:text-lg 
            bigTablet:text-base
            bigPhone:text-xl
            phone:text-lg 
            miniPhone:text-base

            " href="#contact">{t('Hoziroq bog’laning')}</a>
         </button>
       </div>
        </ul>
                    )
                }
                <div>
                    <select 
                        value={language} 
                        name="Lng" 
                        id="lng" 
                        
                        onChange={handleChangeSelect} 
                        className="text-center m-auto border-solid border-2 text-xl border-gray-400 rounded-lg outline-none miniDesktop:text-lg miniDesktop:top-0 bigTablet:text-base tablet:hidden miniTablet:hidden bigPhone:hidden phone:hidden miniPhone:hidden"
                    >
                        <option value="uz">Uzbek</option>
                        <option value="ru">Russia</option>
                        <option value="en">English</option>
                    </select>
                </div>
                <button className='flex items-center flex-col text-lg
                miniDesktop:text-xs 
                bigTablet:text-xs
                tablet:invisible
                miniTablet:invisible
                bigPhone:invisible
                phone:invisible
                miniPhone:invisible
                '>
                    <a className='font-bold' href="#contact">
                        {t('+998 33 306 0098')}
                    </a>
                    <a href="#contact">
                        {t('Hoziroq bog’laning')}
                    </a>
                </button>
                <button  className={`invisible text-right text-4xl ml-8 
                        tablet:visible
                        miniTablet:visible 
                        bigPhone:visible 
                        phone:visible 
                        miniPhone:visible
                        phone:text-3xl phone:pb-2
                        miniPhone:text-3xl miniPhone:pb-2
         `}
        onClick={() =>{
            setIsmobile(!ismobile)
        }}>
            {ismobile ? (<FaXmark />) : (
            <SlMenu />
            )}
        </button>
            </div>
        </div>
    )
}

export default Navbar
