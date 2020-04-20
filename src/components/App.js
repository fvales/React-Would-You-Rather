import React from "react";
import Header from "./common/Header";
import { Route } from "react-router-dom";
import LoginPage from "./LogIn/LoginPage";
import * as API from "../_DATA";

class App extends React.Component {
  state = {
    users: ""
  };

  componentDidMount() {
    // Get all the users
    API._getUsers().then(response => {
      this.setState({
        users: response
      });
    });
  }

  render() {
    return (
      <>
        <Header />
        <Route
          path="/login"
          exact
          render={() => <LoginPage users={this.state.users} />}
        />
      </>
    );
  }
}

export default App;
