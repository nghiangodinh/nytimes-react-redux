import reducer from "./ArticlesReducer";
import * as actions from "../actions";

const INITIAL_STATE = {
  articlesList: { articles: [], error: null, loading: false },
  dataPage: 0,
  selectedArticle: { article: null, error: null }
};
const id = "5a93e8c3410cf7000162dfad";
const notexistedId = "5a93e8c3410cf7000162dfad_pading";

const article = {
  _id: id,
  snippet:
    "As New York considers congestion pricing, the systems used in London, Singapore and Stockholm could provide a valuable road map.",
  pub_date: "2018-02-26T11:00:14+0000",
  multimedia: [
    {
      rank: 0,
      subtype: "xlarge",
      caption: null,
      credit: null,
      type: "image",
      url:
        "images/2018/02/27/nyregion/00congestioncities1/00congestioncities1-articleLarge-v3.jpg",
      height: 400,
      width: 600,
      legacy: {
        xlargewidth: 600,
        xlarge:
          "images/2018/02/27/nyregion/00congestioncities1/00congestioncities1-articleLarge-v3.jpg",
        xlargeheight: 400
      },
      subType: "xlarge",
      crop_name: "articleLarge"
    },
    {
      rank: 0,
      subtype: "wide",
      caption: null,
      credit: null,
      type: "image",
      url:
        "images/2018/02/27/nyregion/00congestioncities1/00congestioncities1-thumbWide-v3.jpg",
      height: 126,
      width: 190,
      legacy: {
        wide:
          "images/2018/02/27/nyregion/00congestioncities1/00congestioncities1-thumbWide-v3.jpg",
        widewidth: 190,
        wideheight: 126
      },
      subType: "wide",
      crop_name: "thumbWide"
    }
  ]
};

describe("ArticlesReducer test", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should handle FETCH_ARTICLE_REQUEST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: actions.FETCH_ARTICLES_REQUEST,
        payload: 10
      })
    ).toEqual({
      ...INITIAL_STATE,
      articlesList: { articles: [], error: null, loading: true },
      dataPage: 10
    });
  });

  it("should handle FETCH_ARTICLES_SUCCESS", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: actions.FETCH_ARTICLES_SUCCESS,
        payload: [article]
      })
    ).toEqual({
      ...INITIAL_STATE,
      articlesList: {
        articles: [article],
        error: null,
        loading: false
      }
    });
  });

  it("should handle FETCH_ARTICLES_FAILURE", () => {
    const error = { message: "Error message here" };
    expect(
      reducer(INITIAL_STATE, {
        type: actions.FETCH_ARTICLES_FAILURE,
        payload: error
      })
    ).toEqual({
      ...INITIAL_STATE,
      articlesList: { articles: [], error: error, loading: false }
    });
  });

  it("should handle SELECT_ARTICLE sucessfully", () => {
    expect(
      reducer(
        {
          articlesList: { articles: [article], error: null, loading: false },
          selectedArticle: { article: null, error: null }
        },
        {
          type: actions.SELECT_ARTICLE,
          payload: id
        }
      )
    ).toEqual({
      articlesList: { articles: [article], error: null, loading: false },
      selectedArticle: {
        article: article,
        error: null
      }
    });
  });

  it("should handle SELECT_ARTICLE failure", () => {
    expect(
      reducer(
        {
          articlesList: { articles: [article], error: null, loading: false },
          selectedArticle: { article: null, error: null }
        },
        {
          type: actions.SELECT_ARTICLE,
          payload: notexistedId
        }
      )
    ).toEqual({
      articlesList: { articles: [article], error: null, loading: false },
      selectedArticle: {
        article: undefined,
        error: { message: `Article id: [${notexistedId}] does not exist` }
      }
    });
  });
});
