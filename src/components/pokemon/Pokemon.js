import React, { Component } from 'react'
import axios from 'axios'

export default class Pokemon extends Component {

  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    types: [],
    height: '',
    weight: ''
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    const pokemonRes = await axios.get(pokemonUrl);

    const name = pokemonRes.data.name;
    const imageUrl = pokemonRes.data.sprites.front_default;

    const height = pokemonRes.data.height;

    const weight = pokemonRes.data.weight;

    const types = pokemonRes.data.types.map(type => type.type.name);

    this.setState({
      name,
      pokemonIndex,
      imageUrl,
      height,
      weight,
      types
    });
  }

  render() {
    return (
      <div>
        <div class="card w-96 bg-base-100 shadow-xl m-auto">
          <figure class="px-10 pt-10">
            <img src={this.state.imageUrl} alt="Shoes" class="rounded-xl w-44" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title capitalize">{this.state.name}</h2>
            <p>Height: {this.state.height}</p>
            <p>Weight: {this.state.weight}</p>
            <div class="card-actions justify-end">
              {this.state.types.map(type => (
                <div key={type} class="badge badge-outline">{type}</div>

              ))}
              </div>
          </div>
        </div>
      </div>
    )
  }
}
