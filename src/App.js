import React from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { UserProvider } from "./components/Context/user-context";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="wrapper">
      <UserProvider>
        <Dashboard />
      </UserProvider>
    </div>
  );
}

export default App;
