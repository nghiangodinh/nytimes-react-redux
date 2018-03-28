import * as actions from './index';
 
describe('actions', () => {
  it('should create an action to fetch articles successfully', () => {
    const articles = [];
    const expectedAction = {
      type: actions.FETCH_ARTICLES_SUCCESS,
      payload: articles
    };
    expect(actions.fetchArticlesSuccess(articles)).toEqual(expectedAction);
  })
});