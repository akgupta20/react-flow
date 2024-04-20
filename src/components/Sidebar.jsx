import React, { useEffect, useState } from "react";
import style from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateNode } from "../utils/flowSlice";
import { toggleSidebar } from "../utils/sidebarSlice";

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
    setNodeData((data) => {
      if (currNode?.data) {
        return currNode.data;
      }
      return data;
    });
  }, [currNode]);

  return (
    <div className={`${style.sidebar} ${!isOpen && style.hideSidebar} `}>
      <form onSubmit={handleUpdateSubmit} className={style.formContainer}>
        <label className={style.label} htmlFor="nodeInput">
          Node Text
        </label>
        <textarea
          rows="4"
          required
          onChange={(e) => setNodeData(e.target.value)}
          value={nodeData}
          className={style.textArea}
          id="nodeInput"
        />
        <button className={style.saveButton}>Save</button>
      </form>
    </div>
  );
};

export default SideBar;
