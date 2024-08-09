/* eslint-disable react/no-unknown-property */


const Map = () => {
    const embedUrl = "https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d19842.215313575536!2d-0.6943111!3d51.5631569!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4876bbf89bbb8507%3A0x9df0a1a42cce12a2!2z0KLQtdC80LfQsCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!3m2!1d51.563156899999996!2d-0.6943111!5e0!3m2!1sru!2s!4v1722890733949!5m2!1sru!2s"
  return (
    <div className="mt-20 h-96 rounded-xl">
        <iframe
        
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
       
    </div>
  )
}

export default Map