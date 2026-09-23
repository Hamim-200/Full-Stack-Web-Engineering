import React from 'react';

const Post = ({post}) => {
    return (
        <div className='border border-amber-300 rounded-2xl p-4 mb-4'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;