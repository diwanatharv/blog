import React, { Component } from 'react'
import CategoryPage from './CategoryPage'
import Header from './Header'
import LatestBollywood from './LatestBollywood'
export default class Bollywood extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* <CategoryPage heading="Bollywood"/> */}
        <LatestBollywood />
      </div>
    )
  }
}