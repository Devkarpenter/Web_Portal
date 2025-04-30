import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ServiceCard from "../../components/service_card/ServiceCard";
import "./Main.css"; // Import the CSS file for styling
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";



const Main = () => {
  return (
    <>
      <Header />

      {/* <h2 className="head-title"> Services </h2> */}

    <div id="hero">
      <div className="container">
        <div className="row">
          <div className="col">

            <h1>AcoWorlds Portal</h1>

            {/* title-para*/}

            <div className="title-para">

            <p className="title-para-1">Build Your Business with Acoworlds</p>
            <p className="title-para-2">Empowering Entrepreneurs with Seamless Certification, Registration, and Business Support Solutions</p>


            </div>

            {/* social media icons */}

            <div className="social-media-icons">

            <a href=""><FaInstagram /></a>
            <a href=""><FaFacebookF /></a>
            <a href=""><FaWhatsapp /></a>
            <a href=""><FaLinkedinIn /></a>

            </div>

            
          </div>
        </div>
      </div>
    </div>


      <div className="container mt-2 mb-5 d-flex flex-wrap justify-content-center gap-1 ">
        <ServiceCard
          title={<>ISO <br /> Certificate</>}
          img="ISO-1.webp"
        />
        <ServiceCard
          title={<>GST <br/> Registration</>}
          img="127389.jpg"
        />
        <ServiceCard
          title="Startup India Certification"
          img="startup-India-certificate.webp"
        />
        <ServiceCard
          title={<>MSME <br />Registration </>}
          img="MSME.webp"
        />
        <ServiceCard
          title="Trademark Registration"
          img="trademark-registration.webp"
        />
        <ServiceCard
          title="Seed Fund Application"
          img="Seed-Fund-1536x1152.webp"
        />
        <ServiceCard
          title={<>Tax <br />Exemption</>}
          img="tax-exemption.webp"
        />
        <ServiceCard
          title={<>fassai <br />laicense</>}
          img="FSSAI.png"
        />
      </div>

      <Footer/>
    </>
  );
};

export default Main;
