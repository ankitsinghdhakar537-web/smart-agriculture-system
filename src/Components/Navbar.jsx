import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🌱 Smart Agriculture
      </div>

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#features">Features</a>
        </li>

        <li>
          <a href="#weather">Weather</a>
        </li>

        <li>
          <a href="#crop">Crop</a>
        </li>

        <li>
          <a href="#dashboard">Dashboard</a>
        </li>

        <li>
          <a href="#motor">Motor</a>
        </li>

        <li>
          <a href="#advisor">AI Advisor</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;