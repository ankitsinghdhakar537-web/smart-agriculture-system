import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/signup"
          element={<SignupPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;