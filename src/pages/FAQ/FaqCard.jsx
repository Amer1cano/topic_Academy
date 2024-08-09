/* eslint-disable react/prop-types */
import { useState } from "react"
import { FaPlus, FaXmark  } from "react-icons/fa6";

const FaqCard = ({question, answer}) => {

  const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = ()=>{
        setIsOpen(!isOpen);
    }

  return (
    <div className="p-6 
    phone:py-4
    miniPhone:py-2
    ">
        
    <div className="flex place-items-start justify-between pl-32 pr-16 m-auto
    miniTablet:p-6
    bigPhone:p-3
    phone:p-1
    miniPhone:p-1

    ">
        <h2 className="text-gray-700 font-bold text-3xl 
        bigPhone:text-2xl
        phone:text-xl
        miniPhone:text-xl
        ">
            {question}
        </h2>
        <div onClick={toggleAnswer}
      className="text-blue-500 focus:outline-none text-4xl font-bold
      bigPhone:text-3xl
      phone:text-2xl
      miniPhone:text-2xl
      ">
            {
                isOpen ? 
                <button className="p-2 bg-teal-500 text-white rounded-full">
                  <FaXmark />
                </button> 
                :
                <button className="p-2 bg-teal-500 text-white rounded-full">
                  <FaPlus />
                </button> 
                
            }
        </div>
    </div>


    
    <div className={`ml-48 mt-8 overflow-hidden transition-max-height duration-200 ease-in-out ${isOpen ?  'max-h-screen w-2/3   text-gray-500 font-bold text-3xl ': 'max-h-0'}
    miniTablet:ml-20 miniTablet:mt-4 miniTable:text-2xl
    bigPhone:ml-16 bigPhone:mt-4  bigPhone:text-xl
    phone:ml-8 phone:mt-4 phone:text-lg phone:w-full
    miniPhone:ml-8 miniPhone:mt-4 miniPhone:text-base miniPhone:w-full
    `}>
        <p>
            {answer}
        </p>
    </div>
    <hr />
</div>
  )
}

export default FaqCard