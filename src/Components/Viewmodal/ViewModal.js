import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ViewModal({ modalstate, func,  alluser }) {
  return (
    <>
        <Modal show={modalstate} onHide={func} id="addmodal">
          <Modal.Header closeButton>
            <Modal.Title>{alluser.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <span className='fw-bold me-2'>Name: </span>
              <span>{alluser.name}</span>
            </div>
            <div>
              <span className='fw-bold me-2'>Username: </span>
              <span>{alluser.username}</span>
            </div>
            <div>
              <span className='fw-bold me-2'>Password: </span>
              <span>{alluser.password}</span>
            </div>
            <div>
              <span className='fw-bold me-2'>Email: </span>
              <span>{alluser.email}</span>
            </div>
            <div>
              <span className='fw-bold me-2'>Number: </span>
              <span>{alluser.number}</span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={func}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
     
    </>
  )
}

export default ViewModal
