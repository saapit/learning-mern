import React, { useEffect, useState } from 'react'
import './detailBlog.scss';
import {Gap, Link} from '../../components';
import { useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';

const DetailBlog = (props) => {
    const [data, setData] = useState({})
    useEffect(() => {
        const id = props.match.params.id;
        axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then(res => {
            // console.log('call by id success: ', res)
            setData(res.data.data);
        })
        .catch(err => console.log(err))
    }, [])
    const history = useHistory()
    if(data.author){
        return (
            <div className="detail-blog-wrapper">
            <img  className="img-cover" src={`http://localhost:4000/${data.image}`} alt="thumb"/>
            <p className="blog-title">{data.title}</p>
            <p className="blog-author">{data.author.name} - {data.createdAt}</p>
            <p className="blog-body">{data.body}</p>
            <Gap height={20}/>
            <Link title="Return to Home" onClick={() => history.goBack()}/>
        </div>
    )
}
    return <p>Loading data...</p>
}

export default withRouter(DetailBlog)
