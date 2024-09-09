import PokeCard from "./Pokemon Card";
import "./pokemon.css";

import { useState, useEffect, useRef } from "react";

async function loadDataFile(path) {
  try {
    const response = await fetch(path);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error loading data: ", error);
    return [];
  }
  // function from older project
}

export default function StarterPokemon() {
  const pokemonData = useRef(null);
  const [Display, setDisplay] = useState({});
  const [selection, setSelction] = useState(0);

  const [status, setStatus] = useState(false);

  // they will set after render
  useEffect(() => {
    loadDataFile("./Data/pokemon.json").then((res) => {
      pokemonData.current = res;
      setSelction(0);
      setStatus(true);
    });
  }, []);

  function handleLoad() {
    if (status) {
      const gen = pokemonData.current[selection].generation;
      const display = pokemonData.current[selection].starters.map(
        (ele, index) => <PokeCard key={index} obj={ele} />
      );
      return { body: display, header: gen };
    } else {
      return <h4>Please Wait</h4>;
    }
  }

  function handleBtnClick(btn) {
    if (btn === "back") {
      if (selection === 0) {
        setSelction(pokemonData.current.length - 1);
      } else {
        setSelction((c) => c - 1);
      }
    }
    if (btn === "next") {
      if (selection === pokemonData.current.length - 1) {
        setSelction(0);
      } else {
        setSelction((c) => c + 1);
      }
    }
  }

  return (
    <>
      <h3> Generation: {handleLoad().header}</h3>
      <section className="poke-container">
        <img
          className="action-img"
          src="Buttons/icons8-back-to-50.png"
          alt="back arrow (pokemon)"
          onClick={() => handleBtnClick("back")}
        />

        {handleLoad().body}

        <img
          className="action-img"
          src="Buttons/icons8-next-page-50.png"
          alt="next arrow (pokemon)"
          onClick={() => handleBtnClick("next")}
        />
      </section>
    </>
  );
}
