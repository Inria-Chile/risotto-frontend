import React from "react";

const styles = {
  inputsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  inputContainer: {},
  labelContainer: {
    marginBottom: "10px",
  },
  input: {
    width: "300px",
    height: "28px",
    fontSize: "13px",
    border: "1px solid #bdbdbd",
    borderRadius: "0",
    padding: "4px 8px",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#384257",
    color: "white",
    fontWeight: "bold",
    width: "150px",
    padding: "0 10px",
    fontSize: "13px",
    height: "28px",
    lineHeight: "28px",
    border: "none",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "25px",
  },
  divider: {
    position: "relative",
  },
  dividerText: {
    backgroundColor: "white",
    paddingRight: "10px",
    color: "#7d8390",
  },
  dividerLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: "0.5em",
    borderTop: "1px solid #dce0e3",
    zIndex: -1,
  },
};

const Filters = ({}) => (
  <>
    <Divider text="See relevant papers" />
    <section style={styles.inputsContainer}>
      <DropdownInput key="topics" label="Topic" />
      <DropdownInput key="subtopics" label="Subtopic" />
      <TextInput key="search" label="Search" />
    </section>
    <section style={styles.buttonContainer}>
      <ButtonInput text="Filter" />
    </section>
    <Divider />
  </>
);

const Divider = ({ text }) => (
  <p style={styles.divider}>
    {text && <span style={styles.dividerText}>{text}</span>}
    <span style={styles.dividerLine}></span>
  </p>
);

const DropdownInput = (props) => (
  <_Input {...props}>
    <select style={styles.input} id={props.key}>
      <option value="">All</option>
      <option value="cat">Cat</option>
    </select>
  </_Input>
);

const TextInput = (props) => (
  <_Input {...props}>
    <input style={styles.input} type="text" id={props.key} />
  </_Input>
);

const ButtonInput = ({ text }) => (
  <div>
    <input style={styles.button} type="button" value={text} />
  </div>
);

const _Input = ({ key, label, children }) => (
  <div style={styles.inputContainer}>
    <div style={styles.labelContainer}>
      <label for={key}>{label}</label>
    </div>
    <div>{children}</div>
  </div>
);

export default Filters;
