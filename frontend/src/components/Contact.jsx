import React, { useState } from "react";
import "../styles/Contact.css"; // External CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link
    const subject = encodeURIComponent(`Query from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:sgc@iitpkd.ac.in?subject=${subject}&body=${body}`;

    // Redirect to email client
    window.location.href = mailtoLink;

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">Send Email</button>
      </form>
    </div>
  );
};

export default ContactForm;
