import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero -mt-16">
            <div className="hero-content text-center">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold">Wellcome to <span className="bg-gradient-to-r bg-300% from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
                    <p className="py-6">ByteBlaze is the bridge between the complex world of technology and
                        the curious minds eager to understand it</p>
                    <div className="flex gap-2 justify-center">



                        <Link to='/blogs' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-secondary rounded-xl group">
                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Read Blogs</span>
                        </Link>

                        <Link to='/bookmarks' className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Bookmarks</span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;