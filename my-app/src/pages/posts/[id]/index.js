import React from 'react'
import { useParams } from 'next/navigation'

function PostDetail() {

    const Params = useParams();
    console.log(Params);




  return (
    <div>index</div>
  )
}

export default PostDetail