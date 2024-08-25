import "./Team.css";


function Team(props) {
  const Members = props.members.map((element, index) => (
    <li key = {index}> {element} </li>
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
