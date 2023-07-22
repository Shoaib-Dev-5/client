import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const useFetchGet = (url) => {
    const baseUrl="http://127.0.0.1:8080/api";
    const {}=useQuery('register',()=>{
        axios.post()
    })
  return (
    <div>

    </div>
  )
}

export default useFetchGet