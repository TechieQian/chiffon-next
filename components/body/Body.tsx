import React from "react";
import styles from "./Body.module.scss";

function Body(props: any) {
  return (
    <div className={`${styles.body}`}>
      <div className={`container ${styles.content}`}>{props.children}</div>
    </div>
  );
}

export default Body;
