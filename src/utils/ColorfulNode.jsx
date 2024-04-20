import { useState } from "react";
import { useDispatch } from "react-redux";
import {deleteNode} from "../utils/flowSlice";
import { Handle, Position } from "reactflow";
import styles from "./ColorfulNode.module.css";
import close from "/close.svg"; 
import {  toggleSidebar } from "./sidebarSlice";


const ColorfulNode = ({ id, data, isConnectable }) => {
  const [deleteIconVisible, setDeleteIconVisible] = useState(false);

  const dispatch = useDispatch();

  const removeNode = (e) => {
    console.log("deleteNode");
    e.stopPropagation(); // To prevent the event from bubbling up to the parent element
    console.log(id);
    dispatch(deleteNode({ id: id }));
  };

  return (
    <div
      className="colorful-node"
      onMouseOver={() => setDeleteIconVisible(true)}
      onMouseOut={() => setDeleteIconVisible(false)}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(toggleSidebar({ isOpen: true, nodeId: id }));
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className={styles.data}>{data}
      </div>
      <button
        onClick={removeNode}
        className={`${styles.delete} ${!deleteIconVisible && styles.invisible}`}
      >
        <img src={close} alt="delete" title={"Delete " + data} />
      </button>

      

      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default ColorfulNode;
