import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */

const GET_ALL_USERS = "GET_ALL_USERS";
const UPDATE_USER = "UPDATE_USER";

/**
 * ACTION CREATORS
 */
const getAllUsers = users => ({ type: GET_ALL_USERS, users });
const updateUser = user => ({ type: UPDATE_USER, user });

// const removeUser = () => ({ type: REMOVE_USER });

/**
 * THUNK CREATORS
 */

export const fetchUsers = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/users");
    dispatch(getAllUsers(data));
  };
};

export const updatingUser = user => {
  return async dispatch => {
    console.log("USER IN THUNK", user);
    const { data } = await axios.patch(`/api/users/${user.id}`, { user });
    console.log("data inside updateuser", data);
    dispatch(updateUser(data));
  };
};

export default function(state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;
    case UPDATE_USER:
      console.log("action.user !!", action.user);
      return state.map(user => {
        if (user.id === action.user.id) {
          return {
            ...user,
            admin: action.user.admin,
            email: action.user.email
          };
        }
        return { ...user };
      });
    default:
      return state;
  }
}
