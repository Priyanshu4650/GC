import React from "react";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 fixed bottom-0 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-700 pt-4 d-flex">
        {/* Useful Links Section */}
        <div className="p-2 flex-fill">
          <h3 className="text-lg font-bold border-b-2 border-blue-500 inline-block mb-2">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li>&gt; <a href="https://iitpkd.ac.in" className="hover:underline">IIT Palakkad</a></li>
            <li>&gt; <a href="#" className="hover:underline">Gymkhana Constitution</a></li>
            <li>&gt; <a href="#" className="hover:underline">Career Development Cell</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="p-2 flex-fill">
          <h3 className="text-lg font-bold border-b-2 border-blue-500 inline-block mb-2">CONTACT US</h3>
          <p>IIT Palakkad</p>
          <p>Kanjikode</p>
          <p>Palakkad, Kerala - 678623</p>
        </div>

        {/* Connect With Us Section */}
        <div className="p-2 flex-fill">
          <h3 className="text-lg font-bold border-b-2 border-blue-500 inline-block mb-2">CONNECT WITH US</h3>
          <a href="#" className="inline-block bg-gray-800 p-3 rounded-full hover:bg-gray-700">
            {/* <FaFacebookF className="text-white text-lg" /> */}
          </a>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2025 GC IIT Palakkad. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
