import React, { useState } from "react";

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

const Filters = ({ topics, subtopics, onFilter }) => {
  const [topicValue, setTopicValue] = useState("");
  const [subtopicValue, setSubtopicValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const onTopicChange = (ev) => {
    const { value } = ev.target;
    setTopicValue(value);
  };

  const onSubtopicChange = (ev) => {
    const { value } = ev.target;
    setSubtopicValue(value);
  };

  const onSearchChange = (ev) => {
    const { value } = ev.target;
    setSearchValue(value);
  };

  const onFilterClick = () => {
    onFilter(topicValue, subtopicValue, searchValue);
  };

  return (
    <section>
      <Divider text="See relevant papers" />
      <section style={styles.inputsContainer}>
        <DropdownInput
          id="topics"
          label="Topic"
          data={topics}
          value={topicValue}
          onChange={onTopicChange}
        />
        <DropdownInput
          id="subtopics"
          label="Subtopic"
          data={subtopics[topicValue]}
          value={subtopicValue}
          onChange={onSubtopicChange}
        />
        <TextInput
          id="search"
          label="Search"
          value={searchValue}
          onChange={onSearchChange}
        />
      </section>
      <section style={styles.buttonContainer}>
        <ButtonInput text="Filter" onClick={onFilterClick} />
      </section>
      <Divider />
    </section>
  );
};

const Divider = ({ text }) => (
  <p style={styles.divider}>
    {text && <span style={styles.dividerText}>{text}</span>}
    <span style={styles.dividerLine}></span>
  </p>
);

const DropdownInput = (props) => {
  const { data, value, onChange } = props;
  return (
    <BaseInput {...props}>
      <select
        style={styles.input}
        id={props.id}
        value={value}
        onChange={onChange}
      >
        <option value="">All</option>
        {data &&
          data.map(([label, value]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
      </select>
    </BaseInput>
  );
};

const TextInput = (props) => {
  const { value, onChange } = props;
  return (
    <BaseInput {...props}>
      <input
        style={styles.input}
        type="text"
        id={props.id}
        value={value}
        onChange={onChange}
      />
    </BaseInput>
  );
};

const ButtonInput = ({ text, onClick }) => (
  <div>
    <input style={styles.button} type="button" value={text} onClick={onClick} />
  </div>
);

const BaseInput = ({ id, label, children }) => (
  <div style={styles.inputContainer}>
    <div style={styles.labelContainer}>
      <label htmlFor={id}>{label}</label>
    </div>
    <div>{children}</div>
  </div>
);

export default Filters;
