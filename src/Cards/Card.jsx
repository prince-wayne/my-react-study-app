import "./Card.css";

function Card() {
  return (
    <>
      <article className="card">
        <img alt="card-image" src="https://placehold.co/150"/>
          <h3> Card Title</h3>
          <p>
              Card description
          </p>
          <a href="./" target="_blank">
            Card Link
          </a>
        {/* <!-- use the article class name when there's a difference in how you want to style these on specific pages --> */}
      </article>
    </>
  );
}

export default Card;
