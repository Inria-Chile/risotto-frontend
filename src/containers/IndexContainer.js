import React, { useEffect, useState } from "react";

import { get } from "../networking";

import Layout from "../components/Layout/Layout";
import Description from "../components/Index/Description";
import Filters from "../components/Index/Filters";
import PaperSet from "../components/Index/PapersSet";

const IndexContainer = () => {
  const [topics, setTopics] = useState([]);
  const [subtopics, setSubtopics] = useState({});
  const [papers, setPapers] = useState({});

  useEffect(() => {
    get("/topics/").then(({ payload }) => {
      const { topics: fetchedTopics, subtopics: fetchedSubtopics } = payload;
      setTopics(fetchedTopics);
      setSubtopics(fetchedSubtopics);
    });
    get("/papers/").then(({ payload }) => {
      setPapers(payload);
    });
  }, []);

  const onFilter = (topic, subtopic, search) => {
    console.log("onFilter:", topic, subtopic, search);
  };

  return (
    <Layout>
      <Description />
      <Filters topics={topics} subtopics={subtopics} onFilter={onFilter} />
      <PaperSet {...papers} />
    </Layout>
  );
};

export default IndexContainer;
