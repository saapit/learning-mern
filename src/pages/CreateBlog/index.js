import {React, useState} from 'react';
import {Input, Button, Upload, TextArea, Gap, Link} from '../../components';
import './createBlog.scss';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const history = useHistory();

    const onSubmit = () => {
        console.log('title: ', title);
        console.log('body: ', body);
        console.log('image: ', image);

        //menerima data
        const data = new FormData();
        data.append('title', title);
        data.append('body', body);
        data.append('image', image);

        axios.post('http://localhost:4000/v1/blog/post', data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log('post success: ', res);
        })
        .catch(err => console.log(err))
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
        //static url - sementara
        setImagePreview(URL.createObjectURL(file));
    }
    return (
        <div className="blog-post">
            <Link title="Back" onClick={() => history.push('/')}/>
            <p className="title">Content Create Blog Page</p>
            <Input label="Post Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} />
            <TextArea value={body} onChange={(e) => setBody(e.target.value)}/>
            <Gap height={20}/>
            <div className="button-action">
            <Button title="Save" onClick={onSubmit}/>
            <Gap height={20}/>
            </div>
        </div>
    )
}

export default CreateBlog
