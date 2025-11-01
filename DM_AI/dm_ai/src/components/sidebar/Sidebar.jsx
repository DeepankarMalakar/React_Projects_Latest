import SidebarTop from './SidebarTop';
import SidebarBottom from './SidebarBottom';

const Sidebar = () => {
    return (
        <div className="sidebar min-h-screen flex flex-col justify-between bg-gray-100 w-[200px]">
            <SidebarTop />
            <SidebarBottom />
        </div>
    )
}

export default Sidebar