import React from "react";

const Footer = () => {
  return (
    <div>
      <div class=" flex items-center justify-around">
        {" "}
        <div class=" m-2 items-start relative w-full flex flex-row justify-between mt-8">
          {" "}
          <div class="relative">
            {" "}
            <div class="bg-white p-3 space-y-10 md:grid md:grid-cols-2 md:-mt-6 lg:grid-cols-4">
              {" "}
              <div class="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
                {" "}
                <h1 class="text-blue-600 text-xl font-medium">Company</h1>{" "}
                <br />{" "}
                <p class="text-gray-500 font-medium text-base hover:text-blue-600 ">
                  {" "}
                  A123 Lost Street <br /> Chandigarh, PB 535022 <br />India{" "}
                </p>{" "}
                <br />{" "}
                <p class="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer">
                  {" "}
                  <strong class="tracking-wide text-blue-600 font-normal">
                    Phone:
                  </strong>{" "}
                  +91 7008090111{" "}
                </p>{" "}
                <p class="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer">
                  {" "}
                  <strong class="tracking-wide text-blue-600 font-normal">
                    Email:
                  </strong>{" "}
                  info@gmail.com{" "}
                </p>{" "}
              </div>{" "}
              <div class="leading-9 md:w-2/4 md:order-3 md:ml-24">
                {" "}
                <h1 class="text-blue-600 text-xl font-medium tracking-[0.030rem]">
                  {" "}
                  Useful Links{" "}
                </h1>{" "}
                <ul class="mt-2 text-gray-500 font-medium">
                  {" "}
                  <li>
                    {" "}
                    <i class="fa fa-chevron-right text-blue-600"></i>{" "}
                    <a href="#" class="hover:text-blue-600">
                      {" "}
                      Home
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <i class="fa fa-chevron-right text-blue-600"></i>{" "}
                    <a href="#" class="hover:text-blue-600">
                      {" "}
                      About Us
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <i class="fa fa-chevron-right text-blue-600"></i>{" "}
                    <a href="#" class="hover:text-blue-600">
                      {" "}
                      Services
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <i class="fa fa-chevron-right text-blue-600"></i>{" "}
                    <a href="#" class="hover:text-blue-600">
                      {" "}
                      Terms of service
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <i class="fa fa-chevron-right text-blue-600"></i>{" "}
                    <a href="#" class="hover:text-blue-600">
                      {" "}
                      Privacy policy
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <div class="leading-9 md:w-3/4 md:order-4">
                {" "}
                <h1 class="text-blue-600 text-xl font-medium tracking-[0.030rem]">
                  {" "}
                  Our Services{" "}
                </h1>{" "}
                <ul class="mt-2 text-gray-500 font-medium">
                  {" "}
                  <li>
                    {" "}
                    <i class="fa fa-chevron-right text-blue-600"></i>{" "}
                    <a href="#" class="hover:text-blue-600">
                      {" "}
                      Web Design
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <i class="fa fa-chevron-right text-blue-600"></i>{" "}
                    <a href="#" class="hover:text-blue-600">
                      {" "}
                      Web Development
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <i class="fa fa-chevron-right text-blue-600"></i>{" "}
                    <a href="#" class="hover:text-blue-600">
                      {" "}
                      Product Management
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <i class="fa fa-chevron-right text-blue-600"></i>{" "}
                    <a href="#" class="hover:text-blue-600">
                      {" "}
                      Marketing
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <i class="fa fa-chevron-right text-blue-600"></i>{" "}
                    <a href="#" class="hover:text-blue-600">
                      {" "}
                      Graphic Design
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <div class="md:order-2 lg:order-last">
                {" "}
                <h1 class="text-blue-600 text-xl font-medium tracking-[0.030rem]">
                  {" "}
                  Join Our Newsletter{" "}
                </h1>{" "}
                <br />{" "}
                <p class="text-gray-500 font-medium w-3/5 leading-7 mb-5 md:w-3/4">
                  {" "}
                  Join 25,000+ others and never miss out on new tips,tutorials,
                  and more.{" "}
                </p>{" "}
                <input
                  type="email"
                  placeholder="Enter E-mail Here"
                  class="py-1 px-2 placeholder-gray-400 rounded-tl-xl focus: outline-none focus:bordermd:w-1/2 lg:w-3/5 border"
                />{" "}
                <button class="text-white bg-blue-600 p-1 -translate-x-1 rounded-br-xl hover:bg-blue-500">
                  {" "}
                  Subscribe{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div class="md:flex hidden bg-gray-900 p-3 flex-col text-center pt-5 space-y-8 md:flex-row md:justify-between md:space-y-0">
              {" "}
              <div class="flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
                {" "}
                <p>
                  @ Copyright <strong>Company.</strong>All Rights Reserved
                </p>{" "}
                <p>
                  Designed by <span class="text-blue-600">TailwindCSS</span>
                </p>{" "}
              </div>{" "}
              <div class="text-white pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">
                {" "}
                <a
                  href="#"
                  class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                >
                  <i class="fa fa-twitter"></i>
                </a>{" "}
                <a
                  href="#"
                  class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                >
                  <i class="fa fa-instagram"></i>
                </a>{" "}
                <a
                  href="#"
                  class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                >
                  <i class="fa fa-facebook"></i>
                </a>{" "}
                <a
                  href="#"
                  class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                >
                  <i class="fa fa-google"></i>
                </a>{" "}
                <a
                  href="#"
                  class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                >
                  <i class="fa fa-linkedin"></i>
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Footer;
