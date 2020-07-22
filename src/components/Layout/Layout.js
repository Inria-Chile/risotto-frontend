import React from "react";

import Header from "./Header";

import "normalize.css";
import "../../assets/fonts.css";

const styles = {
  fullWidthHeaderContainer: {
    background: "#e53411",
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
  },
};

const Layout = ({ children }) => {
  return (
    <>
      <header style={styles.fullWidthHeaderContainer}>
        <Header style={styles.container} />
      </header>
      <section style={styles.container}>{children}</section>
    </>
  );
};

export default Layout;
