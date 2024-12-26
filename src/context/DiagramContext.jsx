import React, { createContext, useContext, useState } from "react";

// Create the context
const DiagramContext = createContext();

// DiagramProvider component
export const DiagramProvider = ({ children }) => {
  // State for nodes and edges
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // Function to add a new node
  const addNode = (label) => {
    const newNode = {
      id: `${nodes.length + 1}`, // Use backticks for template literals
      data: { label },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  // Function to add a new edge
  const addEdge = (source, target) => {
    const newEdge = {
      id: `e${source}-${target}`, // Use backticks for template literals
      source,
      target,
    };
    setEdges((prevEdges) => [...prevEdges, newEdge]);
  };

  return (
    <DiagramContext.Provider
      value={{
        nodes,
        setNodes, // Pass setNodes here
        edges,
        setEdges, // Pass setEdges here
        addNode,
        addEdge,
      }}
    >
      {children}
    </DiagramContext.Provider>
  );
};

// Custom hook to use the DiagramContext
export const useDiagram = () => useContext(DiagramContext);
