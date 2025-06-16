import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      setFormData({
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone || '',
        address: res.data.address || '',
      });
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const data = new FormData();
    for (const key in formData) data.append(key, formData[key]);
    if (image) data.append('image', image);

    try {
      const res = await axios.put('http://localhost:5000/api/profile', data, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
      });
      setUser(res.data);
      alert('Profile updated');
    } catch (err) {
      alert('Update failed');
    }
  };

  return user ? (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input type="file" onChange={handleImage} />
      <button type="submit">Update</button>
    </form>
  ) : (
    <p>Loading...</p>
  );
};

export default UserInfo;