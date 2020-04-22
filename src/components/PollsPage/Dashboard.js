import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PollList from "./PollList";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <PollList
            title="Unanswered Questions"
            qids={this.props.unansweredIds}
          />
        </div>
        <div className="col-lg-6">
          <PollList title="Answered Questions" qids={this.props.answeredIds} />
        </div>
      </div>
    );
  }
}

// This func determines what state is passed to our component via props
function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  let answeredIds = Object.keys(user.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  return {
    answeredIds,
    unansweredIds: Object.keys(questions)
      .filter(id => !answeredIds.includes(id))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
