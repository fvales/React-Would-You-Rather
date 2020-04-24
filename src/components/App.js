import React from "react";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./LogIn/LoginPage";
import { connect } from "react-redux";
import { handleInitialData } from "../redux/actions/shared";
import Dashboard from "./PollsPage/Dashboard";
import NewPoll from "./PollsPage/NewPoll";
import Leaderboard from "./Leaderboard/Leaderboard";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <>
        <Header name={this.props.name} />
        <div className="container">
          {this.props.authedUser === null ? (
            <Route path="/login" exact component={LoginPage} />
          ) : (
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/add" component={NewPoll} />
              <Route exact path="/leaderboard" component={Leaderboard} />
              {/* <Route path="/dashboard">
                <LoginPage />
              </Route>
              <Route path="*">
                <LoginPage />
              </Route> */}
            </Switch>
          )}
        </div>
      </>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser,
    name: users[authedUser] !== undefined ? users[authedUser].name : ""
  };
}

export default connect(mapStateToProps)(App);
