import React from "react";

import logo from "../assets/inria-white.png";

const styles = {
  container: {
    display: "flex",
    color: "white",
  },
  image: {
    height: "50px",
    margin: "30px 0",
  },
  heading: {
    margin: "22px 0 22px 35px",
    height: "85px",
    padding: "0 0 0 35px",
    lineHeight: "100px",
    borderLeft: "2px solid white",
    fontSize: "2em",
  },
};

const Header = ({ style }) => {
  return (
    <section style={{ ...style, ...styles.container }}>
      <img src={logo} style={styles.image} alt="Inria" />
      <h1 style={styles.heading}>RISOTTO</h1>
    </section>
  );
};

export default Header;
