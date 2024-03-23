import { useLoaderData } from "react-router-dom";
import placeHolderImage from '../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog = useLoaderData();
    const { cover_image, tags, body_html, title } = blog;

    return (
        <div className=" mx-auto group no-underline focus:no-underline    border-secondary  border-opacity-30 p-2 rounded-xl ">
            <img role="presentation" className="object-cover w-full rounded-xl h-44 bg-gray-500" src={cover_image || placeHolderImage} />


            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">

                {tags.map((tag, idx) =>
                    <a href="#_" key={idx} className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-cyan-500 border-purple-700 text-white">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-secondary  group-hover:w-full group-hover:h-[40px] opacity-80"></span>
                        <span className="relative">#{tag}</span>
                    </a>
                )}
            </div>

            <div className="space-y-2">
                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                <p><Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown></p>
            </div>


        </div>
    );
};

export default Content;