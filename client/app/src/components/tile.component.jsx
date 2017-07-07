import React, { Component } from 'react'
import ColourFadeImg from './colourFadeImg.component.jsx'

const Tile = ({tileIdx, tileData, onClick}) => (
  <div id={`tile-${tileIdx}-wrapper`} className="tile-wrapper" >
    <div id={`tile-${tileIdx}`} onClick={onClick.bind(this)} className="tile-content" style={tileData.style}>
      <ColourFadeImg colourImg={tileData.colourImg} bwImg={tileData.bwImg} title={tileData.title}  />
    </div>
  </div>
)

export default Tile
