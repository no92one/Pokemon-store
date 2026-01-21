import { useEffect, useState } from "react";
import type PokemonCardData from "../interfaces/PokmonCardData.ts";

export default function Home() {
  const [pokemonCards, setPokemonCards] = useState<PokemonCardData[]>([])
  const [cardCategories, setCardCategories] = useState<string[]>([])
  const [selectedCaregory, setSelectedCategory] = useState<string>("All")

  async function getPokemonCardsData() {
    const response = await fetch("/pokemonCards.json")
    const result = await response.json()

    if(response.ok){
      setPokemonCards(result)
    } else {
      alert("Something went wrong!")
    }
  }

  function getAllCardCategories(){
    setCardCategories(["All", 
      ...new Set(pokemonCards.map(card => card.supertype))])
  } 

  useEffect(() => {
    getPokemonCardsData()
    }, []);

  useEffect(() => {
    getAllCardCategories()
  }, [pokemonCards])

    return <>
      <h1>Min sida</h1>
      <select onChange={element => setSelectedCategory(element.target.value)}>
        {cardCategories.map((category, index) => {
         return <option key={index} value={category}>{category}</option>
        })}
      </select>
      <button onClick={() => console.log(pokemonCards)}>Log data</button>
      {pokemonCards.filter(card => card.supertype === selectedCaregory || selectedCaregory === "All")
      .map( (card, index) => {
        return <a href={"/card/" + (index + 1)} key={index}>
          <p>{card.name}</p>
          <img src={card.images.small} alt="No image" />
        </a>
      })}
    </>;
}