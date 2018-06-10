import React, { Component } from "react";
import { connect } from "react-redux";

const Button = props => {
  const { pages, changePage } = props;
  let numOfPages = [];
  for (let i = 0; i < pages; i++) {
    numOfPages.push(i + 1);
  }

  return (
    <div className="inline-display:before">
      <ul className="pagination justify-content-center">
        {numOfPages.map(num => {
          return (
            <li key={num} className="page-item">
              <button
                value={num}
                className="btn btn-info" onClick={evt => {
                  changePage(evt.target.value);
                }}
              >
                {num}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Button;
