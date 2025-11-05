import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Gemini = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    // ✅ Make sure your .env file has: VITE_GEMINI_KEY=YOUR_KEY
    const API_KEY = import.meta.env.VITE_GEMINI_KEY;

    const genAI = new GoogleGenerativeAI(API_KEY);

    const handleGenerate = async () => {
        try {
            const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });
            const result = await model.generateContent(prompt);
            const text = result.response.text();
            setResponse(text);
        } catch (err) {
            console.error("Error:", err);
            setResponse("Something went wrong. Check console for details.");
        }
    };

    return (
        <div style={{ padding: 20, backgroundColor: "#fff3cd", borderRadius: 10 }}>
            <h2>💡 Gemini AI Demo</h2>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                cols={50}
                placeholder="Ask Gemini something..."
            />
            <br />
            <button onClick={handleGenerate}>Generate</button>
            <p>
                <strong>Response:</strong> {response}
            </p>
        </div>
    );
};

export default Gemini;
