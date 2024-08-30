import "./CTA.css";

function CTA(props) {
  return <button className="btn" onClick={props.handleClick}>{props.children}</button>;
}

export default CTA;