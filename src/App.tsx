import { useEffect, useState } from "react";
import type PokemonCardData from "./interfaces/PokmonCardData.ts";

export default function App() {
  const [pokemonCards, setPokemonCards] = useState<PokemonCardData[]>([])

  async function getPokemonCardsData() {
    const response = await fetch("/pokemonCards.json")
    const result = await response.json()

    if(response.ok){
      setPokemonCards(result)
    } else {
      alert("Something went wrong!")
    }
  }

  useEffect(() => {
    getPokemonCardsData()
    }, []);

    return <>
      <h1>Min sida</h1>
      <button onClick={() => console.log(pokemonCards)}>Log data</button>
      {pokemonCards.map( (card, index) => {
        return <section key={index}>
          <p>{card.name}</p>
          <img src={card.images.small} alt="No image" />
        </section>
      })}
    </>;
}