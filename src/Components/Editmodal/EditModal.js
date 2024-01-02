import React, {useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditModal({ modalstate, func, editData, alluser, updatefun }) {
    let userIndexData = alluser[editData];

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        number: "",
        password: ""
    });

    useEffect(()=>{
        setFormData({
            name: userIndexData.name,
            username: userIndexData.username,
            email: userIndexData.email,
            number: userIndexData.number,
            password: userIndexData.password
        });
    },[userIndexData]);
   
    const handleChange = (event) => {
        const { name, value } = event.target;
        let newState = { ...formData, [name]: value };
        setFormData(newState);
    };

    

   

    function validateedit() {
        let newObj = formData;
        updatefun(editData, newObj);
    }

    return (
        <>
            <Modal show={modalstate} onHide={func} id="editmodal">
                <Modal.Header closeButton>
                    <Modal.Title>Edit modal</Modal.Title>
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
                                number="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={func} variant='danger'>Close</Button>
                    <Button onClick={validateedit} variant="primary" >
                        Save
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditModal;
