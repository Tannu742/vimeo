// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import OffCanvas from '../offcanvas';
import OfModal from '../modal';
import Button from '../button';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='row align-items-center justify-content-spaceEvenly'>
                    <div className='col-4'>
                        <a href="/">Vimeo</a>
                    </div>
                    <div className='col-6 dFlex align-items-center justify-content-right'>
                        <OfModal/>
                        <Button head={'join'} classname={'headerBtn'}/>
                        {/* <div className='positionRelative'>
                            <span>Join</span>
                            <div className='headerBtn'>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div> */}
                        <OffCanvas/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
