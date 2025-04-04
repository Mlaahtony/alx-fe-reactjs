function Services() {
    return (
      <div style={styles.page}>
        <h1>Our Services</h1>
        <ul style={styles.list}>
          <li>🌐 Web Development</li>
          <li>📱 Mobile App Development</li>
          <li>📢 Digital Marketing</li>
          <li>🧠 Business Consulting</li>
          <li>☁️ Cloud Solutions</li>
        </ul>
      </div>
    );
  }
  
  const styles = {
    page: {
      padding: "2rem",
      textAlign: "center",
      backgroundColor: "#eef9f1",
      minHeight: "80vh",
    },
    list: {
      listStyle: "none",
      padding: 0,
      fontSize: "1.1rem",
      lineHeight: "2rem"
    }
  };
  
  export default Services;
  
  
  