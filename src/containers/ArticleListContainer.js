import { connect } from "react-redux";
import { fetchArticles } from "../actions";
import ArticleList from "../components/ArticleList";

const mapStateToProps = state => {
  return {
    articlesList: state.articles.articlesList,
    dataPage: state.articles.dataPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: pageIndex => {
      fetchArticles(pageIndex)(dispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
