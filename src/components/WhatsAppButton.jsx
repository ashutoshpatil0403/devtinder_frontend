import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  
  const openWhatsapp = () => {
    window.open(
      "https://wa.me/917249024068?text=Hello%20I%20need%20help",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={openWhatsapp}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105"
      aria-label="Open WhatsApp"
      type="button"
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsAppButton;
