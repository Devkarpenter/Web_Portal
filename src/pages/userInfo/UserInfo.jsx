import React, { useState } from "react";
import "./UserInfo.css";
import { MdContactEmergency } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

const UserInfo = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    address: "123 Main Street, New Delhi",
    role: "Entrepreneur",
    joined: "January 12, 2024"
  });

  const [editField, setEditField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const handleEditClick = (key) => {
    setEditField(key);
    setTempValue(user[key]);
  };

  const handleSave = () => {
    setUser({ ...user, [editField]: tempValue });
    setEditField(null);
  };

  const handleCancel = () => {
    setEditField(null);
    setTempValue("");
  };

  return (
    <div className="user-info-container">
      <h1>Account Information</h1>
      <div className="user-card">
        <MdContactEmergency size={40} />
        <h2>Personal Information</h2>

        {Object.entries(user).map(([key, value]) => (
          <div className="info-group" key={key}>
            <span className="label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
            {editField === key ? (
              <>
                <input
                  type="text"
                  className="input-edit"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                />
                <button className="btn save" onClick={handleSave}>Save</button>
                <button className="btn cancel" onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <>
                <span>{value}</span>
                {key !== "joined" && (
                  <FaAngleRight
                    className="edit-icon"
                    onClick={() => handleEditClick(key)}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
