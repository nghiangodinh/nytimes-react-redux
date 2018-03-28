/*
 * other constants
 */
const API_KEY = "3fb62313faa24bcf8360826e28d4a1a1";
const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=singapore&page=`;

/*
 * Article action type
 */
export const FETCH_ARTICLES_REQUEST = "FETCH_ARTICLES_REQUEST";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";
export const SELECT_ARTICLE = "SELECT_ARTICLE";

/*
 * action creators
 */

const fetchArticlesRequest = pageIndex => {
  return {
    type: FETCH_ARTICLES_REQUEST,
    payload: pageIndex
  };
};

const fetchArticlesSuccess = body => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: body.response.docs
  };
};

const fetchArticlesFailure = error => {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: error
  };
};

export const fetchArticles = pageIndex => {
  return dispatch => {
    dispatch(fetchArticlesRequest(pageIndex));
    const url = `${ROOT_URL}${pageIndex}`;

    return fetch(url)
      .then(res => res.json())
      .then(body => dispatch(fetchArticlesSuccess(body)))
      .catch(ex => dispatch(fetchArticlesFailure(ex)));
  };
};

export const selectArticle = id => ({
  type: SELECT_ARTICLE,
  payload: id
});
