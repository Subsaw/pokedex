import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import spinner from '../pokemon/load.gif'

export default class PokemonCard extends Component {

  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoading: true,
    toManyRequests: false
  };

  componentDidMount() {
    const {name, url} = this.props;
    const pokemonIndex = url.split("/")[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

    this.setState({
      name: name,
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex
    });
  }

  render() {

    // const name = this.props.name;
    // const url = this.props.url;

    return (
      <div>
        <Link to={`pokemon/${this.state.pokemonIndex}`}>
          <div class="card w-96 bg-base-100 shadow-xl mx-4 my-2">
            {this.state.imageLoading ? (
              <img src={spinner}></img>

            ) : null}
            <figure><img 
            alt="Shoes"
            src={this.state.imageUrl}
                onLoad={() => this.setState({ imageLoading: false })}
                onError={() => this.setState({ toManyRequests: true })}
                style={
                  this.state.toManyRequests
                    ? { display: 'none' }
                    : this.state.imageLoading
                    ? null
                    : { display: 'block' }
                }
            /></figure>
            <div class="card-body">
              <h2 class="card-title capitalize">
                {this.state.name}
              </h2>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
