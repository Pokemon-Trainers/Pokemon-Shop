import React from "react";
import { connect } from "react-redux";

import { removeReview } from "../../store/review";
import { fetchUsers, updatingUser } from "../../store/allusers";

class AllUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      admin: false,
      selectedOption: "yes"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOptionsChange = this.handleOptionsChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleOptionsChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  handleSave(event, user) {
    event.preventDefault();
    this.props.updatingUser({ ...user, admin: !user.admin });
    this.setState({
      admin: true
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.removeAdmin(this.props.review.id);
  }

  render() {
    return (
      <div className="">
        <h1>All Users</h1>
        {this.props.users &&
          this.props.users.map(user => (
            <div key={user.id}>
              {this.props.user.id !== user.id && (
                <li>
                  {user.email}
                  <p>{user.admin ? "admin" : "not an Admin"}</p>
                  <span>
                    {!user.admin ? (
                      <button
                        type="button"
                        onClick={event => this.handleSave(event, user)}
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={event => this.handleSave(event, user)}
                      >
                        Remove As Admin
                      </button>
                    )}
                  </span>
                </li>
              )}
            </div>
          ))}
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
    users: state.users
  };
};

const mapDispatch = () => {
  return dispatch => ({
    updatingUser: user => dispatch(updatingUser(user)),
    fetchUsers: () => dispatch(fetchUsers())
  });
};

export default connect(
  mapState,
  mapDispatch
)(AllUsers);
