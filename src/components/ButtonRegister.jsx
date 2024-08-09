import { useTranslation } from "react-i18next"


const ButtonRegister = () => {
  const {t} = useTranslation();
  return (
    <div>
        <button className="px-4 py-3
         bg-button text-white rounded-full hover:text-gray-200
         bigPhone:px-2 bigPhone:py-2
         phone:px-2 phone:py-2
         miniPhone:px-1 miniPhone:py-1 miniPhone:rounded-xl
    ">
            <a
            className="text-xl font-medium
            bigPhone:text-base
            phone:text-sm phone:font-normal
            miniPhone:sm miniPhone:font-thin
            "
             href="#contact">
                {t('ROYXATDAN OTISH')}
            </a>
        </button>
    </div>
  )
}

export default ButtonRegister