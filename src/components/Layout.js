import React from "react";

import Header from "./Header";

import "normalize.css";
import "../assets/fonts.css";

const styles = {
  fullWidthHeaderContainer: {
    background: "#e53411",
  },
  headerContainer: {
    maxWidth: "960px",
    margin: "0 auto",
  },
};

const Layout = ({ children }) => {
  return (
    <>
      <header style={styles.fullWidthHeaderContainer}>
        <Header style={styles.headerContainer} />
      </header>
      {children}
    </>
  );
};

export default Layout;
