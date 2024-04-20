import React from 'react';
import { useDispatch } from 'react-redux';
import { addNode } from '../utils/flowSlice';

const LeftSideBar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={(e)=>dispatch(addNode())}>CreateNode</button>
      </div>
    </div>
  )
}

export default LeftSideBar;