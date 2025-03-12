import { useEffect } from "react";
import '../Styles/Footer.css'
const Footer = () => {
  useEffect(() => {
    // Update the year dynamically
    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-white p-4 text-center" id="footer-section">
      <p>© <span id="year"></span> Bhoomi Garg. All Rights Reserved.</p>
      <p>Contact: <a href="mailto:gargbhoomi01@gmail.com" className="underline">gargbhoomi01@gmail.com</a></p>
      <p>
        <a href="/privacy-policy" className="mr-2 underline">Privacy Policy</a>  | 
        <a href="/terms-of-service" className="ml-2 underline"> Terms of Service</a>
      </p>
      <button 
        onClick={scrollToTop} 
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    
      >
        Back to Top ↑
      </button>
    </footer>
  );
};

export default Footer;
