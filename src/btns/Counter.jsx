import { useState } from "react";
import CTA from "./CTA"; // this is our button builder file

// im aware the folder name doesnt match this but for now we'll allow it 

function Counter() {
    const [num, setNum] = useState(0);
    function Add() {
        // the inital way our instructor had us do it.
        setNum((n) => n + 1); 
    }
    function reset() {
        setNum(0);
    }
    function Minus() {
        setNum((n) => n - 1);
    }
    return(
        <>
            <h2>Our count is: {num}</h2>
            <CTA handleClick = {Minus}>
                -
            </CTA>
            <CTA handleClick={reset}>
                Reset
            </CTA>
            <CTA handleClick = {Add}>
                +
            </CTA>
        </>
    )
}

export default Counter;