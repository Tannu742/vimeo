import React from 'react';

const Slider = ({ imgs=[], slider_li }) => {
    return (
        <div className='slider'>
            <div className='row logo'>
                <ul className='logo-slide'>
                    {
                        imgs.map((img)=> <li key={img.id} className={slider_li}><img src={img.src} alt="" /></li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Slider;
