import React from "react";

import Wrapper from "../Wrapper/Wrapper";

import styles from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <Wrapper>Header</Wrapper>
    </header>
  );
};

export default Header;
