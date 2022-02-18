import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Hero2 } from "../../public/assets";
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
        <section></section>
      </Layout>
    );
  }
}

export default index;
