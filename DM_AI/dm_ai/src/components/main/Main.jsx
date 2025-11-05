import Navbar from "./Navbar"
import Welcome from "./Welcome"
import Cards from "./Cards"
import PromptField from "./PromptField"
import Gemini from "../../config/Gemini"

const Main = () => {
    return (
        <div className="flex flex-col w-full h-screen">
            <Navbar />
            <Welcome />
            <div className="flex items-center justify-center mt-8">
                <Cards />
            </div>
            <PromptField />
            <Gemini />
        </div>
    );
}

export default Main
