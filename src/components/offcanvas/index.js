import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import arrow from '../../assets/img/arrow.png'
import Button from '../button';

const OffCanvas = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <FontAwesomeIcon className='offcanvasBtn' icon={faBars} onClick={handleShow} />
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Vimeo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>product <img className='fRight' src={arrow} alt="arrow" width={30}/></li>
                        <li>Solutions <img className='fRight' src={arrow} alt="arrow" width={30}/></li>
                        <li>Learn <img className='fRight' src={arrow} alt="arrow" width={30}/></li>
                        <li>Pricing </li>
                        <li>Watch <img className='fRight' src={arrow} alt="arrow" width={30}/></li>
                    </ul>
                    <Button head={'get started'} classname={'offcanvasBtn'}/>
                    {/* <div className='positionRelative btn1'>
                        <span>Get Started</span>
                        <div className='btn'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div> */}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OffCanvas;

// import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from 'react';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import arrow from '../../assets/img/arrow.png';

// const OffCanvas = ({ name, ...props }) => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <FontAwesomeIcon className='offcanvasBtn' icon={faBars} onClick={handleShow} />
//             <Offcanvas show={show} onHide={handleClose} {...props}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Vimeo</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                 <div className='positionRelative btn1'>
//                         <span>Get Started</span>
//                         <div className='btn'>
//                             <FontAwesomeIcon icon={faArrowRight} />
//                         </div>
//                     </div>
//                     <ul>
//                         <li>product <img width={30} src={arrow} alt="" /></li>
//                         <li>Solutions <img width={30} src={arrow} alt="" /></li>
//                         <li>Learn <img width={30} src={arrow} alt="" /></li>
//                         <li>Pricing <img width={30} src={arrow} alt="" /></li>
//                         <li>Watch <img width={30} src={arrow} alt="" /></li>
//                     </ul>
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     );
// }
// export default OffCanvas;