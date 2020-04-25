import React from "react";
import { connect } from "react-redux";
import * as loginActions from "../../redux/actions/loginActions";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

class LoginPage extends React.Component {
  state = {
    userId: ""
  };

  handleChanges = event => {
    this.setState({ userId: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.setAuthedUser(this.state.userId);
    const { history } = this.props;
    let { from } = history.location.state || { from: { pathname: "/" } };
    history.replace(from);
  };

  render() {
    return (
      <>
        <h2 className="text-center">Please Sign In</h2>
        <div className="login-container border col-sm-9 col-md-7 col-lg-5 mx-auto">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="user">Select User:</label>
              <select
                className="form-control"
                id="user"
                onChange={this.handleChanges}
                defaultValue=""
              >
                <option value="" disabled>
                  Please select
                </option>
                {Object.keys(this.props.users).map(user => (
                  <option key={user} value={user}>
                    {this.props.users[user].name}
                  </option>
                ))}
              </select>
            </div>
            <button
              disabled={this.state.userId === ""}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
}

// This func determines what state is passed to our component via props
function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));
