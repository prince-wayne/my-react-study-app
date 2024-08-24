import Team from "./Team";
import "./Teams.css";

function Teams(props) {
  // our input will be an array of objects, which we will need to put into the teams
  // a map should work

  const teams = props.teams;

  const rTeams = teams.map((obj) => (
    <Team name={obj.name} members={obj.members} />
  ));

  return (
    <>
      <h2>Brought to you by</h2>
      <div className="team-container">{rTeams}</div>
    </>
  );
}

Teams.defaultProps = {
  teams: [
    {
      name: "Frontend Developers",
      members: ["Alice", "Bob", "Charlie", "Diana"],
    },
    {
      name: "Backend Developers",
      members: ["Eve", "Frank", "Grace", "Heidi"],
    },
    {
      name: "QA Engineers",
      members: ["Ivan", "Judy", "Mallory", "Niaj"],
    },
    {
      name: "DevOps Engineers",
      members: ["Olivia", "Peggy", "Sybil", "Trudy"],
    },
    {
      name: "Product Managers",
      members: ["Victor", "Walter", "Xena", "Yasmine"],
    },
  ],
};

export default Teams;
