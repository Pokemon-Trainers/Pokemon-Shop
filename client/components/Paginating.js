import React, { Component } from "react";
import Button from "./Button";
import { connect } from "react-redux";

class Paginating extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      pages,
      changePage,
      page,
      minusOnePage,
      plusOnePage,
      typeFilter,
      priceFilter
    } = this.props;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button
              className="btn btn-info"
              onClick={() => {
                if (page > 1 && page <= pages) {
                  let newPage = minusOnePage(page);
                  changePage(newPage);
                }
              }}
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </button>
          </li>

          <Button pages={pages} changePage={changePage} page={page} />

          <li className="page-item">
            <button
              className="btn btn-info"
              onClick={() => {
                if (page >= 1 && page < pages) {
                  let newPage = plusOnePage(page);
                  changePage(newPage);
                }
              }}
            >
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapState = (state, ownProps) => {
  let pageNum = ownProps.history.location.search.length - 1;
  console.log("ownProps", ownProps);
  return {
    page:
      ownProps.typeFilter || ownProps.priceFilter
        ? 1
        : ownProps.history.location.search[pageNum] || 1
  };
};

export default connect(mapState)(Paginating);
