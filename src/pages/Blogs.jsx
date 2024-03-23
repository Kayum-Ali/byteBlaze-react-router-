import { Link, useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import Loader from "../Components/Loader";


const Blogs = () => {
    const blogs = useLoaderData()

    const navigation = useNavigation()

    if (navigation.state === "loading") return <Loader></Loader>
    return (
        <section className=" py-6">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <Link to={`/bookmarks/${blogs.id}`} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                    <img src={blogs[3].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="hover:bg-pink-300 hover:text-primary space-y-2 lg:col-span-5  transition border-2 border-primary hover:border-secondary hover:scale-105 border-opacity-30 p-2 rounded-xl">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[3].title}</h3>
                        <span className="text-xs font-bold">{new Date(blogs[3].published_at).toLocaleDateString()}</span>
                        <p>{blogs[3].description}</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1  gap-6 sm:grid-cols-2 lg:grid-cols-3">


                    {blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)}
                </div>

            </div>
        </section>
    );
};

export default Blogs;