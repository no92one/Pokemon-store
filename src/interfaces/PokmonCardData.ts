import type Images from "./Images.ts";

export default interface PokemonCardData {
    name: string;
    images: Images;
    supertype: string;
    flavorText?: string;
}