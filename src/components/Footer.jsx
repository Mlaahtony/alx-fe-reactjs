import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',  // Dark background color
    color: '#fff',             // White text color
    padding: '15px',           // Padding around the footer
    textAlign: 'center',       // Center the text horizontally
    fontFamily: 'Arial, sans-serif', // Apply a clean font
    fontSize: '16px',          // Font size for the footer text
    borderTop: '2px solid #fff',  // Adds a white line above the footer
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 City Lovers</p>
    </footer>
  );
};

export default Footer;

