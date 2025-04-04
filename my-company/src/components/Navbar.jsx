import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/services" style={styles.link}>Services</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#2c3e50",
    padding: "1rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  ul: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "bold",
    transition: "color 0.3s",
  }
};

export default Navbar;
