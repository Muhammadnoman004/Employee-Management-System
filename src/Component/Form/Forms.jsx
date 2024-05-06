import React from 'react'
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AddEmployee } from '../../Services/firebase.services';
import { Modal } from 'react-bootstrap';

export default function Forms({ setShow, show }) {
    const handleClose = () => setShow(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const formSubmit = async (data) => {
        const AddData = await AddEmployee(data);
        reset()
    }

    return (
        <div>

            <form onSubmit={handleSubmit(formSubmit)}>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" {...register("name", {
                        required: {
                            value: true,
                            message: "Name is required!"
                        }
                    })} />
                    {errors.name && <p>{errors.name.message}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required!"
                        }
                    })} />
                    {errors.email && <p>{errors.email.message}</p>}
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Position</Form.Label>
                    <Form.Control type="text" placeholder="Enter position" {...register("position", {
                        required: {
                            value: true,
                            message: "Position is required!"
                        }
                    })} />
                    {errors.position && <p>{errors.position.message}</p>}
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Supervisors</Form.Label>
                    <Form.Select aria-label="Default select example" defaultValue="default" {...register("supervisorsID", {
                        required: {
                            value: false,
                            message: "Select your reporting supervisor!"
                        }
                    })} />
                    {/* {errors.position && <p>{errors.supervisor.message}</p>} */}
                </Form.Group>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Add Employee
                    </Button>
                </Modal.Footer>
            </form>

        </div>
    )
}
