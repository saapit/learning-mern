import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogItem.scss';
import {Button, Gap} from '../../../components'
import { useHistory } from 'react-router-dom';

const BlogItem = () => {
    const history = useHistory()
    return (
        <div className="blog-item">
            <img  className="image-thumb" src={RegisterBg} alt="post"/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Anima excepteur eu quis sunt labore aliqua ad voluptate anim reprehenderit eiusmod aliquip sint id.Ipsum sint deserunt sunt ad commodo proident consequat irure do qui amet sunt occaecat nulla.Laboris minim et officia esse.Adipisicing amet proident est est occaecat fugiat aute irure laboris.</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push('/detail-blog')}/>
            </div>
        </div>
    )
}

export default BlogItem
