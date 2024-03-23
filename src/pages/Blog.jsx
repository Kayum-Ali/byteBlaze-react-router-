import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";


const Blog = () => {

    const [tabIndex, setTabIndex] = useState(0)
    const blog = useLoaderData();

    const { comments_count, title, reading_time_minutes, public_reactions_count, published_at, tags } = blog
    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">


                        <p className="text-sm">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>

                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
                    </div>
                </div>

                {/* tabs */}
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  ">
                    <Link onClick={() => setTabIndex(0)} to='' className={`flex ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Content</span>
                    </Link>
                    <Link onClick={() => setTabIndex(1)} to='author' className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border  border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Autor</span>
                    </Link>

                </div>
                <Outlet></Outlet>
            </article>
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">

                    {tags.map((tag, idx) =>
                        <a href="#_" key={idx} className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-cyan-500 border-purple-700 text-white">
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-secondary  group-hover:w-full group-hover:h-[40px] opacity-80"></span>
                            <span className="relative">#{tag}</span>
                        </a>
                    )}



                </div>

            </div>
        </div>
    );
};

export default Blog;