import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = ({variant="info",children}) => {
    return (
        <Alert variant={variant} style={{fontsize:20}}>
            <strong><h1>{children}</h1></strong>

        </Alert>

    )
}

export default ErrorMessage
