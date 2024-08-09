import { useTranslation } from "react-i18next"


const ButtonCourse = () => {
  const {t} = useTranslation();
  return (
    <div className="ml-6
    bigPhone:ml-4
    phone:ml-2
    miniPhone:ml-1
    ">
        <button className="px-2 py-1
    bg-button text-white rounded-full hover:text-gray-200
    bigPhone:px-1
    phone:px-1
    miniPhone:px-1 miniPhone:rounded-xl
    ">
            <a
            className="text-base font-medium
            bigPhone:font-normal
            phone:font-normal phone:text-sm
            miniPhone:font-normal miniPhone:text-[12px]

            "
             href="#contact">
               {t('Davomiyligi 5 oy')} 
            </a>
        </button>
    </div>
  )
}

export default ButtonCourse