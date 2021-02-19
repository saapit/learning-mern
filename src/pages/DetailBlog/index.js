import React from 'react'
import { RegisterBg } from '../../assets';
import './detailBlog.scss';
import {Gap, Link} from '../../components';
import { useHistory } from 'react-router-dom';

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className="detail-blog-wrapper">
            <img  className="img-cover" src={RegisterBg} alt="thumb"/>
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Adipisicing ut est in culpa occaecat qui non eu labore exercitation ea deserunt duis laboris.Reprehenderit qui ut magna mollit pariatur incididunt magna aute cillum excepteur.Culpa pariatur enim fugiat enim enim pariatur fugiat minim ad sunt pariatur in velit.</p>
            <Gap height={20}/>
            <Link title="Return to Home" onClick={() => history.goBack()}/>
        </div>
    )
}

export default DetailBlog
