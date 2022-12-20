import React from 'react';
import {Link} from 'react-router-dom';

function Hotel() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2>Hotels Data 
                                <Link to={'add-hotel'} className='btn btn-primary btn-sm float-end'>Add Hotel</Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Hotel;