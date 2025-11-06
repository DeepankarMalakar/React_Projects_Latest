const Cards = ({ onCardClick }) => {
    const suggestions = [
        "Explain AI in simple terms",
        "Generate a creative story",
        "Summarize today's tech news",
        "Give me coding interview tips",
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {suggestions.map((text, index) => (
                <div
                    key={index}
                    onClick={() => onCardClick(text)}
                    className="bg-white shadow-md rounded-2xl p-4 cursor-pointer hover:shadow-lg hover:scale-105 transition-transform text-gray-800 text-lg"
                >
                    {text}
                </div>
            ))}
        </div>
    );
};
export default Cards;