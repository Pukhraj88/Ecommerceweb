import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaTelegram } from "react-icons/fa";
import { LuPhoneCall, LuGithub } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaArrowUpRightFromSquare } from "react-icons/fa6";

export const Footer = () => {
  return (
      <div className="owncontainer mx-auto px-4 !bg-gray-900  text-white py-8 md:py-12">


        <div
          id="footer-container-div"
          className="
            flex flex-col gap-8 mb-8 
            md:grid md:grid-cols-3 md:gap-8 
          "
        >
          {/* Contact Info Section */}
          <div className="contact-info-footer-div flex flex-col items-start pl-4 md:items-center md:justify-center md:p-8">
            <ul className="contact-info-footer p-0 text-gray-400">
              <li className="list-none mb-4">
                <h1 className="m-0 text-xl md:text-2xl text-gray-300 font-jost">Contact Info</h1>
              </li>
              <li className="list-none mb-2">
                <p className="contact-info-footer-p text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><LuPhoneCall /></span>
                  +919784139574
                </p>
              </li>
              <li className="list-none mb-2">
                <p className="contact-info-footer-p text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><LuGithub /></span>
                  Pukhraj88
                </p>
              </li>
              <li className="list-none mb-2">
                <p className="contact-info-footer-p text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><MdEmail /></span>
                  pukhrajnemiwal9@gmail.com
                </p>
              </li>
              <li className="list-none mb-2">
                <p className="contact-info-footer-p text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><FaLocationDot /></span>
                  Rajasthan,India-332001
                </p>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="contact-info-footer-div flex flex-col items-start pl-4 md:items-center md:justify-center md:p-8">
            <ul className="contact-info-footer p-0 text-gray-400">
              <li className="list-none mb-4">
                <h1 className="m-0 text-xl md:text-2xl text-gray-300 font-jost">Quick Links</h1>
              </li>
              <li className="list-none mb-2">
                <p className="quick-links text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><FaArrowUpRightFromSquare /></span>
                  Home
                </p>
              </li>
              <li className="list-none mb-2">
                <p className="quick-links text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><FaArrowUpRightFromSquare /></span>
                  Contact
                </p>
              </li>
              <li className="list-none mb-2">
                <p className="quick-links text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><FaArrowUpRightFromSquare /></span>
                  Skills
                </p>
              </li>
              <li className="list-none mb-2">
                <p className="quick-links text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><FaArrowUpRightFromSquare /></span>
                  Blogs
                </p>
              </li>
            </ul>
          </div>

          {/* Media Accounts Section */}
          <div className="contact-info-footer-div flex flex-col items-start pl-4 md:items-center md:justify-center md:p-8">
            <ul className="contact-info-footer p-0 text-gray-400">
              <li className="list-none mb-4">
                <h1 className="m-0 text-xl md:text-2xl text-gray-300 font-jost">Media Links</h1>
              </li>
              <li className="list-none mb-2">
                <p className="quick-links text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><FaFacebook /></span>
                  Pukhraj88
                </p>
              </li>
              <li className="list-none mb-2">
                <p className="quick-links text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><FaInstagram /></span>
                  @pukhrajKumar
                </p>
              </li>
              <li className="list-none mb-2">
                <p className="quick-links text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><FaTwitter /></span>
                  pukhrajKumar
                </p>
              </li>
              <li className="list-none mb-2">
                <p className="quick-links text-sm sm:text-base lg:text-lg font-jost flex items-center gap-2">
                  <span><MdEmail /></span>
                  pukhrajnemiwal9
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section (Copyright and Social Icons) */}
        <div className="text-center pt-8 border-t border-gray-700 mt-8"> {/* Added border-top and padding-top */}
          <div className="text-footer-div mb-2">
            <span className="text-footer block text-sm text-gray-400 font-sans">
              © 2021-2025 BCA Final Year Project
            </span>
            <span className="text-footer block text-sm text-gray-400 font-sans">BUILT BY PUKHRAJ NEMIWAL</span>
          </div>

          <ul className="icons-footer p-0 m-0 flex justify-center gap-5 text-xl text-gray-400 flex-wrap">
            <li className="list-none">
              <a href="https://www.facebook.com/your-username" target="_blank" rel="noopener noreferrer" className="no-underline text-inherit hover:text-white transition-colors">
                <span><FaFacebook/></span>
              </a>
            </li>
            <li className="list-none">
              <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="no-underline text-inherit hover:text-white transition-colors">
                <span><FaInstagram/></span>
              </a>
            </li>
            <li className="list-none">
              <a href="https://github.com/Pukhraj88" target="_blank" rel="noopener noreferrer" className="no-underline text-inherit hover:text-white transition-colors">
                <span><FaGithub/></span>
              </a>
            </li>
            <li className="list-none">
              <a href="https://t.me/@Pukhraj0012" target="_blank" rel="noopener noreferrer" className="no-underline text-inherit hover:text-white transition-colors">
                <span><FaTelegram/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
};