import React from "react";
import { connect } from "react-redux";
import PollList from "./PollList";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
          <Tab eventKey="unanswered" title="Unanswered">
            <PollList
              title="Unanswered Questions"
              qids={this.props.unansweredIds}
            />
          </Tab>
          <Tab eventKey="answered" title="Answered">
            <PollList
              title="Answered Questions"
              qids={this.props.answeredIds}
            />
          </Tab>
        </Tabs>
      </>
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

export default connect(mapStateToProps, null)(Dashboard);
