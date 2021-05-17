import React from 'react';
import './style.css';
import SignInBtn from '../../components/sign-in-btn/sign-in-btn';

function CreatePost() {
  return (
    <div className='createPost'>
      <SignInBtn />
      <p style={{ marginLeft: '10px' }}>to Post!</p>
      
    </div>
  )
}

export default CreatePost;