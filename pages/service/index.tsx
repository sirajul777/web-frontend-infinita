import Layout from "../../components/Layout";
import { Hero6 } from "../../public/assets";
import Image from "next/image";
import { useState } from "react";
import ReactDOM from "react-dom";

const index = () => {
  const [_selectedIndex, setIndex] = useState("0");
  const services: any[] = [
    <ul className="list-disc">
      <li className="">Potential</li>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum adipisci corrupti doloremque quibusdam, aut aliquam excepturi ducimus quam facilis expedita at nesciunt culpa perspiciatis et itaque rerum animi! Distinctio,
        accusamus.
      </p>
    </ul>,
    <ul className="list-disc">
      <li className="">Mapping Test</li>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum adipisci corrupti doloremque quibusdam, aut aliquam excepturi ducimus quam facilis expedita at nesciunt culpa perspiciatis et itaque rerum animi! Distinctio,
        accusamus.
      </p>
    </ul>,
    <ul className="list-disc">
      <li className="">Clinical Assessment</li>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum adipisci corrupti doloremque quibusdam, aut aliquam excepturi ducimus quam facilis expedita at nesciunt culpa perspiciatis et itaque rerum animi! Distinctio,
        accusamus.
      </p>
    </ul>,
    <ul className="list-disc">
      <li className="">Counceling</li>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum adipisci corrupti doloremque quibusdam, aut aliquam excepturi ducimus quam facilis expedita at nesciunt culpa perspiciatis et itaque rerum animi! Distinctio,
        accusamus.
      </p>
    </ul>,
  ];

  const indexselect = (_Index: Number) => {
    switch (_Index) {
      case 0:
        setIndex("0");
        break;
      case 1:
        setIndex("1");
        break;
      case 2:
        setIndex("2");
        break;
      case 3:
        setIndex("3");
        break;

      default:
        setIndex("0");
        break;
    }
  };
  return (
    <Layout>
      <div id="hero_service" className="relative">
        <div className="mx-0">
          <Image src={Hero6} layout="responsive" />
        </div>
      </div>
      <section>
        <div className="container mb-10">
          <div className="grid grid-rows-auto w-full">
            <div className="grid grid-cols-3 gap-4">
              <div className="sidebar bg-bronz w-[500p] rounded-br-lg rounded-tr-lg drop-shadow">
                <button
                  onClick={() => {
                    indexselect(0);
                  }}
                  className="py-10 pl-20 text-left hover:bg-custom w-full rounded-tr-lg"
                >
                  Psychological Assessment
                </button>
                <br />
                <button
                  onClick={() => {
                    indexselect(1);
                  }}
                  className="py-10 pl-20 text-left hover:bg-custom w-full"
                >
                  Clinical Psychology
                </button>
                <br />
                <button
                  onClick={() => {
                    indexselect(2);
                  }}
                  className="py-10 pl-20 text-left hover:bg-custom w-full"
                >
                  Special Needs Center
                </button>
                <br />
                <button
                  onClick={() => {
                    indexselect(3);
                  }}
                  className="py-10 pl-20 text-left hover:bg-custom w-full rounded-br-lg"
                >
                  Intellegence Test
                </button>
              </div>
              <div className="kontent service cols-span-2 p-20">
                {/* <ul className="list-disc">
                  <li className="">Potential</li>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum adipisci corrupti doloremque quibusdam, aut aliquam excepturi ducimus quam facilis expedita at nesciunt culpa perspiciatis et itaque rerum animi!
                    Distinctio, accusamus.
                  </p>
                </ul> */}
                {services[parseInt(_selectedIndex)]}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
// ReactDOM.render(<Index />, document.getElementById("root"));
export default index;
