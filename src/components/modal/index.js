import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import facebook from '../../assets/img/Facebook.png';
import google from '../../assets/img/Google.webp';
import apple from '../../assets/img/Apple.png';

const OfModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span onClick={handleShow}>Log In</span>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in to Vimeo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-9'>
                            <img width={30} src={facebook} alt="" />
                            <span>Log in with Facebook</span>
                        </div>
                        <div className='col-9'>
                            <img width={20} src={google} alt="" />
                            <span>Log in with google</span>
                        </div>
                        <div className='col-9'>
                            <img width={15} src={apple} alt="" />
                            <span>Log in with apple</span>
                        </div>
                    </div>
                    <div className='row text-align-center margin_10'>
                        <span>OR</span>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="you@email.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                    <div className='row text-align-center'>
                    <button>Log in with an email</button>
                    <p>Don't have an account? <span>Join Vimeo</span> </p>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default OfModal;