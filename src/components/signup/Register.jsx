import React, { useState } from 'react';
import './Register.css';
import Header from '../header/Header';
import {countriesAndCities } from '../../location/location' // Assuming you have a JSON file with country and city data

const SignUp = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const getCities = () => {
    const selected = countriesAndCities.find(c => c.country === selectedCountry);
    return selected ? selected.cities : [];
  };

  return (
    <>
      <Header isAuthPage={true} />
      <div className='form-container'>
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="text" placeholder="Company Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="Gender" required />

          {/* Country Dropdown */}
          <select value={selectedCountry} onChange={handleCountryChange} required>
            <option value="">Select Country</option>
            {countriesAndCities.map((item, idx) => (
              <option key={idx} value={item.country}>{item.country}</option>
            ))}
          </select>

          {/* City Dropdown */}
          <select
            value={selectedCity}
            onChange={handleCityChange}
            required
            disabled={!selectedCountry}
          >
            <option value="">Select City</option>
            {getCities().map((city, idx) => (
              <option key={idx} value={city}>{city}</option>
            ))}
          </select>

          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
        </form>

        <p>Already have an account? <a href="/login">Login</a></p>
        <p>
          By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
    </>
  );
};

export default SignUp;
