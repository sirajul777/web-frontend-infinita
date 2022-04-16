import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Hero5 } from "../../public/assets/img";
import Image from "next/image";

class index extends Component {
  render() {
    return (
      <Layout>
        <div id="hero_blog" className="relative">
          <div className="mx-0">
            <Image src={Hero5} layout="responsive" />
          </div>
        </div>

        <section>
          <div className="container md:px-40 p-5  py-10">
            <div className="grid grid-rows-auto">
              <h1 className=" font-sans text-4xl p-5 font-bold text-gray-600 text-center">Contact Us</h1>
              <div className="flex md:justify-around flex-col md:flex-row justify-center ">
                <button
                  className="w-20 md:w-40 right-0 left-0 my-auto pointer-events-auto mx-auto md:mx-0 text-accent"
                  // onClick={() => {
                  //   window.open("https://goo.gl/maps/T4zD4kf7LS2g1vd5A");
                  // }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </button>
                <p className="p-5 text-gray-400 md:text-2xl text-center md:text-left">
                  <span className="font-bold">Address : </span> Ruko Golden 8, Jl. Ki Hajar Dewantara Jl. Boulevard Raya Gading Serpong, West Pakulonan, Kelapa Dua, Tangerang Regency, Banten 15810 Front Desk +62 812 1231 7076
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* map section */}
        <section>
          <div className="container md:px-20 p-5 py-10 mb-20">
            <div className="grid grid-rows-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.16320751041!2d106.6358307147692!3d-6.242210195481561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbf3ea31d7cf%3A0xc495e98772f2be67!2sInfinita%20Consulting!5e0!3m2!1sen!2sid!4v1650091372894!5m2!1sen!2sid"
                // width="100%"
                // height="600px"
                allowFullScreen={false}
                loading="lazy"
                className=" w-full md:h-[600px] h-[300px]"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default index;
