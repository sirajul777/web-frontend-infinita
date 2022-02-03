import Layout from "../../components/Layout";
import { Hero3 } from "../../public/assets";
import Image from "next/image";

const service_pages = () => {
  return (
    <Layout>
      <div id="hero_service" className="relative">
        <div className="mx-0">
          <Image src={Hero3} layout="responsive" />
        </div>
      </div>
    </Layout>
  );
};

export default service_pages;
