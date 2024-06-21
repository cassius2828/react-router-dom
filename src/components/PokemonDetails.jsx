import { useParams } from "react-router-dom";

const PokemonDetails = ({ pokemon }) => {
  const { pokemonId } = useParams();
  console.log(pokemonId);

  console.log(pokemon);
  const selectedPokemon = pokemon.find(
    (item) => item._id.toString() === pokemonId.toString()
  );
  console.log(selectedPokemon);
  return <div>{selectedPokemon.name}</div>;
};
export default PokemonDetails;
