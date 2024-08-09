import { useTranslation } from 'react-i18next';

const Why = () => {
  const { t } = useTranslation();

  return (
    <div id="why" className="p-4
    phone:px-2
    miniPhone:px-2
    ">
        <h1 className="text-center text-5xl my-12 py-12
        bigPhone:text-4xl
        phone:text-3xl phone:py-6
        miniPhone:text-3xl miniPhone:py-6
        ">
            {t("Nima uchun aynan TOPIK academy?")}
        </h1>
        <div className="grid grid-cols-3 gap-20 px-20 
        miniDesktop:gap-8 miniDesktop:px-8
        bigTablet:grid-cols-2
        tablet:grid-cols-2 tablet:px-6
        miniTablet:grid-cols-1 miniTablet:px-20
        bigPhone:grid-cols-1 bigPhone:px-8
        phone:grid-cols-1 phone:px-4
        miniPhone:grid-cols-1 miniPhone:px-1
        ">
            <div className="bg-white px-6 py-6 border-solid border-2 border-gray-100 shadow-0xl rounded-2xl transition-transform duration-700 hover:scale-105">
                <button className="py-3 px-2 rounded-xl bg-teal-500 text-white font-bold text-5xl mt-[-10rem]">
                    <a href="#contact">01</a>
                </button>
                <h1 className="text-xl mt-4 font-medium">
                    {t("Professional ustozlar")}
                </h1>
                <p className="text-base mt-8 font-serif">
                    {t("Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi")}
                </p>
            </div>

            <div className="bg-white px-6 py-6 border-solid border-2 border-gray-100 shadow-0xl rounded-2xl transition-transform duration-700 hover:scale-105">
                <button className="py-3 px-2 rounded-xl bg-teal-500 text-white font-bold text-5xl mt-[-10rem]">
                    <a href="#contact">02</a>
                </button>
                <h1 className="text-xl mt-4 font-medium">
                    {t("Bepul coworking zonalari")}
                </h1>
                <p className="text-base mt-8 font-serif">
                    {t("Erkin dars qilish, netvorking va o’z ustingizda ishlash uchun bepul coworking zonalarimiz mavjud")}
                </p>
            </div>

         <div className="bg-white px-6 py-6 border-solid border-2 border-gray-100 shadow-0xl rounded-2xl transition-transform duration-700 hover:scale-105">
                <button className="py-3 px-2 rounded-xl bg-teal-500 text-white font-bold text-5xl mt-[-10rem]">
                    <a href="#contact">03</a>
                </button>
                <h1 className="text-xl mt-4 font-medium">
                    {t("Haftalik tadbirlar")}
                </h1>
                <p className="text-base mt-8 font-serif">
                    {t("TOPIK academy jamoasi o’quvchilari uchun doimiy ravishda qo’shimcha tadbirlar tashkil etadi")}
                </p>
            </div>

            <div className="bg-white px-6 py-6 border-solid border-2 border-gray-100 shadow-0xl rounded-2xl transition-transform duration-700 hover:scale-105">
                <button className="py-3 px-2 rounded-xl bg-teal-500 text-white font-bold text-5xl mt-[-10rem]">
                    <a href="#contact">04</a>
                </button>
                <h1 className="text-xl mt-4 font-medium">
                    {t("Bepul sinov imtihonlari")}
                </h1>
                <p className="text-base mt-8 font-serif">
                    {t("Har davomida tashkil etiladigan sinov imtihonlarida qatnashib o’z darajangizni bilib borasiz")}
                </p>
            </div>

            <div className="bg-white px-6 py-6 border-solid border-2 border-gray-100 shadow-0xl rounded-2xl transition-transform duration-700 hover:scale-105">
                <button className="py-3 px-2 rounded-xl bg-teal-500 text-white font-bold text-5xl mt-[-10rem]">
                    <a href="#contact">05</a>
                </button>
                <h1 className="text-xl mt-4 font-medium">
                    {t("Yordamchi kuratorlar")}
                </h1>
                <p className="text-base mt-8 font-serif">
                    {t("Darslarni o’zlashtirishda qiyinchilik bo’lsa, sizga yordam beradigan kuratoringiz bo’ladi")}
                </p>
            </div>

            <div className="bg-white px-6 py-6 border-solid border-2 border-gray-100 shadow-0xl rounded-2xl transition-transform duration-700 hover:scale-105">
                <button className="py-3 px-2 rounded-xl bg-teal-500 text-white font-bold text-5xl mt-[-10rem]">
                    <a href="#contact">06</a>
                </button>
                <h1 className="text-xl mt-4 font-medium">
                    {t("Konsulting xizmatlar")}
                </h1>
                <p className="text-base mt-8 font-serif">
                    {t("Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi")}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Why;
