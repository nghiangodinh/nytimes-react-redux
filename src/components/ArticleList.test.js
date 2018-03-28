import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArticleList from "./ArticleList";
import * as moment from "moment"

Enzyme.configure({ adapter: new Adapter() });

const article = {
  _id: "5a93e8c3410cf7000162dfad",
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

function setup() {
  const props = {
    articlesList: { articles: [article], error: null, loading: false },
    dataPage: 0,
    fetchArticles: jest.fn()
  };

  const enzymeWrapper = mount(<ArticleList {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("ArticleList components", () => {
  it("should render self and subcomponents", () => {
    // const { enzymeWrapper } = setup();

    // expect(enzymeWrapper.find("ul").hasClass("list-group")).toBe(true);
    // expect(enzymeWrapper.find("li").hasClass("list-group-item row")).toBe(true);
    // // TODO: can access more UI element
  });
});
