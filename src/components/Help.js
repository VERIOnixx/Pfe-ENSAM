import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-page">
      <h1>Support & Help</h1>
      <p>If you need assistance, please check the information below or contact our support team.</p>

      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>How to use the search functionality?</li>
        <p>You can search for a user by typing their name in the search bar on the homepage.</p>
        <li>How to contact support?</li>
        <p>Email us at support@work.com or call +212 623-431415.</p>
      </ul>

      <h2>Contact Us</h2>
      <p>Email: support@work.com</p>
      <p>Phone: +212 623-431415</p>
    </div>
  );
};

export default Help;
