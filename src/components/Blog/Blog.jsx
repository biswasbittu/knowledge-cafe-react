import { faBookmark, } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Blog = ({ blog,handleBookMark,handleReadingTime }) => {
    // console.log(blog)
    const { author, posted_date, cover, reading_time, title, hashtags, author_img,id } = blog

    return (
        <div>
            <h1>{blog.length}</h1>
            <div className="card  bg-base-100 shadow-sm">
                <figure>
                    <img
                        className='w-full'
                        src={cover}
                        alt="Album" />
                </figure>
                <div>
                    <div className='flex justify-between items-center px-4'>
                        <div className='my-4 flex  items-center gap-4'>
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src={author_img} />
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl'>{author}</h1>
                                <p className='text-xl font-semibold text-gray-500'>{posted_date}</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-2xl font-semibold text-gray-500'>{reading_time} min read</p>
                            <button onClick={()=>handleReadingTime(id,reading_time)}
                            className='btn btn-link'> 
                            <FontAwesomeIcon className='text-xl' icon={faBookmark} />
                            </button>
                            
                        </div>
                    </div>

                </div>
                <div className="card-body">
                    <h2 className="card-title text-7xl">{title}</h2>
                    <p className='flex gap-4 text-xl font-semibold text-gray-500 my-6'>{hashtags.map((has,idx) => <span key={idx}># {has}</span>)}</p>
                    <div className="card-actions justify-start">
                        <button onClick={(()=>handleBookMark(blog))}
                        className="btn btn-link font-bold text-xl text-[#6047EC]">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;