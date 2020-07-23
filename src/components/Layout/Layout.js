import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import "normalize.css";
import "../../assets/fonts.css";

const styles = {
  fullWidthHeaderContainer: {
    background: "#e53411",
  },
  fullWidthFooterContainer: {
    background: "#384257",
  },
  container: {
    maxWidth: "1136px",
    margin: "0 auto",
    fontSize: "14px",
  },
};

const Layout = ({ children }) => {
  return (
    <>
      <header style={styles.fullWidthHeaderContainer}>
        <Header style={styles.container} />
      </header>
      <section style={styles.container}>{children}</section>
      <footer style={styles.fullWidthFooterContainer}>
        <Footer style={styles.container} />
      </footer>
    </>
  );
};

export default Layout;
