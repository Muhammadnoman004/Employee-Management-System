import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function LoaderComponent() {
    return (
        <div className='loaderDiv'>
            <Spinner id='spinner' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
