import React from 'react'
import { Button, Modal } from 'react-bootstrap';
const CounterModal = ({ count, counterObj, stopCounter, startCounter, openModal, setOpenModal }) => {
    return (
        <div>
            <Modal show={openModal} centered onHide ={() => setOpenModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Counter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center fw-bolder fs-2'>{count}</div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="secondary" className='text-center' onClick ={counterObj.timerRunning ? stopCounter : startCounter}>
                        {counterObj.timerRunning ? 'Pause ' : 'Start '}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CounterModal
