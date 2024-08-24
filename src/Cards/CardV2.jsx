import "../Cards/Card.css";

function CardV2(props) {
  return (
    <>
      <article className="card">
        <img alt={props.image.alt} src={props.image.src} />
        <h3> {props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link.address ?? "#"} target={props.link.target}>
          {props.link.name}
        </a>
      </article>
    </>
  );
}

CardV2.defaultProps = {
  title: "Card Title",
  description: "Card description",
  link: {
    address: "https://reat.dev",
    target: "_blank",
    name: "Card Link",
  },
  image: {
    src: "https://placehold.co/150",
    alt: "Card Img",
  },
};

export default CardV2;
