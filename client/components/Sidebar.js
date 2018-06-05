import React from "react";

const Sidebar = props => {
  return (
    <div className="col-1 ">
      <div className="row ">
        <div className="col-sm-3 col-md-2">
          <div className="d-flex justify-content-end flex-wrap">
            <ul className="nav nav-sidebar">
              <li className="active">
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Type</a>
              </li>
              <li>
                <a href="#">Price</a>
              </li>
              <li>
                <a href="#">Level</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
