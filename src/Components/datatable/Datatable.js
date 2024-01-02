import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import AddModal from '../Addmodal/AddModal';
import ViewModal from '../Viewmodal/ViewModal';
import EditModal from '../Editmodal/EditModal';
import { dataText } from '../../App';
// import 
function Datatable() {
    const { userData, setUserData } = useContext(dataText);
    let cond = userData.length !== 0;

    // add
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const add = (newdata) => {
        let newObj = newdata;
        userData.push(newObj);
        setUserData([...userData]);
        handleClose();
    }
    // add close

    // view
    const [viewDataUser, setViewDataUser] = useState(0);
    useEffect(() => {
    }, [viewDataUser]);
    const [viewshow, setViewShow] = useState(false);
    function handleViewShow(index) {
        setViewDataUser(index);
        setViewShow(true);
    };
    const handleViewClose = () => setViewShow(false);
    // view close

    // edit
    const [editShow, setEditShow] = useState(false);
    const handleEditClose = () => setEditShow(false);
    function handleEditShow(index) {
        setViewDataUser(index);

        setEditShow(true);
    };

    function updateEdit(index, editedObj) {
        userData[index] = editedObj;
        setUserData([...userData]);
        handleEditClose();
    }

    // edit close

    function deleteItem(item) {
        userData.splice(item, 1);
        setUserData([...userData]);
    }

    return (
        <>

            <div className='container d-flex justify-content-end p-3'>
                <Button variant="primary" onClick={handleShow}>
                    Add User
                </Button>
            </div>

            <table className="table table-bordered  container">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cond?
                    userData.map((item, index) => {

                        return (<tr key={index}>

                            {
                                Object.values(item).map((value, index) => {
                                    return <td key={index}>{value}</td>
                                })
                            }
                            <td>
                                <Button onClick={() => handleViewShow(index)} className='mx-2'>View</Button>
                                <Button onClick={() => handleEditShow(index)} className='mx-2 btn-warning'>Edit</Button>
                                <Button onClick={() => deleteItem(index)} className="mx-2 btn-danger">Delete</Button>
                            </td>
                        </tr>);
                    }):<tr><td colSpan={6} className='text-center text-danger fw-bold'>There is no data to show.</td></tr>}
                </tbody>
            </table>

            {cond ?
                <>
                    <ViewModal modalstate={viewshow} func={handleViewClose}  alluser={userData[viewDataUser]} />
                    <EditModal modalstate={editShow} func={handleEditClose} editData={viewDataUser} updatefun={updateEdit} alluser={userData} />
                </>
                : ''}
            <AddModal modalstate={show} func={handleClose} addfun={add}/>
        </>
    )
}

export default Datatable;
