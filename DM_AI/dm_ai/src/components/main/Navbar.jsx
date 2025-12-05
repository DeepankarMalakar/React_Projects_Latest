import { assets } from "../../assets/assets/assets"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = ({onReset}) => {
    const navigateToHome = useNavigate();

    const handleLogoClick = () => {
        onReset();
        navigateToHome('/');
    };
    return (
        <div className="flex h-15 w-full bg-gray-100 justify-between items-end">
            <Link to="/">
                <div className="ml-7 flex items-end" onClick={handleLogoClick}>
                    <h1 className="text-3xl">DM</h1>
                    <span>.ai</span>
                </div>
            </Link>
            <div className="w-10 mr-7">
                <img src={assets.user_icon} alt="user_logo" className="rounded-full cursor-pointer" />
            </div>
        </div>
    )
}

export default Navbar
