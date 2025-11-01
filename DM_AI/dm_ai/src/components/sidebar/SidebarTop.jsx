import { assets } from '../../assets/assets/assets';
import { useState } from 'react';

const SidebarTop = () => {
    // Initialize extend to true, as it seems you want the sidebar open by default
    const [extend, setExtend] = useState(true);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setExtend(prevExtend => !prevExtend); // Use the functional update form for toggling
    };

    return (
        <div className="top_section pl-5">
            {/* FIX: Use an arrow function to prevent immediate execution and enable toggling */}
            <img 
                src={assets.menu_icon} 
                alt="Menu icon" 
                className="menu_icon w-6 block mt-3 cursor-pointer" // Added cursor-pointer
                onClick={toggleSidebar} 
            />
            
            {/* New Chat Button and Recent Chats are conditionally rendered */}
            {extend ? (
                <>
                    {/* New Chat Button */}
                    <div className='new-chat-button p-2 bg-gray-300 rounded-lg flex items-center space-x-2 cursor-pointer mt-5 w-32'>
                        <img src={assets.plus_icon} alt="New Chat logo" className='chat-logo w-4' />
                        <p className="chat text-[15px] font-semibold">New Chat</p>
                    </div>

                    {/* Recent Chats Section - Removed unnecessary 'border' */}
                    <div className="recent mt-4">
                        <p className="recent-title font-semibold text-gray-500 mb-2">Recent</p>
                        <div className="recent_entry flex space-x-1 mt-2 cursor-pointer border border-gray-400 p-1 mr-1 rounded-lg hover:bg-gray-100 transition-colors">
                            <img src={assets.message_icon} alt="Message icon" className='w-6' />
                            {/* Added truncation styling for long chat titles */}
                            <p className="truncate">What is React...</p> 
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default SidebarTop;