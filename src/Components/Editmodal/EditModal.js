import React, {  useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditModal({ modalstate, func, editData, alluser, updatefun }) {
    let userIndexData = alluser[editData];
    const [name, setname] = useState(userIndexData.name);
    const [username, setusername] = useState(userIndexData.username);
    const [email, setemail] = useState(userIndexData.email);
    const [number, setnumber] = useState(userIndexData.number);
    const [password, setpassword] = useState(userIndexData.password);
    useEffect(() => {
        setname(userIndexData.name)
        setusername(userIndexData.username)
        setemail(userIndexData.email)
        setnumber(userIndexData.number)
        setpassword(userIndexData.password)
    }, [editData]);
    function validateedit() {
        let newObj = {};
        let modal = document.querySelector("#editmodal");
        newObj.name = modal.querySelector("#name").value;
        newObj.username = modal.querySelector("#username").value;
        newObj.email = modal.querySelector("#email").value;
        newObj.number = modal.querySelector("#number").value;
        newObj.password = modal.querySelector("#password").value;
        alluser[editData] = newObj;
        updatefun(editData, newObj)
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
                                value={name}
                                onChange={event => setname(event.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Your Username"
                                value={username}
                                onChange={event => setusername(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={event => setemail(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="number">
                            <Form.Label>Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Your Number"
                                value={number}
                                onChange={event => setnumber(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Set New Password"
                                value={password}
                                onChange={event => setpassword(event.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={func} variant='danger'>Close</Button>
                    <Button onClick={validateedit} variant="secondary" >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditModal;
