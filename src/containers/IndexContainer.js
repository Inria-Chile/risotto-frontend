import React from "react";

import Layout from "../components/Layout/Layout";
import Description from "../components/Index/Description";
import Filters from "../components/Index/Filters";

const IndexContainer = () => {
  return (
    <Layout>
      <Description />
      <Filters />
    </Layout>
  );
};

export default IndexContainer;
