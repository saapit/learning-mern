import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss';
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SetDataBlog } from '../../config/redux/action';

const Home = () => {
    const [counter, setCounter] = useState(1)
    // const {dataBlogs, name} = useSelector(state => state);
    const {dataBlog, page} = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();

    console.log('Page: ', page)

    useEffect(() => {
        dispatch(SetDataBlog(counter))
    }, [counter, dispatch])

    const history = useHistory();

    // button limit pagination logic
    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1);
        console.log(counter);
    }
    const next = () => {
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
        console.log(counter);

    }
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
            <Button title="create blog" onClick={() => history.push('/create-blog')}/>
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
                {dataBlog.map(blog => {
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
                <Button title="Previous" onClick={previous}/>
                <Gap width={20}/>
                <p className="text-page">{page.currentPage} / {page.totalPage}</p>
                <Gap width={20}/>
                <Button title="Next" onClick={next}/>
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home
    