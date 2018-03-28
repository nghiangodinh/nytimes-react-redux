import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectArticle } from "../actions";
import ArticleDetail from "../components/ArticleDetail";

const mapStateToProps = (state, ownProps) => {
  return {
    selectedArticle: state.articles.selectedArticle,
    articleId: ownProps.id
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectArticle }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
