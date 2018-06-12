import React from "react";
import { connect } from "react-redux";

import { removeReview } from "../../store/review";
import { fetchUsers, updatingUser } from "../../store/allusers";

// import UpdateReview from "./UpdateReview";
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

    this.handleUpdateToggle = this.handleUpdateToggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleUpdateToggle() {
    if (!this.state.toggleUpdate) {
      this.setState({
        toggleUpdate: true
      });
    } else {
      this.setState({
        toggleUpdate: false
      });
    }
  }

  handleOptionsChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  handleSave(event, user) {
    event.preventDefault();
    console.log("hadnlesave User", user);
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
    // const { user, review } = this.props;
    // const displayReview = (
    //   <div>

    //   </div>
    // );
    console.log("props.users", this.props.users);
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
        {/* {this.props.user.admin ? "Not an admin" : "Admin"} */}
        {/* {!this.state.toggleUpdate ? (
          displayReview
        ) : (
          <UpdateReview
            handleUpdateToggle={this.handleUpdateToggle}
            review={review}
          />
        )} */}
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
