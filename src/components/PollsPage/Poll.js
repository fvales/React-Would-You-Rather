import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { formatDate } from "../../utils/helpers";

class Poll extends React.Component {
  render() {
    return (
      <div className="">
        <img src={this.props.avatar} alt={`avatar of ${this.props.name}`} />
        <div className="poll-info">
          <span>{this.props.name}</span>
          <span>{this.props.timestamp}</span>
        </div>
      </div>
    );
  }
}

// This func determines what state is passed to our component via props
function mapStateToProps({ questions, users, authedUser }, { qid }) {
  const question = questions[qid];
  const author = users[question.author];
  return {
    authedUser,
    name: author.name,
    avatar: author.avatarURL,
    timestamp: formatDate(question.timestamp)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
