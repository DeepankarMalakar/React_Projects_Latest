import SidebarTop from './SidebarTop';
import SidebarBottom from './SidebarBottom';
import { useState } from 'react';

const Sidebar = () => {
    const [extend, setExtend] = useState(true);

    const toggleSidebar = () => {
        setExtend(prevExtend => !prevExtend);
    };

    return (
        <div
            className={`sidebar min-h-screen flex flex-col justify-between bg-gray-100 transition-all duration-300 
        ${extend ? 'w-[200px]' : 'w-[70px]'}`}  // Smooth width animation
        >
            <SidebarTop extend={extend} toggleSidebar={toggleSidebar} />
            <SidebarBottom extend={extend} />
        </div>
    );
};

export default Sidebar;
