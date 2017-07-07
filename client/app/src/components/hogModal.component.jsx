import React from 'react'
import { Modal, Button } from 'react-bootstrap';


class HogModal extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    return (
      <div className="static-modal" >

          <Modal show={this.props.showModal} style={{position: 'relative', zIndex: 99999999999, top: 0, left: 0, right: 50, bottom: 50}}>
            <Modal.Header >
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body >
              One fine body...
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.props.closeModal}>Close</Button>
              <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>
          </Modal>

      </div>
    )
  }
}

export default HogModal
