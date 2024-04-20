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
const nodeTypes = {
  colorfulNode: ColorfulNode,
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
        onEdgesChange={(e) => dispatchonEdgesChange(e)}
        onConnect={(e) => dispatch(onConnect(e))}
        minZoom={true}
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
