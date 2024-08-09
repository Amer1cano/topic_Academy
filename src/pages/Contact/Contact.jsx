/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
import axios from 'axios';
import { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Toast, { showToast } from './Toast';
import { useTranslation } from 'react-i18next';

const countries = [
  { code: '+998', name: 'Uzbekistan', flag: 'https://flagcdn.com/w320/uz.png' },
  { code: '+7', name: 'Russia', flag: 'https://flagcdn.com/w320/ru.png' },
  { code: '+1', name: 'USA', flag: 'https://flagcdn.com/w320/us.png' },
  { code: '+33', name: 'France', flag: 'https://flagcdn.com/w320/fr.png' },
  { code: '+86', name: 'China', flag: 'https://flagcdn.com/w320/cn.png' },
  { code: '+82', name: 'Korea', flag: 'https://flagcdn.com/w320/kr.png' },
];

const Contact = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const phoneNumberRef = useRef(null);
  const userNameRef = useRef(null);
  const [error, setError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const phonePattern = /^[+]?[0-9\s\-\(\)]+$/;

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    if (phonePattern.test(value) || value === '') {
      setError('');
    } else {
      setError(t('Please enter a valid phone number.'));
    }
  };

  const sendMessages = async (event) => {
    event.preventDefault();

    if (!phonePattern.test(phoneNumber)) {
      setError(t('Please enter a valid phone number.'));
      return;
    }

    const token = "7105261697:AAFNZmwSgT5XaDNWPOAxPLlVvtfBlARB01s";
    const chat_id = 1768611600;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = userNameRef.current.value;
    const telefon = phoneNumber;

    const MessageFull = t(`Ismi: ${name} \nTelefoni: ${telefon}`);
    
    try {
      await axios.post(url, {
        chat_id,
        text: MessageFull,
      });
      // Reset form after successful submission
      document.getElementById("myForm").reset();
      setPhoneNumber('');
      setError('');
      showToast(t('Message sent successfully!'), 'success');
    } catch (error) {
      showToast(t('Message failed to send.'), error);
    }
  };

  return (
    <div id="contact" className="mt-12 px-20 
    tablet:px-6
    miniTablet:px-4
    bigPhone:px-3 
    phone:px-2
    miniPhone:px-1
    ">
      <Toast />
      <div className="bg-teal-100 rounded-xl grid grid-cols-2 px-20 py-10 gap-8
      tablet:px-4 tablet:gap-1 tablet:mt-20
      miniTablet:px-4 miniTablet:gap-4 miniTablet:mt-20 miniTablet:grid-cols-1 miniTablet:place-items-center
      bigPhone:px-3 bigPhone:gap-4 bigPhone:mt-20 bigPhone:grid-cols-1 bigPhone:place-items-center
      phone:px-3 phone:gap-4 phone:mt-20 phone:grid-cols-1 phone:place-items-center
      miniPhone:px-3 miniPhone:gap-4 miniPhone:mt-20 miniPhone:grid-cols-1 miniPhone:place-items-center
      ">
        <div className='
        miniTablet:text-center
        bigPhone:text-center
        phone:text-center
        miniPhone:text-center
        '>
          <h1 className="text-5xl font-bold font-serif leading-snug
          miniPhone:text-4xl
          ">
            {t('Savollaringiz qoldimi?')}
          </h1>
          <p className="text-xl font-serif w-72 mt-10 
          tablet:mt-12
          miniTablet:w-full miniTablet:pb-4
          bigPhone:w-full bigPhone:pb-4
          phone:w-full phone:pb-4
          miniPhone:w-full miniPhone:pb-4
          ">
            {t('Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha savollaringizga javob beramiz.')}
          </p>
        </div>
        <div className="w-96 text-center">
          <form id="myForm" onSubmit={sendMessages}>
            <input
              required
              ref={userNameRef}
              className="rounded-full p-4 px-6 mb-9 bg-green-300 outline-none placeholder:text-gray-100 placeholder:font-semibold w-80 text-2xl text-white
              phone:text-xl phone:w-64
              miniPhone:text-lg miniPhone:w-64
              "
              type="text"
              placeholder={t('ISMINGIZ')}
            />
            <div className="relative bg-green-300 rounded-full inline-flex items-center border w-80 p-2 px-6 mb-9
            phone:text-xl phone:w-64
            miniPhone:text-lg miniPhone:w-60
            ">
              <div className="flex items-center cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img src={selectedCountry?.flag} alt={selectedCountry?.name} className="w-5 h-3 mr-2" />
                <span>{selectedCountry?.code}</span>
                <FaChevronDown className="ml-2" />
              </div>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-10 bg-green-300 border rounded shadow-lg z-10 w-full
               
                ">
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <img src={country.flag} alt={country.name} className="w-5 h-3 mr-2" />
                      <span>{t(country.name)}</span>
                    </div>
                  ))}
                </div>
              )}
              <input
                ref={phoneNumberRef}
                type="text" // Keeping it as text for validation
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="ml-2 p-2 w-40 outline-none bg-green-300 text-white text-2xl placeholder:text-white placeholder:text-xl
                phone:text-xl phone:w-28
                miniPhone:text-lg miniPhone:w-24
                "
                placeholder={t('907678424')}
              />
            </div>
            {error && <div className='pb-8' style={{ color: 'red' }}>{error}</div>}
            <button className="px-7 py-4 w-80 bg-button text-white text-2xl rounded-full hover:text-yellow-200
            phone:w-64 phone:px-2
            miniPhone:w-64 miniPhone:px-1
            ">
              {t('Ariza Qoldirish')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
