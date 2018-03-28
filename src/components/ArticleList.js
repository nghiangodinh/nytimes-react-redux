import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as moment from "moment";

import  PagingNavContainer from "../containers/PagingNavContainer"

class ArticleList extends Component {
  componentDidMount() {
    this.props.fetchArticles(this.props.dataPage);
  }

  
  renderArticles(articles) {
    return articles.map(article => {
      return (
        <li key={article._id} className="list-group-item row">
          <div className="d-flex flex-row">
            <img src={this.getMultimediaUrl(article.multimedia, "articleInline")} className="img-fluid pull-left item-img" />
            <span className="float-right">{article.snippet}</span>
          </div>
          <div className="col-xs-12 text-right text-muted">{article.source} ({moment(article.pub_date).format("MMM. DD, YYYY")})</div>
          <div className="col-xs-12 text-right">
            <Link to={`/${article._id}`} className="btn btn-link">View Details</Link>
          </div>
        </li>
      );
    });
  }

  render() {
    const { articles, loading, error } = this.props.articlesList;

    if (loading) {
      return (
        <div className="container">
          <h3>Loading...</h3>
        </div>
      );
    } else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>;
    }
    
    return (
      <div className="container">
        <PagingNavContainer />
        <ul className="list-group">{this.renderArticles(articles)}</ul>
      </div>
    );
  }

  getMultimediaUrl(multimedia, subtype) {
    const imageRootURL = "https://www.nytimes.com/";
    const item = multimedia.find(m => m.subtype === subtype)

    return item?  imageRootURL + item.url : "http://via.placeholder.com/190x127";
  }

}

export default ArticleList;
