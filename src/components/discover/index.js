import React from 'react';

const Discover = ({img,head, describe}) => {
    return (
        <div className='discover container'>
            <div className='row justify-content-spaceBetween'>
                <div className='col-4'>
                    <h1>Discover the latest form video</h1>
                </div>
                <div className='col-6 row'>
                    <div className='col-5'><img src={img} alt="" /></div>
                    <div className='col-5 align-content-center'>
                        <span>{head}</span>
                        <h5>{describe}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discover;
