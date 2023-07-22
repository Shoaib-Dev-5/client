import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const useFetchPost = (url,data) => {
    const baseUrl="http://127.0.0.1:8080/api";
    return useQuery('register',()=>(
        axios.post(`${baseUrl}/${url}`,{...data})
    ))
}

export default useFetchPost