import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Apply.css';
import Header from '../../components/header/Header';

const Apply = () => {
  const location = useLocation();
  const { title, img } = location.state || {
    title: 'Service',
    img: 'default-service.jpg', // fallback image if no service is passed
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: title,
    message: '',
    documents: {
      aadhaar: null,
      pan: null,
      business: null,
      extra: null,
    },
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [name]: files[0],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, documents } = formData;
    if (!name || !email || !phone) {
      alert('Please fill out all required fields (name, email, phone).');
      return;
    }

    if (!documents.aadhaar || !documents.pan) {
      alert('Please upload required documents: Aadhaar and PAN card.');
      return;
    }

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('service', formData.service);
    form.append('message', formData.message);
    form.append('aadhaar', documents.aadhaar);
    form.append('pan', documents.pan);
    form.append('business', documents.business);
    form.append('extra', documents.extra);

    alert('✅ Application submitted with documents!');
    console.log('FormData ready to send to backend.');
  };

  return (
    <>
      <Header />
      <div className="apply-wrapper">
        <div className="apply-left">
          <img src={`/${img}`} alt="Service" className="service-image" />
          <div className="process-info">
            <h4>⏳ Processing Time</h4>
            <p>
              It typically takes <strong>5–7 business days</strong> to complete the{' '}
              {title} process.
            </p>
          </div>
        </div>

        <div className="apply-right">
          <h2>Apply for {title}</h2>
          <form onSubmit={handleSubmit} className="apply-form" encType="multipart/form-data">
            <label>
              Full Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email Address:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Aadhaar Card:
              <input
                type="file"
                name="aadhaar"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                required
              />
            </label>

            <label>
              PAN Card:
              <input
                type="file"
                name="pan"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                required
              />
            </label>

            <label>
              Business Registration Document:
              <input
                type="file"
                name="business"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
              />
            </label>

            <label>
              Extra Document (optional):
              <input
                type="file"
                name="extra"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
              />
            </label>

            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requirements?"
              />
            </label>

            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Apply;
