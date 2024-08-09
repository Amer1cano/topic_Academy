import { useTranslation } from "react-i18next"


const ButtonAriza = () => {
  const {t} = useTranslation();
  return (
    <div>
        <button className="px-7 py-3
    bg-button text-white rounded-full hover:text-gray-200

    miniTablet:px-5 miniTablet:py-2
    bigPhone:px-5 bigPhone:py-2
    phone:px-3 phone:py-1
    miniPhone:px-2 miniPhone:py-1
    ">
            <a
            className="text-2xl font-medium
            phone:text-xl
            miniPhone:text-xl
            "
             href="#contact">
                {t('Ariza Qoldirish')}
            </a>
        </button>
    </div>
  )
}

export default ButtonAriza