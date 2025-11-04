import { assets } from '../../assets/assets/assets';

const SidebarBottom = ({ extend }) => {
    return (
        <div className="bottom_section px-4 pb-5 flex flex-col space-y-4">
            <div className="bottom_entry flex items-center space-x-2 cursor-pointer">
                <img src={assets.question_icon} alt="Help" className="w-6" />
                {extend && <p>Help</p>}
            </div>

            <div className="bottom_entry flex items-center space-x-2 cursor-pointer">
                <img src={assets.history_icon} alt="Activity" className="w-6" />
                {extend && <p>Activity</p>}
            </div>

            <div className="bottom_entry flex items-center space-x-2 cursor-pointer">
                <img src={assets.setting_icon} alt="Settings" className="w-6" />
                {extend && <p>Settings</p>}
            </div>
        </div>
    );
};

export default SidebarBottom;
