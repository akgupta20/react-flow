import React from 'react';
import { useDispatch } from 'react-redux';
import { addNode } from '../utils/flowSlice';
import { toast } from 'react-toastify';

const CreateNode = () => {
  const dispatch = useDispatch();

  return (
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '40px',
        zIndex: 4
      
      }}>
      <button onClick={(e) => {
        dispatch(addNode());
      }}
        style={
          {
            padding: '10px',
            backgroundColor: '#3B82F6',
            color: 'white',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px'
          }
        }
      >Create Node</button>
      </div>
    
  )
}

export default CreateNode;