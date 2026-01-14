import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Blogs from './components/Blogs/Blogs';
import { ToastContainer } from 'react-toastify';

const blogsPromise = fetch('./blogs.json').then(res => res.json())

const App = () => {

  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Blogs blogsPromise={blogsPromise}></Blogs>
      </Suspense>
      <ToastContainer  position='top-center' autoClose={2000}> </ToastContainer>

    </div>
  );
};

export default App;