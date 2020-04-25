import React from "react";
import Header from "./common/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./LogIn/LoginPage";
import { connect } from "react-redux";
import { handleInitialData } from "../redux/actions/shared";
import Dashboard from "./PollsPage/Dashboard";
import NewPoll from "./PollsPage/NewPoll";
import Leaderboard from "./Leaderboard/Leaderboard";
import PageNotFound from "./common/PageNotFound";
import PollDetails from "./PollsPage/PollDetails";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        this.props.authedUser !== null ? (
          <>
            {props.match.path === "/questions/:question_id" &&
            !Object.keys(this.props.questions).includes(
              props.match.params.question_id
            ) ? (
              <Redirect to="/404" />
            ) : (
              <Component {...props} />
            )}
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

  render() {
    return (
      <>
        <Header name={this.props.name} />
        <div className="container">
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <this.PrivateRoute exact path="/" component={Dashboard} />
            <this.PrivateRoute exact path="/add" component={NewPoll} />
            <this.PrivateRoute
              exact
              path="/leaderboard"
              component={Leaderboard}
            />
            <this.PrivateRoute
              exact
              path="/questions/:question_id"
              component={PollDetails}
            />
            {/* <this.PrivateRoute
              exact
              path="/questions/:question_id"
              render={props =>
                this.props.questions[props.match.params.question_id] !==
                undefined ? (
                  <PollDetails />
                ) : (
                  <Redirect to="/404" />
                )
              }
            /> */}
            <this.PrivateRoute component={PageNotFound} />
          </Switch>
        </div>
      </>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    questions,
    authedUser: authedUser,
    name: users[authedUser] !== undefined ? users[authedUser].name : ""
  };
}

export default connect(mapStateToProps)(App);
