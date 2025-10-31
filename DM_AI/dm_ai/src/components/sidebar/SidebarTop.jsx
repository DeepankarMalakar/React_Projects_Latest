import { assets } from '../../assets/assets/assets';

const SidebarTop = () => {
    return (
        <div className="top_section pl-5">
            <img src={assets.menu_icon} alt="Menu icon" className="menu_icon w-6 block mt-3" />
            
            {/* New Chat Button */}
            <div className='new-chat-button p-2 bg-gray-300 rounded-lg flex items-center space-x-2 cursor-pointer mt-5 w-32'>
                <img src={assets.plus_icon} alt="New Chat logo" className='chat-logo w-4' />
                <p className="chat text-[15px] font-semibold">New Chat</p>
            </div>

            {/* Recent Chats Section */}
            <div className="recent mt-4">
                <p className="recent-title">Recent</p>
                <div className="recent_entry">
                    <img src={assets.message_icon} alt="Message icon" className='w-6' />
                    <p>What is React...</p>
                </div>
            </div>
        </div>
    );
};

export default SidebarTop;