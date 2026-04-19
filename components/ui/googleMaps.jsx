const MapSection = () => {
  // Replace with your actual coordinates
  const lat = 43.0642;
  const lng = -88.1235;
  const zoom = 14;
  const businessName = "RN Infotech";

  return (
    <div className="p-0 w-full">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427061.8394185433!2d77.301264927645!3d12.954459534995346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1776619966909!5m2!1sen!2sin`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${businessName} Location`}
        />
      </div>
    </div>
  );
};

export default MapSection;