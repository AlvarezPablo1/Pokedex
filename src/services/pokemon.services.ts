/**
 * Obtiene el id de el pokemon de la url de poke api
 * @author Digital House
 * @param {string} url la url que apunta a una pkoemon
 * @return {string} el id de la pkoemon
 */
export const extractPokemonId = (url: string): string => {
    return url.split("pokemon")[1].replace("/","").replace("/","");
}