import React from 'react'
import { Button, Modal } from 'react-bootstrap';
const CounterModal = ({ count, counterObj, stopCounter, startCounter, showOrHideModal, setShowOrHideModal }) => {
    return (
        <div>
            <Modal show={showOrHideModal} centered onHide ={() => setShowOrHideModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Counter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>{count}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick ={counterObj.timerRunning ? stopCounter : startCounter}>
                        {counterObj.timerRunning ? 'Pause ' : 'Start '}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CounterModal
