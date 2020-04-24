export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-us");
  return d.toLocaleDateString() + " | " + time.substr(0, 5) + time.slice(-2);
}

export function addScoreForLeaderboard(user) {
  let sum = user.questions.length + Object.keys(user.answers).length;
  return sum;
}
