import React from 'react';

const Blog = ({blog}) => {
    console.log(blog)
    const {author, posted_date, cover, author_img, reading_time, title,hashtags} = blog

    return (
        <div>
            <div className="card  bg-base-100 shadow-sm">
                <figure>
                    <img
                    className='w-full'
                        src={cover}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;