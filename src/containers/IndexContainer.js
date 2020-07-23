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

  const [page, setPage] = useState(1);
  const [topicValue, setTopicValue] = useState("");
  const [subtopicValue, setSubtopicValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    get("/topics/").then(({ payload }) => {
      const { topics: fetchedTopics, subtopics: fetchedSubtopics } = payload;
      setTopics(fetchedTopics);
      setSubtopics(fetchedSubtopics);
    });
  }, []);

  useEffect(() => {
    get("/papers/", {
      topic: topicValue,
      subtopic: subtopicValue,
      search: searchValue,
      page,
    }).then(({ payload }) => {
      setPapers(payload);
    });
  }, [topicValue, subtopicValue, searchValue, page]);

  const onFilter = (topic, subtopic, search) => {
    setTopicValue(topic);
    setSubtopicValue(subtopic);
    setSearchValue(search);
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
