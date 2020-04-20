import React from "react";
import { connect } from "react-redux";
import * as loginActions from "../../redux/actions/loginActions";
import { bindActionCreators } from "redux";

class LoginPage extends React.Component {
  state = {
    userId: ""
  };

  handleChanges = event => {
    this.setState({ userId: event.target.value });
  };

  //Dispatch two Actions - Set Auth Flag and Set User
  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.setUser(this.state.userId);
    this.props.actions.setAuthFlag(true);
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="user">Select User:</label>
            <select
              className="form-control"
              id="user"
              onChange={this.handleChanges}
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

// This func determines what state is passed to our component via props
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
