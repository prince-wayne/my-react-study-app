
function Welcome(props) {

    return(
        <h2 className="welcome"> 
             {/* welcome {+ props.isMember ?  props.name : "Guest" } */}

             {/* realistically it would make more sense to check id they have a name even if this is a study / practice */}

            Welcome {props.name ?? "Guest"}
        </h2>
    )
}

export default Welcome;