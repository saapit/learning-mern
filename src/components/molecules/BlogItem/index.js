import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogItem.scss';

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img  className="image-thumb" src={RegisterBg} alt="post"/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Anima excepteur eu quis sunt labore aliqua ad voluptate anim reprehenderit eiusmod aliquip sint id.Ipsum sint deserunt sunt ad commodo proident consequat irure do qui amet sunt occaecat nulla.Laboris minim et officia esse.Adipisicing amet proident est est occaecat fugiat aute irure laboris.</p>
            </div>
        </div>
    )
}

export default BlogItem
