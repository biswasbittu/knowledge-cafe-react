import { use } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({blogsPromise}) => {
    const blogs =use(blogsPromise)
    // console.log(blogs)
    return (
        <div>
            <h1 className="text-2xl font-bold my-6">Blog: {blogs.length}</h1>
            <div className="flex ">
                <div className="w-[70%] flex gap-8 flex-col">
                 {
                    blogs.filter(data=>data.id !== null).map(blog=><Blog key={blog.id} blog={blog}></Blog>)
                 }
                </div>
                <div className="w-[30%]">

                </div>
            </div>
        </div>
    );
};

export default Blogs;