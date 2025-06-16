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

import { motion } from "framer-motion";

const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header isMainPage={true} />

      <div
        id="MainPage"
        className={`dashboard-layout ${sidebarOpen ? "sidebar-open" : ""}`}
      >
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>

        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            <li>
              <a href="/about">📖 About Us</a>
            </li>
            <li>
              <a href="/contact">📞 Contact</a>
            </li>
            <li>
              <a href="/login">🔐 Login</a>
            </li>
            <li>
              <a href="/register">📝 Register</a>
            </li>
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
                    <p className="title-para-1">
                      Build Your Business with Acoworlds
                    </p>
                    <p className="title-para-2">
                      Empowering Entrepreneurs with Seamless Certification,
                      Registration, and Business Support Solutions
                    </p>
                  </div>

                  <div className="social-media-icons">
                    <a href="#">
                      <FaInstagram />
                    </a>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                    <a href="#">
                      <FaWhatsapp />
                    </a>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-2 mb-5 d-flex flex-wrap justify-content-center gap-1">
            {[
              {
                title: (
                  <>
                    ISO <br /> Certificate
                  </>
                ),
                img: "ISO-1.webp",
              },
              {
                title: (
                  <>
                    GST <br /> Registration
                  </>
                ),
                img: "127389.jpg",
              },
              {
                title: "Startup India Certification",
                img: "startup-India-certificate.webp",
              },
              {
                title: (
                  <>
                    MSME <br /> Registration
                  </>
                ),
                img: "MSME.webp",
              },
              {
                title: "Trademark Registration",
                img: "trademark-registration.webp",
              },
              {
                title: "Seed Fund Application",
                img: "Seed-Fund-1536x1152.webp",
              },
              {
                title: (
                  <>
                    Tax <br /> Exemption
                  </>
                ),
                img: "tax-exemption.webp",
              },
              {
                title: (
                  <>
                    FSSAI <br /> License
                  </>
                ),
                img: "FSSAI.png",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard title={card.title} img={card.img} />
              </motion.div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Main;
