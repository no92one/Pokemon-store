import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type PokemonCardData from "../interfaces/PokmonCardData"

export default function CardInfo() {
    const { id } = useParams()
    const [pokemonCards, setPokemonCards] = useState<PokemonCardData[]>([])
    const [card, setCard] = useState<PokemonCardData>()

    async function getPokemonCardsData() {
        const response = await fetch("/pokemonCards.json")
        const result = await response.json()

        if(response.ok){
        setPokemonCards(result)
        } else {
        alert("Something went wrong!")
        }
    }

    function findCardById(cardId: number){
        setCard(pokemonCards[cardId - 1])
    }

    useEffect(() => {
      getPokemonCardsData()
      }, []);

    useEffect(() => {
        findCardById(Number(id))
    }, [pokemonCards])

    return <>
        <h1>{card?.name}</h1>
        <img src={card?.images.large} alt="No image" />
        <p>Description - {card?.flavorText}</p>
    </>
}