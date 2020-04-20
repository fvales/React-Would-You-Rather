import React from "react";

class LoginPage extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="user">Select User:</label>
          <select class="form-control" id="user">
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
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    );
  }
}

export default LoginPage;
