import React from 'react';

const MainContent = () => {
  const mainStyle = {
    backgroundColor: '#f0f8ff', // Light blue background
    padding: '20px',             // Add padding around the content
    textAlign: 'center',         // Center the text
    borderRadius: '8px',         // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
    fontFamily: 'Arial, sans-serif', // Apply a clean font
    color: '#333',               // Dark text color
  };

  return (
    <main style={mainStyle}>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
};

export default MainContent;

