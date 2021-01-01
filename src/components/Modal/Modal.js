import React from 'react'
import { Modal } from 'react-bootstrap'
import './Modal.css'

const CustomModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {props.children}
        </Modal>
    )
}

export default CustomModal
