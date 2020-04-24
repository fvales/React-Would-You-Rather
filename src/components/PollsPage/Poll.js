import React from "react";
import { connect } from "react-redux";
import { formatDate } from "../../utils/helpers";

class Poll extends React.Component {
  render() {
    return (
      <div className="">
        <div className="avatar">
          <img src={this.props.avatar} alt={`avatar of ${this.props.name}`} />
        </div>
        <div className="poll-info">
          <span className="name">{this.props.name}</span>
          <span className="time">{this.props.timestamp}</span>
          <span className="question">Would you rather...?</span>
          <span className="option">{this.props.question.optionOne.text}</span>
          <span>OR</span>
          <span className="option">{this.props.question.optionTwo.text}</span>
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
    question: questions[qid],
    timestamp: formatDate(question.timestamp)
  };
}

export default connect(mapStateToProps, null)(Poll);
