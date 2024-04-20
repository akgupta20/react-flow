import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import CreateNode from "./CreateNode";
import SideBar from "./Sidebar";
import {
  addNode,
  updateNode,
  onNodesChange,
  onEdgesChange,
  onConnect,
} from "../utils/flowSlice";

import "reactflow/dist/style.css";
import ColorfulNode from "../utils/ColorfulNode";
import ButtonEdge from "../utils/ButtonEdge";

const nodeTypes = {
  colorfulNode: ColorfulNode,
};

const edgeTypes = {
  buttonedge: ButtonEdge,
};

const Content = () => {
  const nodes = useSelector((store) => store.flow.nodes);
  const edges = useSelector((store) => store.flow.edges);
  const dispatch = useDispatch();

  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={(e) => dispatch(onNodesChange(e))}
      edges={edges}
      onEdgesChange={(e) => dispatch(onEdgesChange(e))}
      onConnect={(e) => dispatch(onConnect(e))}
      minZoom={true}
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <CreateNode />  {/* This is the button to create a new node */}
      <SideBar />  {/* This is the sidebar component for updating the node */}
      <MiniMap />
      <Background variant="dots" gap={12} size={1} />
      <Controls />
    </ReactFlow>
  );
};

const ReactFlowProviderContent = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "90vh",
      }}
    >
      <Content />
    </div>
  );
};

export default ReactFlowProviderContent;
