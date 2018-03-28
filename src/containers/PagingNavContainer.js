import { connect } from "react-redux";

import { fetchArticles } from "../actions";
import PagingNav from "../components/PagingNav";

const mapStateToProps = (state, ownProps) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(PagingNav);
