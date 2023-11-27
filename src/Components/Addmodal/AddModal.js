import React from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function AddModal({modalstate,func, addfun}) {    

    function validate(){
        let newObj = {};
        let modal = document.querySelector("#addmodal");
        newObj.name = modal.querySelector("#name").value;
        newObj.username = modal.querySelector("#username").value;
        newObj.email = modal.querySelector("#email").value;
        newObj.number = modal.querySelector("#number").value;
        newObj.password = modal.querySelector("#password").value;
        addfun(newObj);
    }

    return (
        <>
            <Modal show={modalstate} onHide={func} id="addmodal">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Your Name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Your Username"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="number">
                            <Form.Label>Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Your Number"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Set New Password"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={func}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={validate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddModal
