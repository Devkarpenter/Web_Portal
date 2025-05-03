import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ServiceCard from "../../components/service_card/ServiceCard";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Main.css";

const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header isMainPage={true} />

      <div id="MainPage" className={`dashboard-layout ${sidebarOpen ? "sidebar-open" : ""}`}>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>☰</button>

        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            <li><a href="/about">📖 About Us</a></li>
            <li><a href="/contact">📞 Contact</a></li>
            <li><a href="/login">🔐 Login</a></li>
            <li><a href="/register">📝 Register</a></li>
          </ul>
        </aside>

        {/* Main content */}
        <main className="dashboard-content">
          <div id="hero">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1>AcoWorlds Portal</h1>

                  <div className="title-para">
                    <p className="title-para-1">Build Your Business with Acoworlds</p>
                    <p className="title-para-2">
                      Empowering Entrepreneurs with Seamless Certification, Registration,
                      and Business Support Solutions
                    </p>
                  </div>

                  <div className="social-media-icons">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaWhatsapp /></a>
                    <a href="#"><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-2 mb-5 d-flex flex-wrap justify-content-center gap-1">
            <ServiceCard title={<>ISO <br /> Certificate</>} img="ISO-1.webp" />
            <ServiceCard title={<>GST <br /> Registration</>} img="127389.jpg" />
            <ServiceCard title="Startup India Certification" img="startup-India-certificate.webp" />
            <ServiceCard title={<>MSME <br /> Registration</>} img="MSME.webp" />
            <ServiceCard title="Trademark Registration" img="trademark-registration.webp" />
            <ServiceCard title="Seed Fund Application" img="Seed-Fund-1536x1152.webp" />
            <ServiceCard title={<>Tax <br /> Exemption</>} img="tax-exemption.webp" />
            <ServiceCard title={<>FSSAI <br /> License</>} img="FSSAI.png" />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Main;
