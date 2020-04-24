import React from "react";
import { connect } from "react-redux";
import { addScoreForLeaderboard } from "../../utils/helpers";

class Leaderboard extends React.Component {
  render() {
    return (
      <>
        <h2 className="text-center">Leaderboard</h2>
        <div className="p-20">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Number of questions asked</th>
                <th>Number of questions answered</th>
              </tr>
            </thead>
            <tbody>
              {this.props.userList.map(user => (
                <tr key={user.id}>
                  <td>
                    <img src={user.avatarURL} alt={`avatar of ${user.name}`} />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.questions.length}</td>
                  <td>{Object.keys(user.answers).length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

// This func determines what state is passed to our component via props
function mapStateToProps({ users }) {
  return {
    userList: Object.values(users).sort(
      (a, b) => addScoreForLeaderboard(b) - addScoreForLeaderboard(a)
    )
  };
}

export default connect(mapStateToProps, null)(Leaderboard);
