import React from "react";
import { DiagramProvider } from "./context/DiagramContext";
import Diagram from "./components/Diagram";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <DiagramProvider>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Diagram />
      </div>
    </DiagramProvider>
  );
};

export default App;
