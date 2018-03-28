import React, { Component } from "react";

class PagingNav extends Component {
  clickHandler(evt, pageIndex) {
    if (pageIndex < 0) {
      pageIndex = 0
    }

    this.props.fetchArticles(pageIndex);
  }

  render() {
    return (
      <nav className="nav">
        <button type="button" className="btn btn-link" disabled={this.props.dataPage == 0 } onClick={(evt) => this.clickHandler(evt, this.props.dataPage - 1) }>
          Prev
        </button>
        <button type="button" className="btn btn-link"  onClick={(evt) => this.clickHandler(evt, this.props.dataPage + 1) }>
          Next
        </button>
      </nav>
    );
  }
}

export default PagingNav;
