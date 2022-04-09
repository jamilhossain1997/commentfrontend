import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {Pagination} from 'react-bootstrap';
import Like from './Like'

const Comment = () => {
    const [data, setData] = useState([]);
    const [datareply, setDatareply] = useState([]);
    const [reply, setReply] = useState("");
    const [show, setShow] = useState(false);
    useEffect(() => {
        axios.get('/commentView')
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        axios.get('/replyView')
            .then(res => {
                console.log(res)
                setDatareply(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function headleComment() {
        let item = { reply }
        axios.post('/replypost', item)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <div class="container py-4">
                <div class="col-md-10 col-lg-8 m-auto">

                    <div class="bg-white rounded-3 shadow-sm p-4">

                        <h4 class="mb-4">Comments</h4>

                        {/* <!-- Comment #1 //--> */}
                        {
                            data.map((item) => {

                                return (
                                    <>
                                        <div class="">
                                            <div class="py-3">
                                                <div class="d-flex comment">
                                                    <div class="flex-grow-1 ms-3">
                                                        <div class="mb-1"><a href="#" class="fw-bold link-dark me-1">{item.name}</a> <span class="text-muted text-nowrap">{item.created_at}</span></div>
                                                        <div class="mb-2">{item.comment}</div>
                                                        <div class="hstack align-items-center mb-2">
                                                            <Like/>
                                                            <a class="link-secondary me-4" href="#"><i class="zmdi zmdi-thumb-down"></i></a>
                                                            <a class="link-secondary small" href="#" onClick={() => setShow(!show)}>REPLY</a>
                                                           
                                                        </div>
                                                       
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                    </>
                                )

                            })
                        }

                        {
                            show && <div class="container py-4">
                                <div class="col-md-10 col-lg-8 m-auto">
                                    <div class="bg-white rounded-3 shadow-sm p-4 mb-4">

                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                {/* <div class="hstack gap-2 mb-1">
                                                    <a href="#" class="fw-bold link-dark">{item.name}</a>
                                                </div> */}
                                                <div class="form-floating mb-3">
                                                    <textarea class="form-control w-100"
                                                        placeholder="Leave a comment here"
                                                        id="my-comment"
                                                        style={{ height: `7rem` }} value={reply} onChange={e => setReply(e.target.value)}></textarea>
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
                        }

                        {
                            datareply.map((item) => {
                                return (
                                    <>
                                        <div class="">
                                            <div class="py-3">
                                                <div class="d-flex comment">
                                                    <div class="flex-grow-1 ms-3">
                                                        <div class="mb-1"><a href="#" class="fw-bold link-dark me-1">{item.name}</a> <span class="text-muted text-nowrap">{item.created_at}</span></div>
                                                        <div class="mb-2">{item.reply}</div>
                                                        <div class="hstack align-items-center mb-2">
                                                            <a class="link-primary me-2" href="#"><i class="zmdi zmdi-thumb-up"></i></a>
                                                            <span class="me-3 small">55</span>
                                                            <a class="link-secondary me-4" href="#"><i class="zmdi zmdi-thumb-down"></i></a>
                                                            <a class="link-secondary small" href="#" onClick={() => setShow(!show)}>REPLY</a>
                                                          
                                                        </div>
                                                       
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <Pagination style={{marginLeft:`400px`}}>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item >{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </>
    )
}

export default Comment