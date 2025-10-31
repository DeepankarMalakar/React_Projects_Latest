import { assets } from '../../assets/assets/assets';

const SidebarBottom = () => {
    return (
        <div className='bottom_section pl-5 flex flex-col space-y-4 pb-5'>
            <div className='bottom_entry flex space-x-2'>
                <img src={assets.question_icon} alt="Question logo" className='w-6' />
                <p>Help</p>
            </div>
            
            <div className='bottom_entry flex space-x-2'>
                <img src={assets.history_icon} alt="History logo" className='w-6' />
                <p>Activity</p>
            </div>
            
            <div className='bottom_entry flex space-x-2'>
                <img src={assets.setting_icon} alt="Settings logo" className='w-6' />
                <p>Settings</p>
            </div>
        </div>
    );
};

export default SidebarBottom;