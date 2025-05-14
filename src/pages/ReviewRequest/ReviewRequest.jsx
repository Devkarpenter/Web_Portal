import React, { useEffect, useState } from "react";
import "./ReviewRequest.css"; // Style it as per your project

const ReviewRequest = () => {
  const [requests, setRequests] = useState([]);

  // Dummy data (replace this with API call)
  useEffect(() => {
    // Simulate fetching from an API
    setRequests([
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        requestType: "ISO Certificate",
        status: "pending",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        requestType: "GST Registration",
        status: "pending",
      },
    ]);
  }, []);

  const handleAction = (id, action) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: action } : req
      )
    );
    // You can call an API here to persist the action
  };

  return (
    <div className="review-requests-container">
      <h2>Review Requests</h2>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul className="request-list">
          {requests.map((req) => (
            <li key={req.id} className={`request-card ${req.status}`}>
              <div>
                <strong>{req.name}</strong> requested for <b>{req.requestType}</b>
                <p>Email: {req.email}</p>
              </div>
              <div className="actions">
                {req.status === "pending" ? (
                  <>
                    <button onClick={() => handleAction(req.id, "approved")}>✅ Approve</button>
                    <button onClick={() => handleAction(req.id, "rejected")}>❌ Reject</button>
                  </>
                ) : (
                  <span>Status: <strong>{req.status}</strong></span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewRequest;
