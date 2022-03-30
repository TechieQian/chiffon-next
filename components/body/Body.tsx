import React from "react";
import styles from "./Body.module.scss";
import cn from "classnames";

interface BodyProps {
  className?: string;
}

const Body: React.FC<BodyProps> = ({ children, className }) => {
  return (
    <main className={`${styles.body}`}>
      <div className={cn(`container`, className)}>{children}</div>
    </main>
  );
};

export default Body;
