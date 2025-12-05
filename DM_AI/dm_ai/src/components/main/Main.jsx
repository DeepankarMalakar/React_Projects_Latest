import { useState } from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Cards from "./Cards";
import PromptField from "./PromptField";
import Result from "./Result";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Main = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const API_KEY = import.meta.env.VITE_GEMINI_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);

    const handleGenerate = async (query) => {
        const finalPrompt = query || prompt;

        // For pre-defined card clicks
        if (query) {
            setPrompt(query);
        }

        if (!finalPrompt.trim()) return alert("Please enter a prompt!");

        try {
            const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });
            const result = await model.generateContent(finalPrompt);
            const text = result.response.text();
            setResponse(text);
        } catch (err) {
            console.error("Error:", err);
            setResponse("Something went wrong. Check console for details.");
        }
    };

    // Reset state on logo click
    const resetState = () => {
        setPrompt("");
        setResponse("");
    };


    return (
        <div className="flex flex-col w-full h-screen bg-gray-50 overflow-hidden">
            <Navbar onReset={resetState} />

            <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {!response ? (
                        <motion.div
                            key="welcome"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center justify-center text-center space-y-8 w-full h-full"
                        >
                            <Welcome />
                            <Cards onCardClick={handleGenerate} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col w-full h-full overflow-y-auto"
                        >
                            <Result prompt={prompt} response={response} setResponse={setResponse} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="w-full flex justify-center items-center mb-6">
                <PromptField
                    prompt={prompt}
                    setPrompt={setPrompt}
                    onGenerate={handleGenerate}
                    response={response}
                />
            </div>
        </div>
    );
};

export default Main;
