import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div class="flex items-center justify-around">
        <div class="items-start relative w-full flex flex-row justify-between">
          <div class="relative">
            <div class="p-3 space-y-10 md:grid md:grid-cols-2 md:-mt-6 lg:grid-cols-4">
              <div class="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
                <h1 class="text-black text-xl font-medium">YumYard</h1>
                <br />
                <p class="text-gray-700 font-medium text-base hover:text-orange-500 ">
                  Adisaptagram <br /> West Bengal 712502 India{" "}<br />
                </p>
                <br />
                <p class="text-gray-700 font-medium text-base hover:text-orange-500 cursor-pointer">
                  <strong class="tracking-wide text-black font-normal">
                    Phone:
                  </strong>{" "}
                  +91 7008090111{" "}
                </p>
                <p class="text-gray-700 font-medium text-base hover:text-orange-500 cursor-pointer">
                  <strong class="tracking-wide text-black font-normal">
                    Email:
                  </strong>{" "}
                  info@gmail.com{" "}
                </p>
              </div>
              <div class="leading-9 md:w-2/4 md:order-3 md:ml-24">
                <h1 class="text-black text-xl font-medium tracking-[0.030rem]">
                  Useful Links
                </h1>
                <ul class="mt-2 text-gray-700 font-medium">
                  <li>
                    <i class="fa fa-chevron-right text-black"></i>{" "}
                    <a href="#" class="hover:text-orange-500">
                      Home
                    </a>{" "}
                  </li>
                  <li>
                    <i class="fa fa-chevron-right text-black"></i>{" "}
                    <a href="#about" class="hover:text-orange-500">
                      About Us
                    </a>{" "}
                  </li>
                  <li>
                    <i class="fa fa-chevron-right text-black"></i>{" "}
                    <a href="#menu" class="hover:text-orange-500">
                      Our Menu
                    </a>{" "}
                  </li>
                  <li>
                    <i class="fa fa-chevron-right text-black"></i>{" "}
                    <a href="#services" class="hover:text-orange-500">
                      Our service
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div class="md:order-2 lg:order-4">
                <h1 class="text-black text-xl font-medium tracking-[0.030rem]">
                  Join Our Newsletter
                </h1>
                <br />
                <p class="text-gray-700 font-medium w-3/5 leading-7 mb-5 md:w-3/4">
                  Join 25,000+ others and never miss out on new tips, tutorials,
                  and more.
                </p>
                <input
                  type="email"
                  placeholder="Enter E-mail Here"
                  class="py-1 px-2 placeholder-gray-400 rounded-tl-xl focus:outline-none focus:border md:w-1/2 lg:w-3/5 border"
                />{" "}
                <button class="text-white font-medium bg-orange-500 p-1 -translate-x-1 rounded-br-xl">
                  Subscribe
                </button>
              </div>
              <div className="md:order-last">
                <h1 className="text-black text-xl font-medium tracking-[0.030rem]">
                  Social Media
                </h1>
                <br />
                <div className="text-white pb-4 text-start text-xl space-x-2 md:pb-0 md:space-x-1">
                  <a
                    href="#"
                    className="w-8 h-8 pl-2 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 pl-2 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 pl-2 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 pl-2 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 pl-2 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
                <div class="md:order-last pt-5">
                  <p class="text-gray-700 font-medium">
                    Copyright @2024 <strong>YumYard</strong> All Rights Reserved
                  </p>
                  <p class="text-gray-700 font-medium">
                    Designed By <strong>Team Design-Dianamo</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
