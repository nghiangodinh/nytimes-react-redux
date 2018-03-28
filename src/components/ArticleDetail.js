import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as moment from "moment";


class ArticleDetail extends Component {
  componentDidMount() {
    this.props.selectArticle(this.props.articleId);
  }

  render() {
    const { article, error } = this.props.selectedArticle;

    if (error) {
      return <div className="alert alert-danger">{error.message}</div>;
    } else if (!article) {
      return <span />;
    }

    return (
      <div className="container-fluid">
        <h3>{article.headline.main}</h3>
        <div className="text-left text-muted">{article.source} ({moment(article.pub_date).format("MMM. DD, YYYY")})</div>
        <img src={this.getMultimediaUrl(article.multimedia, "xlarge")} className="img-fluid detail-img text-center" />
        <div>{article.snippet}</div>
        <div className="col-xs-12 text-right">
            <Link to={`/`} className="btn btn-link">Back</Link>
          </div>
      </div>
    );
  }

  getMultimediaUrl(multimedia, subtype) {
    const imageRootURL = "https://www.nytimes.com/";
    const item = multimedia.find(m => m.subtype === subtype)

    return item?  imageRootURL + item.url : "http://via.placeholder.com/600x400";
  }
}

export default ArticleDetail;
