import { use, useState } from "react";
import Blog from "../Blog/Blog";
import { toast } from "react-toastify";


const Blogs = ({blogsPromise}) => {
    const blogs =use(blogsPromise)
    // console.log(blogs)

    // See More Button Handerer and State
    const [seeMore,setSeeMore]=useState(4)
    const handleSeeMore=()=>{
        
        // setSeeMore((prevCount=>prevCount+4))
        const newCount=seeMore+4
        setSeeMore(newCount)
    }
    // console.log(seeMore)

    // Bookmark State and Reading time State
    const[bookMarks,setBookMarks]=useState([]);
    const[readingTime, setReadingTime]=useState(0)
    // BookMark and Reading Time Handeler 
    const handleBookMark=(blog)=>{
        const isExist=bookMarks.find(item=>item.id===blog.id)
        if(isExist){
            // const remainingBookMarks=bookMarks.filter(item=>item.id !== blog.id)
            // setBookMarks(remainingBookMarks)
            // alert('This blog is already bookmarked')
            toast.error('This blog is already bookmarked')
        }
        else{
            setBookMarks([...bookMarks,blog])
            toast.success('Blog bookmarked successfully')
        }
    }

    const handleReadingTime=(blog)=>{
        console.log('reading Time clicked :' ,blog)
    }
    return (
        <div>
            <h1 className="text-2xl font-bold my-6">Blog: {blogs.length}</h1>
            <div className="flex ">
                <div className="w-[70%] flex gap-8 flex-col">
                 {
                    blogs.filter(data=>data.id !== null).slice(0,seeMore).map(blog=><Blog key={blog.id} blog={blog}
                    handleBookMark={handleBookMark} handleReadingTime={handleReadingTime}
                    ></Blog>)
                 }
                 <div className="mx-auto my-6">
                    {
                        seeMore<blogs.length && (<button onClick={()=>handleSeeMore()}
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">See More</button>)
                    }
                    {/* <button onClick={()=>handleSeeMore()}
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">See More</button> */}
                 </div>
                </div>
                <div className="w-[30%] px-2">
                    <div className="bg-indigo-100 rounded-lg p-4 mb-6">
                       <h1 className="text-center py-2 font-bold text-2xl text-[#6047EC]">Spent time on read : 0</h1>
                    </div>
                    <div className="bg-indigo-100 p-3  ">
                    <div className="text-xl font-bold mx-auto    ">
                        <h1 className="my-2">Bookmarked Blogs :<span >{bookMarks.length}</span> </h1>
                       <h1 className=" flex flex-col gap-4 ">

                        {
                        bookMarks.map((blog,idx)=> <span className="bg-white rounded-lg px-3 py-2" key={idx}>{blog.title}</span>)
                       }
                       </h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;