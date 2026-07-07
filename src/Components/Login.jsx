import { useState } from "react";
import "./Login.css";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("✅ Login Successful");

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  async function googleLogin() {
    try {
      await signInWithPopup(auth, googleProvider);

      alert("✅ Google Login Successful");

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <section className="login">

      <div className="login-box">

        <h2>🔐 Login</h2>

        <form onSubmit={loginUser}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <button
          className="google-btn"
          onClick={googleLogin}
        >
          Login with Google
        </button>

        <p style={{marginTop:"20px"}}>

          Don't have an account?

          <Link to="/signup">

            Signup

          </Link>

        </p>

      </div>

    </section>
  );
}

export default Login;