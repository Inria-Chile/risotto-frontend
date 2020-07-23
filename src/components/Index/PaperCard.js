import React from "react";

const styles = {
  container: {
    background: "#f5f5f5",
    padding: "13px 0",
    margin: "2px 0",
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "min-content auto min-content",
  },
  innerContainer: {},
  rank: {
    padding: "0px 15px",
    fontSize: "1.17em",
  },
  main: {},
  title: {
    marginTop: 0,
  },
  metacontainer: {
    display: "flex",
  },
  metafield: {
    marginRight: "20px",
    marginBottom: 0,
  },
  date: {
    minWidth: "8em",
    textAlign: "center",
    borderLeft: "1px solid #acb0bb",
  },
  faded: {
    color: "#acb0bb",
  },
};

const PaperCard = ({
  rank,
  title,
  authors,
  doi,
  country,
  affiliation,
  publish_time: publishTime,
}) => (
  <section style={styles.container}>
    <div style={styles.rank}>{rank}</div>
    <div style={styles.main}>
      <h3 style={styles.title}>{title}</h3>
      {authors} <br />
      <a href={`https://doi.org/${doi}`}>{`doi.org/${doi}`}</a>
      <br />
      <div style={styles.metacontainer}>
        <p style={styles.metafield}>
          <span style={styles.faded}>Country:</span> {country ? country : "N/A"}
        </p>
        <p style={styles.metafield}>
          <span style={styles.faded}>Affiliation:</span>{" "}
          {affiliation ? affiliation : "N/A"}
        </p>
        <p style={styles.metafield}>
          <span style={styles.faded}>DOI:</span> {doi ? doi : "N/A"}
        </p>
      </div>
    </div>
    <div style={styles.date}>
      <p style={{ ...styles.faded, ...styles.title }}>Date</p>
      {publishTime}
    </div>
    {/* <div style={styles.clearfix}></div> */}
  </section>
);

export default PaperCard;
