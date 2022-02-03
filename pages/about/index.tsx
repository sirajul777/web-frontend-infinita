import Layout from "../../components/Layout";
import Image from "next/image";
import { Hero2, ImgTextAbout } from "../../public/assets";

const AboutPage = () => (
  <Layout title="About Us">
    <div id="hero_about" className="relative">
      <div className="mx-0">
        <Image src={Hero2} layout="responsive" />
      </div>
    </div>
    <section className="mx-auto px-5 md:px-20">
      <div id="about_description" className="relative card drop-shadow-lg rounded-md -top-10 bg-white p-10 max-w-max">
        {/* simple intro */}
        <div className="grid grid-col-1 md:flex w-auto ">
          <div className="image w-full md:w-[50%] flex">
            <div className="green-card absolute max-w-80 w-1/2 md:w-80 max-h-[30rem] h-[24rem] md:h-[30rem] rounded-md items-start"></div>
            <div className="about-image md:w-80 w-2/3 mx-auto right-0 left-0 md:ml-32 mt-20 absolute md:top-0 top-2 bottom-0 z-10">
              <Image src={ImgTextAbout} layout="responsive" className=" relative rounded-md" />
            </div>
            <div className="bluelight-card opacity-25 max-w-80 w-2/3 md:w-80 max-h-[30rem] h-[24rem] md:h-[30rem] rounded-md items-end mt-24 ml-auto md:ml-40 "></div>
          </div>
          <div className="md:p-10 px-2 md:px-0 w-full md:w-[50%]">
            <p className="text-gray-500 md:text-2xl text-lg font-abel py-32 text-center md:text-left">
              Infinita is built by two individuals who share the same vision about mental health. Both of them want Indonesian people more awareness in mental health issues because mental health has the same amount of risk as any other
              medical diseases. Based on this vision, they establish Infinita in order to educate and treat people with sufficient clinical psychology methods such as: psychoanalysis, behavioral intervention, Cognitive Behavior Therapy,
              etc.
            </p>
          </div>
        </div>
        {/* more about us */}
        <div className="this_about">
          <div className="md:p-20">
            <div className="border-4 p-5 border-primary border-dashed">
              <p className="text-gray-500 md:text-2xl font-abel md:text-justify text-center">
                Infinita Center is a psychological development center based in Tangerang, Gading Serpong, founded by a Clinical Psychologist, Elly Wulandari, and a Special Education Practitioner, Joan Mareti Gading in 2010. We provide broad
                service from counseling, psychotherapy, employee assistance program (EAP), until behavior and educational management for children to adult with and without neurodiversity. Our clinical psychologist is legally registered as
                mental health professional with STR (Surat Tanda Regristrasi) from Indonesian Health Ministry (Majelis Tenaga Kesehatan Indonesia) and clinical practice license from HIMPSI (Indonesian Psychology Association) and under IPK
                (Indonesian Clinical Psychology Association). She has more than 17 years experienced in clinical interventions with various kind of clinical cases. Specialities in psychological assessment and psychotherapy for traumatic
                problem (PTSD-Post Traumatic Stress Disorder), depression, anxiety, bipolar, obsessive compulsive (OCD), borderline personality, mood/any other emotional disorder. Our senior special education practitioner in special
                education has more than 18 years experienced. Our team members are bachelor degree in special education and psychology who are able to provide intervention with children and adult with neurodiversity condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
