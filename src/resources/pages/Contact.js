import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, submit form
      console.log(form);
    }
  };

  const validate = (form) => {
    let errors = {};
    if (!form.name) errors.name = 'Name is required.';
    if (!form.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Email is invalid.';
    }
    if (!form.message) errors.message = 'Message is required.';
    return errors;
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="contact-label">
          Name:
          <input type="text" name="name" className="contact-input" onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </label>
        <label className="contact-label">
          Email:
          <input type="text" name="email" className="contact-input" onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </label>
        <label className="contact-label">
          Message:
          <textarea name="message" className="contact-textarea" onChange={handleChange} />
          {errors.message && <p>{errors.message}</p>}
        </label>
        <input type="submit" value="Send" className="contact-submit" />
      </form>
    </div>
  );
};

export default Contact;