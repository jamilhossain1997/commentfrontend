import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useEffect } from 'react';

const Post = () => {
    const [img,setImg] = useState("");
    const [data,setData] = useState([]);
    const [comment,setComment]=useState("");
    const [message, setMessage] = useState(null);


    async function heandlesubmit() {
        const formData = new FormData();
        formData.append('img', img);
        try {
            const response = await axios({
                method: "post",
                url: "postmethode",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage(response.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        axios.get('/postView')
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    },[])
   
    function headleComment(){
        let item={comment}
        axios.post('/commentpost',item)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <>
            <h1 class="text-cen">Data Post</h1>
            <input type='file' onChange={(e) => setImg(e.target.files[0])} />
            <button onClick={heandlesubmit}>submit</button>


            {
                data.map((item) => {
                    return (
                        <>
                            <Card>
                                <Card.Header as="h5">Image</Card.Header>
                                <img src={"http://127.0.0.1:8000/" + item.img} alt="img" />
                            </Card>
                            <div class="container py-4">
                                <div class="col-md-10 col-lg-8 m-auto">
                                    <div class="bg-white rounded-3 shadow-sm p-4 mb-4">
                                      
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="hstack gap-2 mb-1">
                                                    <a href="#" class="fw-bold link-dark">{item.name}</a>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <textarea class="form-control w-100"
                                                        placeholder="Leave a comment here"
                                                        id="my-comment"
                                                        style={{ height: `7rem` }} value={comment} onChange={e=>setComment(e.target.value)}></textarea>
                                                    <label for="my-comment">Leave a comment here</label>
                                                </div>
                                                <div class="hstack justify-content-end gap-2">
                                                    <button class="btn btn-sm btn-link link-secondary text-uppercase">cancel</button>
                                                    <button class="btn btn-sm btn-primary text-uppercase" onClick={headleComment}>comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    )
                })
            }

        </>
    )
}

export default Post