import React, { useEffect, useState } from 'react'
import { getData } from '../../Services/firebase.services'
import EmployeeTable from '../../Table/EmployeeTable';
import { Table } from 'react-bootstrap';

export default function AllEmpolyeePage() {

    const [AllEmployees, setAllEmployees] = useState(null)

    useEffect(() => {
        const unsubscribe = getData((EmployeeList) => {
            // console.log("EmployeeList ==>", EmployeeList);
            setAllEmployees(EmployeeList);
        });
        return () => unsubscribe();
    }, [])

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ width: "4.5%", textAlign: "center" }}>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
            </Table>
            {
                AllEmployees ? (

                    AllEmployees.map((data, index) => {
                        console.log(data);
                        return <EmployeeTable key={index} {...data} index={index} />
                    })
                ) : (
                    <h1>loading...</h1>
                )
            }
        </>
    )
}
