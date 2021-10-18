import React, { ReactElement } from "react";
import styles from "./styles/Main.module.css";

const Main = (): ReactElement => {
  return (
    <section className={styles.main}>
      <h1 className="primary-color">React Accelerator</h1>
    </section>
  );
};

export default Main;
