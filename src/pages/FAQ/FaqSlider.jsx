/* eslint-disable react/prop-types */
import FaqCard from "./FaqCard"


const FaqSlider = ({faqs}) => {
  return (
    <div className="faq-slider mt-16">
        <hr />
        {
            faqs.map((faq,index)=>(
                <FaqCard key={index} question={faq.question} answer={faq.answer} />
            ))
        }
    </div>
  )
}

export default FaqSlider