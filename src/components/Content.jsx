import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
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
    <div style={{ height: "80vh", width: "80vw" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={(e) => dispatch(onNodesChange(e))}
        edges={edges}
        onEdgesChange={(e) => dispatch(onEdgesChange(e))}
        onConnect={(e) => dispatch(onConnect(e))}
        minZoom={true}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
      >
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Content;
