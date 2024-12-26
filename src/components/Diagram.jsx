import React, { useCallback } from "react";
import  {useDiagram}  from "../context/DiagramContext";
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from "react-flow-renderer";


const Diagram = () => {
  const { nodes, setNodes, edges, setEdges, addEdge: addNewEdge } = useDiagram();

 
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  // Handle changes to edges (e.g., removing an edge)
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  // Add a new edge
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
};

export default Diagram;
