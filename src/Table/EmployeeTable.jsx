import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import GraphModal from '../Component/GraphModal/GraphModal';

export default function EmployeeTable() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button onClick={handleShow}>Open Graph</Button>
            {
                show && <GraphModal show={show} setShow={setShow}/>
            }
        </div>
    )
}
