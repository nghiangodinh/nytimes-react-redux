import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  SELECT_ARTICLE
} from "../actions";

const INITIAL_STATE = {
  articlesList: { articles: [], error: null, loading: false },
  dataPage: 0,
  selectedArticle: { article: null, error: null }
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      debugger;
      return {
        ...state,
        articlesList: { articles: [], error: null, loading: true },
        dataPage: action.payload
      };

    case FETCH_ARTICLES_SUCCESS:
      debugger;
      return {
        ...state,
        articlesList: {
          articles: action.payload,
          error: null,
          loading: false
        }
      };

    case FETCH_ARTICLES_FAILURE:
      error = action.payload || { message: action.payload };
      return {
        ...state,
        articlesList: { articles: [], error: error, loading: false }
      };

    case SELECT_ARTICLE:
      const article = state.articlesList.articles.find(
        item => item._id === action.payload
      );

      return {
        ...state,
        selectedArticle: {
          article: article,
          error: article
            ? null
            : { message: `Article id: [${action.payload}] does not exist` }
        }
      };

    default:
      return state;
  }
}
