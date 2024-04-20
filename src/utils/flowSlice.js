import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
          x: 400 + (Math.random() - 0.5) * 50,
          y: 300 + (Math.random() - 0.5) * 50,
        },
      };
      state.nodes.push(newNode);
      toast.success(`${id} created scuccessfully!`);
    },

    updateNode: (state, action) => {
      const { id, data } = action.payload;
      console.log(action.payload)
      state.nodes = state.nodes.map((node) => {
        if (node.id === id) {
          node.data = data;
        }
        return node;
      });
      toast.success(`Node updated successfully!`);
    },

    deleteNode: (state, action) => {
      const { id } = action.payload;
      state.nodes = state.nodes.filter((node) => node.id !== id);
      toast.success(`Node deleted successfully!`);
    },

    onNodesChange: (state, action) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },
    onEdgesChange: (state, action) => {
      state.edges = applyEdgeChanges(action.payload, state.edges);
      toast.success(`Edge deleted successfully!`)
    },
    onConnect: (state, action) => {
      state.edges = addEdge({ ...action.payload, type: 'buttonedge' }, state.edges);
      toast.success(`Edge created successfully!`)
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
