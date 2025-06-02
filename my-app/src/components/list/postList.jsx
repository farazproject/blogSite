import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/slices/postsSlice";


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
return (
<div className="mt-[400nppx]"> 
<h2 >Posts</h2>
{items.map((post) => (
<div key={[post.id]}>
<h4 className="bg-red-500">{post.title}</h4>
<p className="bg-blue-300">{post.body}</p>
</div>
))}
</div>
);
}
export default PostsList;