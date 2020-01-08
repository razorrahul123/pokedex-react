import React, { Component } from "react";

import PokemonCard from "./PokemonCard";
import Loading from "../layout/Loading";
import SearchBar from "../search/SearchBar";
import axios from "axios";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=60",
    pokemon: null,
    searchVal: ""
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    console.log(res);
    this.setState({ pokemon: res.data["results"] });
    // this.setState({
    //   loading: true
    // });
    // fetch("http://pokeapi.co/api/v2/pokemon?limit=151")
    //   .then(res => res.json())
    //   .then(response => {
    //     this.setState({
    //       pokemon: response.results
    //     });
    //   });
  }

  handleChange = e => {
    this.setState({ searchVal: e.target.value });
  };

  render() {
    const { searchVal, pokemon } = this.state;
    const filteredPokemon =
      pokemon &&
      pokemon.filter(item =>
        item.name.toLowerCase().includes(searchVal.toLowerCase())
      );
    return (
      <div>
        <SearchBar handleChange={this.handleChange} />
        {this.state.pokemon ? (
          <div className="pokemon-list-container">
            {filteredPokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
