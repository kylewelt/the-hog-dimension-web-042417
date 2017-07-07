import React, { Component } from 'react'
import { render } from 'react-dom'
import Cube from './cube.component.jsx'
import Tile from './tile.component.jsx'
import HogModal from './hogModal.component.jsx'
import activateGuide from '../helpers/guideMe.js'
import { getTileData } from '../helpers/tileDataMapper.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      activeFaceIdx: 0,
      defaultCube: 'home-cube',
      showModal: false
    }
  }

  componentDidMount () {
    console.log('starting background fog')
    // require('../helpers/fogEffect.js')
  }

  handleTileClick (e) {
    console.log('herhheh')
    this.openModal()
  }

  openModal () {
    console.log('tile clicked')
    this.setState({
      showModal: true
    })
  }

  closeModal () {
    this.setState({
      showModal: false
    })
  }

  render () {
    let guide = null
    if (!localStorage.getItem("repeatVisit")) {
      activateGuide(this.state.defaultCube)
      guide = <h2 id="guide-me">WASD or Click to Navigate</h2>
      localStorage.setItem("repeatVisit", true)
    }
    const tiles = [...Array(8)].map((_, tileIdx) => {
      return <Tile key={tileIdx} tileIdx={tileIdx} tileData={getTileData(tileIdx)} onClick={this.handleTileClick.bind(this)} />
    })

    return (
      <div>
        {this.state.showModal ? <HogModal showModal={this.state.showModal} closeModal={this.closeModal} /> : null}
        {guide}
        {/* <canvas id="c"></canvas> */}

        <Cube cubeName={this.state.defaultCube} />
        {tiles}
      </div>
    )
  }
}
