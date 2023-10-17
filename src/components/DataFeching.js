import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFeching() {
    
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id) 
    }

    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(res =>{
        console.log(res);
        setPosts(res.data)
    })
    .catch(error => {
        console.log(error)
    })
    },[idFromButtonClick])
  return (
    <div>
        <input type="number" value={id} onChange={e => setId(e.target.value)}/>
        <div>{posts.title}</div>
        <button type='button' className="btn btn-secondary m-3" onClick={handleClick}>Feching Data</button>
        {/* <ul>
            {
                posts.map(post => <li key = {post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default DataFeching
