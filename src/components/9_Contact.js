import React from 'react';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact<span></span></h2>
      {/* İçeriği daha iyi kontrol etmek için bir sarmalayıcı ekledik */}
      <div className="contact-content-wrapper">
        <p className="contact-text">
          Feel free to contact me for new projects, collaborations, or just to say hello. I will get back to your emails as soon as possible.
        </p>
        <a href="mailto:kuzaytepecagri@gmail.com" className="contact-button">
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;