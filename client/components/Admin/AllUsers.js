import React from "react";
import { connect } from "react-redux";
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
      <div className="order container">
        <h2 className="specs row mb-4">All Users</h2>
        {this.props.users &&
          this.props.users.map(user => (
            <div className="" key={user.id}>
              {this.props.user.id !== user.id && (
                <div className="row mb-4">
                  <div className="col">
                    <h4> {user.email}</h4>
                  </div>
                  <div className="col">
                    <p className="notadmin">
                      {user.admin ? (
                        <img src="http://i67.tinypic.com/bhx5za.png" />
                      ) : (
                        "Not An Admin"
                      )}
                    </p>
                  </div>
                  <div className="col">
                    <span>
                      {!user.admin ? (
                        <button
                          className="adminbtn btn btn-info"
                          type="button"
                          onClick={event => this.handleSave(event, user)}
                        >
                          Make Admin
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={event => this.handleSave(event, user)}
                        >
                          Remove As Admin
                        </button>
                      )}
                    </span>
                  </div>
                </div>
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
