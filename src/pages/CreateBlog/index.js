import React from 'react';
import {Input, Button, Upload, TextArea, Gap} from '../../components';
import './createBlog.scss';

const CreateBlog = () => {
    return (
        <div className="blog-post">
            <p className="title">Content Create Blog Page</p>
            <Input label="Post Title"/>
            <Upload />
            <TextArea />
            <Gap height={20}/>
            <div className="button-action">
            <Button title="Save"/>
            </div>
        </div>
    )
}

export default CreateBlog
