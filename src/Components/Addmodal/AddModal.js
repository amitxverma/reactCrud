import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function AddModal({ modalstate, func, addfun }) {

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        number: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        let newState = { ...formData, [name]: value };
        setFormData(newState);
    };

    function validate() {
        let newObj = formData;
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
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Your Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="number">
                            <Form.Label>Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Your Number"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Set New Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
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
