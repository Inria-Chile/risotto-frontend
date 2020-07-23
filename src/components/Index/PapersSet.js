import React from "react";

import PaperCard from "./PaperCard";

const PaperSet = ({
  num_pages: numPages,
  num_results: numResults,
  papers,
  page,
}) => {
  if (!papers) {
    return "Cargando...";
  }
  return (
    <section>
      <p>{numResults.toLocaleString()} results</p>
      {papers.map((paper) => (
        <PaperCard key={paper.doi} {...paper} />
      ))}
    </section>
  );
};

export default PaperSet;
