import React from 'react'

class HogModal extends React.Component {
  render () {
    return (
      <div id="myModal" className="modal" style={{display: 'block'}}>
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    )
  }
}

export default HogModal
