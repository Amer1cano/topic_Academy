import FaqSlider from "./FaqSlider";
import { useTranslation } from 'react-i18next';

const Faq = () => {
    const { t } = useTranslation();

    const faqs = [
        {
            question: t("O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?"),
            answer: t("Biz barcha kerak bo'ladigan materiallar bilan ta'minlaymiz")
        },
        {
            question: t("O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?"),
            answer: t("Biz barcha kerak bo'ladigan materiallar bilan ta'minlaymiz")
        },
        {
            question: t("O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?"),
            answer: t("Biz barcha kerak bo'ladigan materiallar bilan ta'minlaymiz")
        },
        {
            question: t("O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?"),
            answer: t("Biz barcha kerak bo'ladigan materiallar bilan ta'minlaymiz")
        },
    ];

    return (
        <div id="faq" className="mt-28 pb-20">
            <h1 className="mt-10 px-4 text-5xl font-bold font-serif text-black
                bigPhone:pb-16
                phone:text-4xl phone:pb-10
                miniPhone:text-4xl miniPhone:pb-8
                ">
                {t('FAQ')}
            </h1>
            <FaqSlider faqs={faqs} />
        </div>
    );
}

export default Faq;
