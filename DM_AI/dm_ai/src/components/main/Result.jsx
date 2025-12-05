import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Result = ({ response, setResponse, prompt }) => {
    return (
        <div className="flex flex-col w-full h-full items-center bg-gray-50">

            {/* Scrollable result area */}
            <div className="flex flex-col w-full max-w-4xl h-full overflow-y-auto px-6 py-8 space-y-6 scroll-smooth">

                {/* User bubble */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-end"
                >
                    <div className="bg-black text-white px-4 py-3 rounded-2xl max-w-[80%] shadow-md">
                        {prompt}
                    </div>
                </motion.div>

                {/* AI response bubble with Markdown */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex justify-start"
                >
                    <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-sm max-w-[80%] text-gray-800 leading-relaxed whitespace-pre-wrap">

                        {/* Wrapper div holds styling */}
                        <div className="prose prose-sm max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {response}
                            </ReactMarkdown>
                        </div>

                    </div>
                </motion.div>

            </div>

            {/* New Chat Button */}
            <button
                onClick={() => setResponse("")}
                className="px-5 py-2 mb-4 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
                + New Chat
            </button>

        </div>
    );
};

export default Result;
