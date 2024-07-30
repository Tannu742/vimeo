import React from 'react';
import img1 from '../../assets/img/video1.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Video = () => {
    return (
        <div className='video container'>
            <div className='row'>
                <div className='col-5'>
                    <div className='row'>
                    <h3>Hosting and player</h3>
                    <div className='btn'>
                    <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                    </div>
                    <p>Host your videos with our HD, ad-free player.Wherever you embed or share them, your custom player design and branding will go with it. </p>
                    </div>
                <div className='col-5'>
                    <img width={250} src={img1} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Video;
