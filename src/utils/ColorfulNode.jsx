import { useState } from "react";
import { useDispatch } from "react-redux";
import {deleteNode} from "../utils/flowSlice";
import { Handle, Position } from "reactflow";
import styles from "./ColorfulNode.module.css";
import close from "/public/close.svg"; 


const ColorfulNode = ({ id, data, isConnectable }) => {
  const [deleteIconVisible, setDeleteIconVisible] = useState(false);

  const dispatch = useDispatch();

  const removeNode = (e) => {
    console.log("deleteNode");
    console.log(id);
    dispatch(deleteNode({ id: id }));
  };

  return (
    <div
      className="colorful-node"
      onMouseOver={() => setDeleteIconVisible(true)}
      onMouseOut={() => setDeleteIconVisible(false)}
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
