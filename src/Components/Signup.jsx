import { useState } from "react";
import "./Signup.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signupUser(e) {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("✅ Account Created Successfully");

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <section className="login">

      <div className="login-box">

        <h2>📝 Signup</h2>

        <form onSubmit={signupUser}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p style={{ marginTop: "20px" }}>
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </section>
  );
}

export default Signup;