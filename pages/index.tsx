import Image from "next/image";
import Layout from "../components/Layout";
import { Arrow, Brain } from "../public/assets";
const sections = ["content", "description", "contact", "footer"];
const cardcontent = [
  {
    key: 1,
    icon: Brain,
    names: "our vision",
    content: "As one of clinical psychology center in Indonesia who provide integrated, evidencebased, and holistic approach to enhance individual's potential as a person.",
  },
  {
    key: 2,
    icon: Arrow,
    names: "our mission",
    content: "To provide integrated, evidence-based, and holistic educational and clinical psychology services by emphasizing on individual differences.",
  },
];

const Cards: any = [];
cardcontent.forEach((item) => {
  Cards.push(
    <div key={item.key} className="card my-10 drop-shadow-lg flex flex-col bg-white rounded-md p-8 max-w-max w-72 mt-10 mb-20 md:mb-0">
      <div className="absolute mb-3 -top-16 self-center flex max-w-md bg-white p-5 rounded-full justify-center drop-shadow-md w-24">
        <Image src={item.icon} width={100} height={100} />
      </div>
      <h1 className="text-gray-600 capitalize text-center font-medium md:text-3xl text-xl mt-5">{item.names}</h1>
      <p className="text-gray-700 font-xl text-center py-5">{item.content}</p>
    </div>
  );
});

const IndexPage = () => (
  <Layout>
    {/* hero section */}
    <section id="hero" className="relative">
      <div className="mx-auto bg-hero w-full h-screen brightness-75">
        <div className="text-white font-sans text-center font-medium lg:text-5xl md:text-3xl text-xl pt-40">
          <h1 className="mt-20 md:mt-40">Infinita Psychological Development Center</h1>
        </div>
        <div className="p-5 md:p-0 mt-auto bottom-0 top-auto text-center text-white ">
          <button
            className="items-center justify-center hover:py-8 border-white  rounded-full border-4 shadow-sm hover:text-accent hover:border-accent text-base font-medium capitalize ri  transition-all duration-300 mt-10 md:mt-20"
            onClick={() => {
              const elemental = document.getElementById(sections[0]);
              let offset = elemental?.offsetTop;
              window.scrollTo({ top: offset, behavior: "smooth" });
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    {/* content section */}
    <section id={sections[0]}>
      <div className="container px-10 mx-auto">
        {/* quotes section */}
        <div className="quotes-section flex justify-center justify-items-center py-20">
          <div className="text-primary font-medium font-abel text-3xl max-w-3xl text-center border-4 border-primary p-4 item-center">
            <span className="h-1 text-primary font-roboto md:text-5xl text-2xl">"</span>
            THE GOOD LIFE IS A PROCESS, NOT A STATE OF BEING . . . IT IS A DIRECTION NOT A DESTINATION
            <span className="h-1 text-primary font-roboto text-5xl">"</span>
            <p className="font-pusher italic text-lg capitalize">carl rogers</p>
          </div>
        </div>
      </div>
    </section>

    {/* vision & mission content */}
    <section id={sections[1]} className="bg-paralax">
      <div className="container mx-auto px-5 py-5">
        <h1 className="text-gray-700 text-center capitalize font-bold md:text-3xl text-xl bottom-5">our vision and mission</h1>
        <div className="md:flex md:justify-around py-10 grid grid-cols-1 justify-items-center px-5">{Cards}</div>
      </div>
    </section>

    {/* section futter */}
  </Layout>
);

export default IndexPage;
