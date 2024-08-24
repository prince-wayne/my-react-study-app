import "./Team.css";


function Team(props) {
  const Members = props.members.map((element) => (
    <li /* key = {props.members.indexOf(element)} */> {element} </li>
  ));
  return (
    <div className="team">
      <h3>{props.name}</h3>
      <ul>{Members}</ul>
    </div>
  );
}

Team.defaultProps = {
  name: "Supporting Roles",
  members: [
    "Mary Jane",
    "Raymond Smith",
    "Joe Black",
    "Johnny Walker",
    "Jim Bean",
  ],
};

export default Team;
