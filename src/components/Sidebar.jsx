import React, { useEffect, useState } from "react";
import style from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateNode } from "../utils/flowSlice";
import { toggleSidebar } from "../utils/sidebarSlice";
import close from "/close.svg";

const SideBar = () => {
  const dispatch = useDispatch();
  const [nodeData, setNodeData] = useState("");
  const nodes = useSelector((store) => store.flow.nodes);
  const { isOpen, nodeId } = useSelector((store) => store.sidebar);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNode({ id: nodeId, data: nodeData }));
    dispatch(toggleSidebar({ isOpen: false, nodeId: null }));
  };

  const currNode = nodes?.find((node) => node.id === nodeId);

  useEffect(() => {
    setNodeData(currNode?.data || "");
  }, [currNode]);

  return (
    <div className={`${style.sidebar} ${isOpen ? style.open : style.close}`}>
      <div>
        <button  onClick={e=> dispatch(toggleSidebar({isOpen:false,nodeId:null}))} className={style.backBtn} title="Back to graph">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/left.png" alt="left"/>
        </button>
      </div>
      <form onSubmit={handleUpdateSubmit} className={style.formContainer}>
        <div className={style.label}>
          <label htmlFor="nodeInput">Node Text</label>
        </div>
        <textarea
          rows="4"
          required
          onChange={(e) => setNodeData(e.target.value)}
          value={nodeData}
          className={style.textArea}
          id="nodeInput"
        />
        <div>
          <button className={style.saveButton}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
