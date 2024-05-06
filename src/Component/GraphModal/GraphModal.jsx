import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import GraphTree from '../GraphTree/GraphTree';

export default function GraphModal({ setShow, show }) {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Graph</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <GraphTree />
                </Modal.Body>
            </Modal>
        </>
    )
}
