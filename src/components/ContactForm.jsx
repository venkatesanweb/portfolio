import React, { useState } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

// Send email using EmailJS and store submission locally
    emailjs.send(
      'service_pr5hu1x',
      'template_q8ezjjp',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        reply_to: formData.email,
      },
      'hzP5KswWsGpbJTHk6'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Store submission in localStorage
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions.push(formData);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

        setLoading(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.text || error.message || 'Unknown error';
        alert('Failed to send message: ' + errorMessage + '\n\nPlease check your EmailJS credentials.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form glass-panel">
        <div className="form-group">
          <label htmlFor="name" className={formData.name ? 'active' : ''}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className={formData.email ? 'active' : ''}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className={formData.message ? 'active' : ''}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className={errors.message ? 'input-error' : ''}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        <button type="submit" className="btn-primary form-submit-btn" disabled={loading}>
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Sending...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane"></i> Send Message
            </>
          )}
        </button>
      </form>

      {isSubmitted && (
        <div className="success-modal-overlay" onClick={() => setIsSubmitted(false)}>
          <div className="success-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsSubmitted(false)}>&times;</button>
            <div className="success-icon-wrapper">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
            <button className="btn-primary" onClick={() => setIsSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
