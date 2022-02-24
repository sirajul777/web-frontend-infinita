import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Hero, Hero2, Hero3 } from "../../public/assets";
import Image from "next/image";

class index extends Component {
  render() {
    return (
      <Layout>
        <div id="hero_blog" className="relative">
          <div className="mx-0">
            <Image src={Hero2} layout="responsive" />
          </div>
        </div>

        {/* article section */}
        <section>
          <div className="container md:px-20 p-5 py-10">
            <div className="grid grid-rows-auto">
              {/* card blog */}
              <h1 className=" font-sans text-2xl p-5 font-bold text-gray-600 md:text-left text-center">Popularity article</h1>
              <div className="card drop-shadow-lg rounded-lg bg-white max-w-max my-5">
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-0">
                  <Image src={Hero} className={"rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg drop-shadow-lg"} />
                  <div className="col-span-2">
                    <div className="grid grid-cols-1">
                      <h1 className=" font-mono text-3xl p-5 font-bold text-gray-600 md:text-left text-center">Name article</h1>
                      <p className="p-5 text-gray-400 text-center md:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quia? Cum, distinctio voluptates! Aliquid illo nesciunt corporis. Minus ipsum non maxime culpa, cupiditate magni in, ea fuga aliquid adipisci nemo?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card blog */}
              <h1 className=" font-sans text-2xl p-5 font-bold text-gray-600 md:text-left text-center">New article</h1>
              <div className="card drop-shadow-lg rounded-lg bg-white max-w-max my-5">
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-0">
                  <Image src={Hero2} className={"rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg drop-shadow-lg"} />
                  <div className="col-span-2">
                    <div className="grid grid-cols-1">
                      <h1 className=" font-mono text-3xl p-5 font-bold text-gray-600 md:text-left text-center">Name article</h1>
                      <p className="p-5 text-gray-400 text-center md:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quia? Cum, distinctio voluptates! Aliquid illo nesciunt corporis. Minus ipsum non maxime culpa, cupiditate magni in, ea fuga aliquid adipisci nemo?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card blog */}
              <h1 className=" font-sans text-2xl p-5 font-bold text-gray-600 md:text-left text-center">All of article {">>>"} </h1>
              <div className="card drop-shadow-lg rounded-lg bg-white max-w-max my-5">
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-0">
                  <Image src={Hero3} className={"rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg drop-shadow-lg"} />
                  <div className="col-span-2">
                    <div className="grid grid-cols-1">
                      <h1 className=" font-mono text-3xl p-5 font-bold text-gray-600 md:text-left text-center">Name article</h1>
                      <p className="p-5 text-gray-400 text-center md:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quia? Cum, distinctio voluptates! Aliquid illo nesciunt corporis. Minus ipsum non maxime culpa, cupiditate magni in, ea fuga aliquid adipisci nemo?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default index;
