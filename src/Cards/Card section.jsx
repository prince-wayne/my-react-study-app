import "./Card section.css"
import Card from "./Card";
import CardV2 from "./CardV2";

function CardSection() {
  return (
    <>
      <section className="card-section">
        {/* Study Topic 1 (using ) */}
        <Card />
        {/* Study Topic 2 (props) */}
        <CardV2 
        title = "Card With Props"
        description = "this is compondent that uses props to define it's content."
        link = {{
          name : "V2 Link"
        }}
        />
        <CardV2/>
      </section>
    </>
  );
}

export default CardSection;
