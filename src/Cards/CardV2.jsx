import "../Cards/Card.css";

function CardV2(props) {
  return (
    <>
      <article className="card">
        <img alt={props.image.alt} src={props.image.src} />
        <h3> {props.title || props.name}</h3>
        <p>{props.description}</p>
        {props.link && (
          <a href={props.link.address} target={props.link.target}>
            {props.link.name}
          </a>
        )}
      </article>
    </>
  );
}

CardV2.defaultProps = {
  title: "Card Title",
  description: "Card description",
  image: {
    src: "https://placehold.co/150",
    alt: "Card Img",
  },
};

export default CardV2;
