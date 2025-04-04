function Home() {
    return (
      <div style={styles.page}>
        <h1>Welcome to My Company</h1>
        <p>We’re glad you’re here. Let’s build something amazing together.</p>
      </div>
    );
  }
  
  const styles = {
    page: {
      padding: "2rem",
      textAlign: "center",
      backgroundColor: "#f4f6f8",
      minHeight: "80vh",
    }
  };
  
  export default Home;
  