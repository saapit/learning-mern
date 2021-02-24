import {React} from 'react';
import {Input, Button, Upload, TextArea, Gap, Link} from '../../components';
import './createBlog.scss';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { postToAPI, setForm, setImgPreview } from '../../config/redux/action';

const CreateBlog = () => {
    const {form, imgPreview} = useSelector(state => state.createBlogReducer);
    const {title, body} = form;
    const dispatch = useDispatch();

    const history = useHistory();

    const onSubmit = () => {
       postToAPI(form);
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        dispatch(setForm('image', file));
        //static url - sementara
        dispatch(setImgPreview(URL.createObjectURL(file)));
    }
    return (
        <div className="blog-post">
            <Link title="Back" onClick={() => history.push('/')}/>
            <p className="title">Content Create Blog Page</p>
            <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))}/>
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))}/>
            <Gap height={20}/>
            <div className="button-action">
            <Button title="Save" onClick={onSubmit}/>
            <Gap height={20}/>
            </div>
        </div>
    )
    
}

export default CreateBlog
