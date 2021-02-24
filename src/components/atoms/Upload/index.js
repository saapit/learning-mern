import React from 'react';
import { LoginBg } from '../../../assets';
import './upload.scss';

const Upload = ({img, ...rest}) => {
    return (
        <div className="upload">
            {/* logic */}
            { img && <img className="preview" src={img} alt="image posting"/> } 
            <input type="file" {...rest} />
        </div>
    )
}

export default Upload
