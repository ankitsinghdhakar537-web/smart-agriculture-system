import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    alert("✅ Logout Successful");
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <div className="logo">
        🌱 Smart Agriculture
      </div>

      <ul className="nav-links">

        <li><a href="#home">🏠 Home</a></li>

        <li><a href="#weather">🌦 Weather</a></li>

        <li><a href="#dashboard">📊 Dashboard</a></li>

        <li><a href="#advisor">🤖 AI Advisor</a></li>

        <li><a href="#contact">📞 Contact</a></li>

        {user && (
          <>
            <li>
              <Link to="/profile">👤 Profile</Link>
            </li>

            <li className="user-email">
              👋 {user.email.split("@")[0]}
            </li>

            <li>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        )}

        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;