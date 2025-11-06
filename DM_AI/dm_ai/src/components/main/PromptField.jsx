import { assets } from "../../assets/assets/assets";

const PromptField = ({ prompt, setPrompt, onGenerate, response }) => {
    return (
        <div className="w-full flex justify-center items-center mt-10">
            <div className="flex items-center gap-3 bg-white border border-gray-800 rounded-full px-4 py-2 shadow-sm w-3/4 max-w-2xl transition-all focus-within:ring-2 focus-within:ring-black">
                <input
                    type="text"
                    placeholder="Ask DM..."
                    className="flex-1 bg-transparent outline-none p-2 text-gray-800 text-lg placeholder-gray-500"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <img
                    src={assets.send_icon}
                    alt="send"
                    onClick={() => onGenerate()}
                    className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                />
            </div>
        </div>
    );
};
export default PromptField;