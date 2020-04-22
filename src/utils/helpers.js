export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-us");
  return time.substr(0, 5) + time.slice(-2) + "|" + d.toLocaleDateString();
}

export function formatPoll(question, author, authedUser) {
  const { name, avatarURL } = author;
  const { id, timestamp } = question;

  return {
    name,
    avatarURL,
    id,
    timestamp,
    authedUser
  };
}
