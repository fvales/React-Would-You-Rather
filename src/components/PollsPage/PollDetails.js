import React from "react";
import { connect } from "react-redux";
import Poll from "./Poll";
import { handleAddUserAnswerToQuestion } from "../../redux/actions/questionsAction";
class PollDetails extends React.Component {
  state = {
    optionSelected: ""
  };

  handleChanges = event => {
    this.setState({
      optionSelected: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(
      handleAddUserAnswerToQuestion(this.props.qid, this.state.optionSelected)
    );
  };

  checkSelectedOPtion() {
    if (
      this.props.hasAnswered &&
      this.props.question.optionOne.votes.includes(this.props.authedUser)
    ) {
      document.getElementById("optionOne").checked = true;
    } else if (
      this.props.hasAnswered &&
      this.props.question.optionTwo.votes.includes(this.props.authedUser)
    ) {
      document.getElementById("optionTwo").checked = true;
    }
  }

  componentDidMount() {
    this.checkSelectedOPtion();
  }

  componentDidUpdate(prevProps) {
    if (this.props.hasAnswered !== prevProps.hasAnswered) {
      this.checkSelectedOPtion();
    }
  }

  render() {
    return (
      <>
        <h2 className="text-center">Poll Details</h2>
        <div className="add-question-container border">
          <Poll qid={this.props.qid} />
          <form onSubmit={this.handleSubmit} className="p-20">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                name="optradio"
                onChange={this.handleChanges}
                disabled={this.props.hasAnswered}
                id="optionOne"
                value="optionOne"
                className="custom-control-input"
              />
              <label className="custom-control-label" htmlFor="optionOne">
                {this.props.question.optionOne.text}
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                name="optradio"
                value="optionTwo"
                id="optionTwo"
                onChange={this.handleChanges}
                disabled={this.props.hasAnswered}
                className="custom-control-input"
              />
              <label className="custom-control-label" htmlFor="optionTwo">
                {this.props.question.optionTwo.text}
              </label>
            </div>
            {!this.props.hasAnswered && (
              <button
                disabled={this.state.optionSelected === ""}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            )}
          </form>
          {this.props.hasAnswered && (
            <div className="">
              <div className="progress">
                <h5>Option 1: {this.props.totalVotesOpt1} Voted</h5>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${this.props.percentageForOption1}%` }}
                >
                  {this.props.percentageForOption1}%
                </div>
                <h5>Option 2: {this.props.totalVotesOpt2} Voted</h5>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${this.props.percentageForOption2}%` }}
                >
                  {this.props.percentageForOption2}%
                </div>
              </div>
              <span>Total number of votes: {this.props.totalNumOfVotes}</span>
            </div>
          )}
        </div>
      </>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, { match }) {
  const qid = match.params.question_id;
  const user = users[authedUser];
  const question = questions[qid];
  const totalNumOfVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const totalVotesOpt1 = question.optionOne.votes.length;
  const totalVotesOpt2 = question.optionTwo.votes.length;
  return {
    qid,
    hasAnswered: Object.keys(user.answers).includes(qid),
    authedUser,
    question,
    totalNumOfVotes,
    totalVotesOpt1,
    totalVotesOpt2,
    percentageForOption1: parseFloat(
      (question.optionOne.votes.length / totalNumOfVotes) * 100
    ).toFixed(2),
    percentageForOption2: parseFloat(
      (question.optionTwo.votes.length / totalNumOfVotes) * 100
    ).toFixed(2)
  };
}

export default connect(mapStateToProps, null)(PollDetails);
