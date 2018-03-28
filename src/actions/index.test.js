import * as actions from "./index";
describe("actions", () => {
  it("should create a fetch articles success action", () => {
    const articles = [];
    const expectedAction = {
      type: actions.FETCH_ARTICLES_SUCCESS,
      payload: articles
    };
    expect(actions.fetchArticlesSuccess(articles)).toEqual(expectedAction);
  });

  it("should create a fetch articles failure action", () => {
    const error = { message: "could not get data" };
    const expectedAction = {
      type: actions.FETCH_ARTICLES_FAILURE,
      payload: error
    };
    expect(actions.fetchArticlesFailure(error)).toEqual(expectedAction);
  });

  it("should create a select article action", () => {
    const id = "5a93e8c3410cf7000162dfad";
    const expectedAction = {
      type: actions.SELECT_ARTICLE,
      payload: id
    };
    expect(actions.selectArticle(id)).toEqual(expectedAction);
  });

  it("should create a set data page  action", () => {
    const pageIndex = 10;
    const expectedAction = {
      type: actions.SET_DATA_PAGE,
      payload: pageIndex
    };
    expect(actions.setDataPage(pageIndex)).toEqual(expectedAction);
  });
});
