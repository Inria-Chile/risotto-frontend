import React from "react";

const styles = {
  inputsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
};

const Filters = ({}) => (
  <>
    <hr />
    <section style={styles.inputsContainer}>
      <DropdownInput key="topics" label="Topic" />
      <DropdownInput key="subtopics" label="Subtopic" />
      <TextInput key="search" label="Search" />
    </section>
    <section style={styles.buttonContainer}>
      <ButtonInput text="Filter" />
    </section>
  </>
);

const DropdownInput = ({ key, label }) => (
  <div>
    <div>
      <label for={key}>{label}</label>
    </div>
    <div>
      <select id={key}>
        <option value="">--Please choose an option--</option>
        <option value="cat">Cat</option>
      </select>
    </div>
  </div>
);

const TextInput = ({ key, label }) => (
  <div>
    <div>
      <label for={key}>{label}</label>
    </div>
    <div>
      <input type="text" id={key} />
    </div>
  </div>
);

const ButtonInput = ({ text }) => (
  <div>
    <input type="button" value={text} />
  </div>
);

export default Filters;
