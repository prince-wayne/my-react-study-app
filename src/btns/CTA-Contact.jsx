import CTA from "./CTA.jsx"

function ContantBtn() {
    
    function handleClick() {
        alert('we will be reaching out to you soon')
    }
    
    return(

        <CTA handleClick = {handleClick}>
            Contact Me
        </CTA>
    )
}

export default ContantBtn;