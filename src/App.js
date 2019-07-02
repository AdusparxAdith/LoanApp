import React from "react";
import Dashboard from "./components/Layout/Dashboard";
import "./App.css";
import { UserProvider } from "./components/Context/user-context";

// User Provider provides global state across the app to its children
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
