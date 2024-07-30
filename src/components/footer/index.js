import React from 'react';
import Button from '../button';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='container'>
                <div className='row justify-content-spaceEvenly'>
                    <div className='col-5'>
                        <h2>Get started For free</h2>
                        <ul>
                            <li>pricing</li>
                            <li>contact sales</li>
                            <li>watch demos</li>
                        </ul>
                        <Button head={'join'} classname={'footerBtn'}/>
                    </div>
                    <div className='col-5'>
                        <h4>24/7 customer support </h4>
                        <p>
                            our customer support team is available to help 24/7.
                            enterprises members also recieve dedicated account
                            managers and a guaranteed uptime SLA.
                        </p>
                        <Button head={'contact Support'} classname={'footerBtn1'}/>
                        {/* <div className='positionRelative btn2'>
                            <span>Contact support</span>
                            <div className='button'>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
