// src/ContentSection.js
import React from 'react';
import './ContentSection.css';

const ContentSection = ({ id, title, content }) => {
  return (
    <section id={id} className="content-section">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default ContentSection;
