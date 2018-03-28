import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  SELECT_ARTICLE,
  SET_DATA_PAGE
} from "../actions";

const INITIAL_STATE = {
  articlesList: { articles: [], error: null, loading: false },
  dataPage: 0,
  selectedArticle: { article: null, error: null }
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articlesList: { articles: [], error: null, loading: true }
      };

    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articlesList: {
          articles: action.payload,
          error: null,
          loading: false,
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
          error: article ? null : { message: "Could not find article" }
        }
      };

    case SET_DATA_PAGE:
      return {
        ...state,
        dataPage: action.payload
      };

    default:
      return state;
  }
}
