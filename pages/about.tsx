import Layout from "../components/Layout";
import Image from "next/image";
import { Hero2, ImgTextAbout } from "../public/assets";

const AboutPage = () => (
  <Layout title="About Us">
    <div id="hero_about" className="relative">
      <div className="mx-0">
        <Image src={Hero2} layout="responsive" />
      </div>
    </div>
    <section className="mx-auto px-20">
      <div id="about_description" className="relative card drop-shadow-lg rounded-md -top-10 bg-white p-10 max-w-max">
        {/* simple intro */}
        <div className="grid grid-col-1 md:flex w-auto ">
          <div className="image w-[50%] flex">
            <div className="green-card w-80 absolute h-[30rem] rounded-md items-start"></div>
            <div className="about-image w-80 ml-20 mt-20 absolute z-10">
              <Image src={ImgTextAbout} layout="responsive" className=" relative rounded-md" />
            </div>
            <div className="bluelight-card opacity-25 w-80 mt-40 ml-40 right-0 h-[30rem] rounded-md items-end"></div>
          </div>
          <div className="p-10 max-w-[50%]">
            <p className="text-gray-500 text-2xl font-abel py-40">
              Infinita is built by two individuals who share the same vision about mental health. Both of them want Indonesian people more awareness in mental health issues because mental health has the same amount of risk as any other
              medical diseases. Based on this vision, they establish Infinita in order to educate and treat people with sufficient clinical psychology methods such as: psychoanalysis, behavioral intervention, Cognitive Behavior Therapy,
              etc.
            </p>
          </div>
        </div>
        {/* more about us */}
        <div className="this_about">
          <div className="p-20">
            <div className="border-4 p-5 border-primary border-dashed">
              <p className="text-gray-500 text-2xl font-abel">
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
