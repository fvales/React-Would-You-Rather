import React from "react";
import Poll from "./Poll";

class PollList extends React.Component {
  render() {
    return (
      <div className="border poll-container">
        <h3 className="text-center">{this.props.title}</h3>
        <ul className="p-0">
          {this.props.qids.map(qid => (
            <li key={qid} className="poll-card border">
              <Poll qid={qid} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PollList;
