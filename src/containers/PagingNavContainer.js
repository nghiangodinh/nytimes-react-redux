import { connect } from "react-redux";

import { 
  fetchArticles,
  fetchArticlesSuccess,
  fetchArticlesFailure,
  setDataPage
} from "../actions";
import PagingNav from "../components/PagingNav";

function mapStateToProps(state, ownProps) {
  return {
    dataPage: state.articles.dataPage
  };
}

const mapDispatchToProps = dispatch => {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(PagingNav);
