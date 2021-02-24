import React from 'react'
// import { RegisterBg } from '../../../assets'
import './blogItem.scss';
import {Button, Gap} from '../../../components'
import { useHistory } from 'react-router-dom';

const BlogItem = (props) => {
    const history = useHistory();
    const {image, title, name, date, body, _id} = props;   //desctructing

    return (
        <div className="blog-item">
            <img  className="image-thumb" src={image} alt="post"/>
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push(`/detail-blog/${_id}`)}/>
            </div>
        </div>
    )
}

export default BlogItem
