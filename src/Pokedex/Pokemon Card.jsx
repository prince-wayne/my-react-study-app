export default function PokeCard(props) {
  // we could use `useContext()` but a single level props value should be fine

  // a basic card with an img, name, [tags], and description
  const { img, name, description, types } = props.obj; // .obj because thats how we defined it
  console.log([name, types]);
  
  function handleColor() {
    const typeColors = {
      // is in hex
      Grass: "#78C850", // Green
      Poison: "#A040A0", // Purple
      Fire: "#F08030", // Orange
      Water: "#6890F0", // Blue
    };

    // compare this to the type of the pokemon and give the type the color, this doesnt have much of a point but could make the element more interesting
  }

  return (
    <article className="card poke-card">
      <img src={img} alt={`pokemon ${name} `} />
      <h4>{name}</h4>
      <p>{description}</p>
      <ul className="list">
        {types.map((element, index) => (
          <li className="list-item" key={index}>
            {element}
          </li>
        ))}
      </ul>
    </article>
  );
}
