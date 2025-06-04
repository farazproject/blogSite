import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/slices/postsSlice";
import { useRouter } from "next/router";


function PostsList() {
const dispatch = useDispatch();
const { items, status, error } = useSelector((state) => state.posts);



useEffect(() => {

if (status === 'idle') {
dispatch(fetchPosts());
}
}, [status, dispatch]);


if (status === 'loading') return <p>Loading...</p>;
if (status === 'failed') return <p>Error: {error}</p>;

const router = useRouter();

function handleChange(dynamic) {
    router.push(`/posts/:${dynamic}`); // Example dynamic route
}




return (


<div className="mt-[400nppx]"> 

<h2 >Posts</h2>

{items.map((post) => (

<div key={post.id}>

<h4 className="bg-red-500">{post.title}</h4>

<p className="bg-blue-300">{post.body}</p>
<button className="bg-white" onClick={() => {
    handleChange(post.title);
}}> button</button>
</div>

))}



</div>
);
}
export default PostsList;