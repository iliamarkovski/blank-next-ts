import React from "react";

import Wrapper from "../Wrapper/Wrapper";

import styles from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <Wrapper>Footer</Wrapper>
    </footer>
  );
};

export default Footer;
