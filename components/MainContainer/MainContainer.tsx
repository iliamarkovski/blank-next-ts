import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./MainContainer.module.scss";

type Props = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainContainer;
