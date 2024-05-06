import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Forms from '../Form/Forms';

export default function Modals() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='mx-3 my-3' variant="success" onClick={handleShow}>
                Add Employee
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee Info.</Modal.Title>
                </Modal.Header>
                <Modal.Body><Forms show={show} setShow={setShow} /></Modal.Body>
            </Modal>
        </>
    )
}
