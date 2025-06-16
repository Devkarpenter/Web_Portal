import React from "react";
import ServiceCard from '../../components/service_card/ServiceCard';

const Services = () => {
  return (
    
      <div className="container mt-2 mb-5 d-flex flex-wrap justify-content-center gap-1 ">
        <ServiceCard
          title={
            <>
              ISO <br /> Certificate
            </>
          }
          img="ISO-1.webp"
        />
        <ServiceCard
          title={
            <>
              GST <br /> Registration
            </>
          }
          img="127389.jpg"
        />
        <ServiceCard
          title="Startup India Certification"
          img="startup-India-certificate.webp"
        />
        <ServiceCard
          title={
            <>
              MSME <br />
              Registration
            </>
          }
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
          title={
            <>
              Tax <br />
              Exemption
            </>
          }
          img="tax-exemption.webp"
        />
        <ServiceCard
          title={
            <>
              fassai <br />
              laicense
            </>
          }
          img="FSSAI.png"
        />
      </div>
    
  );
};

export default Services;
