import { connect } from "react-redux";
import {
  fetchArticles,
  fetchArticlesSuccess,
  fetchArticlesFailure,
  setDataPage
} from "../actions";
import ArticleList from "../components/ArticleList";

function mapStateToProps(state) {
  return {
    articlesList: state.articles.articlesList,
    dataPage: state.articles.dataPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: pageIndex => {
      dispatch(fetchArticles(pageIndex)).then(response => {
        dispatch(setDataPage(pageIndex)); 
        
        !response.error
          ? dispatch(fetchArticlesSuccess(response.payload.data.response.docs))
          : dispatch(fetchArticlesFailure(response.payload.data));
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
