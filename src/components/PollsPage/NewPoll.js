import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../redux/actions/questionsAction";

class NewPoll extends React.Component {
  state = {
    option1: "",
    option2: "",
    toDashboard: false
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(
      handleAddQuestion(this.state.option1, this.state.option2)
    );
    this.setState({
      toDashboard: true
    });
  };

  handleChangesForOption1 = event => {
    this.setState({
      option1: event.target.value
    });
  };

  handleChangesForOption2 = event => {
    this.setState({
      option2: event.target.value
    });
  };

  render() {
    if (this.state.toDashboard) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <h2 className="text-center">Add new poll</h2>
        <div className="border add-question-container col-sm-9 col-md-7 col-lg-5 mx-auto">
          <form onSubmit={this.handleSubmit}>
            <h3>Would You Rather...?</h3>
            <div className="form-group">
              <label htmlFor="option1">Enter Option1:</label>
              <input
                type="text"
                className="form-control"
                id="option1"
                onChange={this.handleChangesForOption1}
              />
            </div>
            <div className="form-group">
              <label htmlFor="option2">Enter Option2:</label>
              <input
                type="text"
                className="form-control"
                id="option2"
                onChange={this.handleChangesForOption2}
              />
            </div>

            <button
              disabled={this.state.option1 === "" || this.state.option2 === ""}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default connect()(NewPoll);
