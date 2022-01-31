import Image from "next/image";
import React, { Component } from "react";
import { LogoCut } from "../public/assets";

class Footer extends Component {
  render() {
    return (
      <div className="bottom-0 left-0 right-0">
        <div className="bg-gray-700">
          <div className="container px-20 w-full">
            <div className="grid grid-col-1 md:grid-cols-3 md:gap-4">
              <div className="gap-4 p-10 grid place-items-center">
                <Image src={LogoCut} />
              </div>
              <div className="flex flex-col py-14 px-5 md:px-10 text-white">
                <h1 className=" text-2xl font-medium text-center md:text-left">Our Location</h1>
                <div className="flex md:justify-between flex-col md:flex-row justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-20 md:w-40 right-0 left-0 mx-auto md:mx-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className=" text-sm p-5 text-center md:text-left">Ruko Golden 8, Jl. Ki Hajar Dewantara Jl. Boulevard Raya Gading Serpong, West Pakulonan, Kelapa Dua, Tangerang Regency, Banten 15810</p>
                </div>
              </div>
              <div className="flex flex-col py-14 px-10 md:text-left text-white">
                <h1 className=" text-2xl font-medium text-center md:text-left">Contact</h1>
                <ul className="list-disc py-5">
                  <li>Telp : 021-22227599</li>
                  <li>Email : info@infinitaconceling.org</li>
                  <li>WA : +62812-1231-7076</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;