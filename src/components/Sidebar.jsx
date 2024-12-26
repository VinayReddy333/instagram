import React, { useState } from "react";
import { useDiagram } from "../context/DiagramContext";

const Sidebar = () => {
  const { addNode, addEdge } = useDiagram();
  const [nodeLabel, setNodeLabel] = useState("");
  const [edgeSource, setEdgeSource] = useState("");
  const [edgeTarget, setEdgeTarget] = useState("");

  return (
    <div style={{ width: "300px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>Manage Diagram</h3>
      
      <h4>Add Node</h4>
      <input
        type="text"
        placeholder="Node Label"
        value={nodeLabel}
        onChange={(e) => setNodeLabel(e.target.value)}
      />
      <button onClick={() => { addNode(nodeLabel); setNodeLabel(""); }}>Add Node</button>
      
      <h4>Add Edge</h4>
      <input
        type="text"
        placeholder="Source Node ID"
        value={edgeSource}
        onChange={(e) => setEdgeSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Target Node ID"
        value={edgeTarget}
        onChange={(e) => setEdgeTarget(e.target.value)}
      />
      <button onClick={() => { addEdge(edgeSource, edgeTarget); setEdgeSource(""); setEdgeTarget(""); }}>Add Edge</button>
    </div>
  );
};

export default Sidebar;