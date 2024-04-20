import { createSlice } from "@reduxjs/toolkit";
import { addEdge, applyNodeChanges, applyEdgeChanges } from "reactflow";

export const flow = createSlice({
  name: "flow",
  initialState: {
    nodes: [
      {
        id: "start",
        type: "colorfulNode",
        data: "Start",
        position: { x: 500, y: 50 },
      },
    ],
    edges: [],
  },
  reducers: {
    addNode: (state, action) => {
      // To generate a unique id for the new node, we will use the following logic:
      let id;
      const existingIds = state.nodes.map((node) => node.id);

      for (let i = 1; ; i++) {
        id = `Node ${i}`;
        if (!existingIds.includes(id)) {
          break;
        }
      }
      const newNode = {
        id: id,
        type: "colorfulNode",
        data: id,
        position: {
          x: 80 + (Math.random() - 0.5) * 50,
          y: 200 + (Math.random() - 0.5) * 50,
        },
      };
      state.nodes.push(newNode);
    },

    updateNode: (state, action) => {
      const { id, label, bgColor } = action.payload;
      state.nodes = state.nodes.map((node) => {
        if (node.id === id) {
          node.data = { label: label };
        }
        return node;
      });
    },

    deleteNode: (state, action) => {
      const { id } = action.payload;
      state.nodes = state.nodes.filter((node) => node.id !== id);
    },

    onNodesChange: (state, action) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },
    onEdgesChange: (state, action) => {
      state.edges = applyEdgeChanges(action.payload, state.edges);
    },
    onConnect: (state, action) => {
      state.edges = addEdge(action.payload, state.edges);
    },
  },
});

export const {
  addNode,
  updateNode,
  deleteNode,
  onNodesChange,
  onEdgesChange,
  onConnect,
} = flow.actions;

export default flow.reducer;
