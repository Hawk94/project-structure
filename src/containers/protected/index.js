import React from "react";
import { connect } from "react-redux";
import { logout } from "./../ducks/auth";
import { userIsAuthenticatedRedir } from "./../helpers/auth";

let Protected = props => {
  return (
    <div>
      I am a protected route. Welcome {props.user.name}
      <button
        onClick={() => {
          props.dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

Protected = connect(state => {
  return {
    user: state.auth.user
  };
})(Protected);

export default userIsAuthenticatedRedir(Protected);
