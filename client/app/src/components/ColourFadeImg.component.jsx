import React, { Component } from 'react'

const ColourFadeImg = ({colourImg, bwImg, title}) => (
      <div className="on-hover-bundle-wrapper">
        <div className="hog-tooltip">{title}</div>
        <img className="fadeable overlapping-img colour-img" src={colourImg} />
        <img className="fadeable overlapping-img bw-img" src={bwImg} />
      </div>
)

export default ColourFadeImg
