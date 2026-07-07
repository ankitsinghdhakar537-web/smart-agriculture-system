import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { WeatherProvider } from "./context/WeatherContext";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(

<React.StrictMode>

<AuthProvider>

<WeatherProvider>

<App/>

</WeatherProvider>

</AuthProvider>

</React.StrictMode>

);