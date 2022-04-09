import React from 'react';
import { useState,useEffect} from 'react';
import axios from 'axios';

const Like = () => {
    const [like,setLike]=useState(1);
    const [data,setData]=useState([]);

    function likehandle(){
      let item={like}
      axios.post('/likepost',item)
      .then(res=>{
          console.log(res);
      })
      .catch(err=>{
          console.log(err);
      })
    }
    useEffect(() => {
        axios.get('/likeCount')
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
                <a class="link-primary me-2" value={like} onChange={e=>setLike(e.target.value)} onClick={likehandle}><img src="../Img/download.png" alt='hello' style={{ width: `30px`, height: `30px` }} /></a>
                <span class="me-3 small">{data}</span>
        </>
    )
}

export default Like