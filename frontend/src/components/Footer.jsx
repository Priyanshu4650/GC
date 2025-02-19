import React from "react";
import { Link } from "react-router-dom";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-dark text-white p-6 fixed bottom-0 w-full" 
    data-bs-theme="dark">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-700 pt-4 d-flex">
        {/* Useful Links Section */}
        <div className="p-2 flex-fill">
          <h3 className="text-lg font-bold border-b-2 border-blue-500 inline-block mb-2">
            USEFUL LINKS
          </h3>
          <ul className="space-y-2">
            <li>
              {" "}
              <Link
                to="https://iitpkd.ac.in"
                style={{ color: "white", textDecoration: "none" }}
                className="hover:underline no-underline"
              >
                IIT Palakkad
              </Link>
            </li>
            {/* <li><Link to="#"  style={{color: "black"}} className="hover:underline no-underline">Gymkhana Constitution</Link></li>
            <li><Link to="#"  style={{color: "black"}} className="hover:underline no-underline">Career Development Cell</Link></li> */}
            <li>
              <Link
                to="https://docs.google.com/document/d/1AGj8LifA9gSygQsDY0wWllNdyTcvbmGa/edit?usp=sharing&ouid=110758014801847889834&rtpof=true&sd=true"
                style={{ color: "white", textDecoration: "none" }}
                className="hover:underline no-underline"
              >
                RuleBook
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="p-2 flex-fill">
          <h3 className="text-lg font-bold border-b-2 border-blue-500 inline-block mb-2">
            CONTACT US
          </h3>
          <p>IIT Palakkad, Kanjikode</p>
          <p>Palakkad, Kerala - 678623</p>
        </div>

        {/* Connect With Us Section */}
        <div className="p-2 flex-fill">
          <h3 className="text-lg font-bold border-b-2 border-blue-500 inline-block mb-2">
            CONNECT WITH US
          </h3>
          <a
            href="https://www.instagram.com/sports_iit_pkd/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 p-3 rounded-full hover:bg-gray-700"
          >
            <BiLogoInstagramAlt className="text-white text-4xl" />
          </a>
        </div>
      </div>
      <hr />
      <div className="text-center mt-6">
        <p>&copy; 2025 GC IIT Palakkad. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
