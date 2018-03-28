import React, { Component } from "react";
import ArticleDetailContainer from "../containers/ArticleDetailContainer";
import Header from "../components/Header";

class ArticleDetailPage extends Component {
  render() {
    return (
      <div className="container-fluid nopadding">
        <Header />
        <ArticleDetailContainer id={this.props.match.params.id} />
      </div>
    );
  }
}

export default ArticleDetailPage;

