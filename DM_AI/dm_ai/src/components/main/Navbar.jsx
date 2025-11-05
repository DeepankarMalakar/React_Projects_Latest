import { assets } from "../../assets/assets/assets"

const Navbar = () => {
    return (
        <div className="flex h-15 w-full bg-gray-100 justify-between items-end">
            <div className="ml-7 flex items-end">
                <h1 className="text-3xl">DM</h1>
                <span>.ai</span>
            </div>
            <div className="w-10 mr-7">
                <img src={assets.user_icon} alt="user_logo" className="rounded-full cursor-pointer" />
            </div>
        </div>
    )
}

export default Navbar
