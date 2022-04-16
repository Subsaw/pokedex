import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div>
      <Link to={'/'}>
        <div class="navbar bg-base-100">
            <a class="btn btn-ghost normal-case text-xl">Pokedex</a>
        </div>
      </Link>
      </div>
    )
  }
}
