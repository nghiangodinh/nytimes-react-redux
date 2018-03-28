import axios from "axios";

/*
 * other constants
 */
const API_KEY = "3fb62313faa24bcf8360826e28d4a1a1";
const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=singapore&page=`;

/*
 * Article action type
 */
export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";
export const SELECT_ARTICLE = "SELECT_ARTICLE";
export const SET_DATA_PAGE = "SET_DATA_PAGE";

/*
 * action creators
 */
export function fetchArticles(page) {
  const url = `${ROOT_URL}${page}`;
  const request = axios.get(url);

  return {
    type: FETCH_ARTICLES,
    payload: request 
  };
}

export function fetchArticlesSuccess(articles) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles
  };
}

export function fetchArticlesFailure(error) {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: error
  };
}

export const selectArticle = id => ({
  type: SELECT_ARTICLE,
  payload: id
});

export const setDataPage = pageIndex => ({
  type: SET_DATA_PAGE,
  payload: pageIndex
});
