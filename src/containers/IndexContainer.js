import React, { useEffect, useState } from "react";

import { get } from "../networking";

import Layout from "../components/Layout/Layout";
import Description from "../components/Index/Description";
import Filters from "../components/Index/Filters";
import PaperSet from "../components/Index/PapersSet";
import Pagination from "../components/Index/Pagination";

const IndexContainer = () => {
  const [topics, setTopics] = useState([]);
  const [subtopics, setSubtopics] = useState({});
  const [papers, setPapers] = useState({});

  const [page, setPage] = useState(1);
  const [topicValue, setTopicValue] = useState("");
  const [subtopicValue, setSubtopicValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const ITEMS_PER_PAGE = 10;

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
      items_per_page: ITEMS_PER_PAGE,
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
      {papers.papers && papers.papers.length > 0 && (
        <>
          <PaperSet {...papers} />
          <Pagination
            setPage={setPage}
            itemsPerPage={ITEMS_PER_PAGE}
            {...papers}
          />
        </>
      )}
    </Layout>
  );
};

export default IndexContainer;
