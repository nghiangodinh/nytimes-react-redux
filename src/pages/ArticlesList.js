import React, { Component } from "react";
import ArticleListContainer from "../containers/ArticleListContainer";
import Header from "../components/Header";


const ArticlesListPage = () => {
  return (
    <div className="container-fluid nopadding">
      <Header />
      <ArticleListContainer />
    </div>
  );
};

export default ArticlesListPage;
