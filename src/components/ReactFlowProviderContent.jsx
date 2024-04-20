import React from "react";
import LeftSideBar from "./LeftSideBar";
import Content from "./Content";
import RightSideBar from "./RightSideBar";
import styles from "./ReactFlowProviderContent.module.css";

const ReactFlowProviderContent = () => {
  return (
    <div className={styles.provider}>
      <LeftSideBar />
      <Content />
      <RightSideBar />
    </div>
  );
};

export default ReactFlowProviderContent;
