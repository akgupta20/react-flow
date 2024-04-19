import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


const nodeSlice = createSlice({
    name: 'node',
    initialState: {
        nodes:[]
    },
    reducers: {
        addNode: (state, action) => {
            state.nodes.push(action.payload);
        },
        removeNode: (state, action) => {
            state.nodes = state.nodes.filter(node => node.id !== action.payload);
        },
        updateNode: (state, action) => {
            const { id, data } = action.payload;
            const node = state.nodes.find(node => node.id === id);
            if(node){
                node.data = data;
            }
        }
    }
});

export const { addNode, removeNode, updateNode } = nodeSlice.actions;
export default nodeSlice.reducer;