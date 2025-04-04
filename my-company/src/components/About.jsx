function About() {
    return (
      <div style={styles.page}>
        <h1>About My Company</h1>
        <p>
          My Company was founded with the vision to empower businesses through
          innovative digital solutions. Our team is passionate, creative, and
          committed to excellence.
        </p>
      </div>
    );
  }
  
  const styles = {
    page: {
      padding: "2rem",
      textAlign: "center",
      backgroundColor: "#f0f0f5",
      minHeight: "80vh",
    }
  };
  
  export default About;
  
  
  