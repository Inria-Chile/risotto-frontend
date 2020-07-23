import React from "react";

const styles = {
  boldSection: {
    borderLeft: "2px solid #e53411",
    padding: "0 0 0 20px",
    marginLeft: "-20px",
  },
};

const Description = () => (
  <>
    <section style={styles.boldSection}>
      <h2>Risotto in a few words...</h2>
      <p>
        RISOTTO is a research support tool that applies state of the art
        unsupervised NLP and ML methods to analyze research papers freely
        available online.
      </p>
      <p>
        Risotto sorts the papers by relevance. For more information see our
        technical report.
      </p>
    </section>

    <section>
      <h3>Hierarchical topic modeling</h3>
      <p>
        RISOTTO automatically models the latent topics in the COVID-19 Open
        Research Dataset published by Allen AI. We use a two-step hierarchic
        topic modeling algorithm in order to build topics and subtopics for each
        topic. Each topic and subtopic is represented with an identifier and its
        top-5 most relevant tokens.
      </p>
      <p>
        We hope that these topics and subtopics help biomedical researchers to
        efficiently explore the most recent research advances regarding
        COVID-19.
      </p>
    </section>
  </>
);

export default Description;
