import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import GraphModal from '../Component/GraphModal/GraphModal';
import Table from 'react-bootstrap/Table';

export default function EmployeeTable(props) {
    const { name, position, email, index } = props
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <Table striped bordered hover>

                <tbody>
                    <tr>
                        <td style={{ width: '3%', textAlign: "center" }}>{index + 1}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{position}</td>
                        <td ><Button style={{ marginRight: "10px" }} variant="success">Edit</Button><Button variant="danger">Delete</Button></td>
                        <td><Button onClick={handleShow}>view subordinate</Button></td>
                    </tr>

                </tbody>
                {
                    show && <GraphModal show={show} setShow={setShow} />
                }
            </Table>

        </div>
    )
}
