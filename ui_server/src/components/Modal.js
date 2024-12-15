import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

function MyModal({ text, quote, scripture, prayer, title, info}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <li className="define point encList white" onClick={handleShow}>{text} {title}</li>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="modalTitle">
                        <div>
                            {text}
                        </div>
                        <div>
                            {title}
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {quote}
                    </div><hr></hr>
                    <div>
                        {scripture}
                    </div><hr></hr>
                    <div className="rojo">
                        {prayer} 
                    </div>
                    <div>
                        {info}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyModal;