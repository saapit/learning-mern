import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    // const [dataBlog, setDataBlog] = useState([]); 

    const {dataBlogs, name} = useSelector(state => state);

    console.log('state global: ', dataBlogs)
    const dispatch = useDispatch();


    useEffect(() => {

        setTimeout(() => {
            dispatch({
                type: 'UPDATE_NAME'
            })
        }, 3000)

        axios.get('http://localhost:4000/v1/blog/posts?page=1&perPage=4')
        .then(result => {
            console.log('data API', result.data);
            const responseAPI = result.data;

            // collect array not object
            // setDataBlog(responseAPI.data); 
            
            setTimeout(() => {
                dispatch({
                    type: 'UPDATE_DATA_BLOG',
                    payload: responseAPI.data
                })
            }, 5000)
        })
        .catch(err => {
            console.log('error', err);
        })
    }, [])
    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
            <Button title="create blog" onClick={() => history.push('/create-blog')}/>
            </div>
            <p>
                {name}
            </p>
            <Gap height={20}/>
            <div className="content-wrapper">
                {dataBlogs.map(blog => {
                    return <BlogItem key={blog._id}
                    image={`http://localhost:4000/${blog.image}`} 
                    title={blog.title}
                    body={blog.body}
                    name={blog.author.name}
                    date={blog.createdAt}
                    />
                })}
            </div>
            <div className="pagination">
                <Button title="Previous"/>
                <Gap width={20}/>
                <Button title="Next"/>
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home
    