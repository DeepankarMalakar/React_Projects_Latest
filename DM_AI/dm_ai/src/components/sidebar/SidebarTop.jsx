import { assets } from '../../assets/assets/assets';

const SidebarTop = ({ extend, toggleSidebar }) => {
    return (
        <div className="top_section px-4">
            {/* Menu Button */}
            <img
                src={assets.menu_icon}
                alt="Menu icon"
                className="menu_icon w-6 mt-3 cursor-pointer"
                onClick={toggleSidebar}
            />

            <div
                className={`new-chat-button 
    flex items-center cursor-pointer mt-5 rounded-lg transition-all duration-300 
    ${extend ? 'bg-black justify-start p-2 space-x-2 text-white' : 'bg-white border border-gray-300 justify-center p-2'}
`}
            >
                <img
                    src={assets.plus_icon}
                    alt="New Chat logo"
                    className="chat-logo w-4"
                />
                {extend && <p className="font-medium">New Chat</p>}
            </div>


            {/* Show content only when extended */}
            {extend && (
                <>
                    <div className="recent mt-4">
                        <p className="recent-title font-semibold text-gray-500 mb-2">
                            Recent
                        </p>
                        <div className="recent_entry flex items-center space-x-2 mt-2 cursor-pointer border border-gray-300 bg-white p-2 rounded-lg transition">
                            <img
                                src={assets.message_icon}
                                alt="Message icon"
                                className="w-5"
                            />
                            <p className="truncate text-sm">What is React...</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default SidebarTop;
