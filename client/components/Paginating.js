import React from "react";
import Button from "./Button";

const Paginating = props => {
  const { pages, changePage, page } = props;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            onClick={() => {
              props.history.goBack();
            }}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>

        <Button pages={pages} changePage={changePage} page={page} />

        <li className="page-item">
          <button
            onClick={() => {
              props.history.goForward();
            }}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginating;
