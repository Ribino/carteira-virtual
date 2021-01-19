import {Modal, Button} from 'react-bootstrap'
import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';

interface ModalProps{
    showHandle : boolean;
}

const BootstrapModel: React.FC<ModalProps> = ({showHandle}) => {
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    if(showHandle){
        handleShow();
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  
export default BootstrapModel;