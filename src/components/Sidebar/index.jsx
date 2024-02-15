import { Icon } from '@iconify/react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const menuItems = [
        {
            icon: "fluent-mdl2:b-i-dashboard",
            name: 'Dashboard',
            path: '/dashboard',
        },
        {
            icon: "gridicons:create",
            name: 'Create New ',
            path: '/create-new',
        },
        {
            icon: "icomoon-free:new-tab",
            name: 'New Tasks',
            path: '/new-tasks',
        },
        {
            icon: "game-icons:progression",
            name: 'In Progress',
            path: '/in-progress',
        },
        {
            icon: "fluent-mdl2:completed",
            name: 'Completed',
            path: '/completed',
        },
        {
            icon: "pajamas:canceled-circle",
            name: 'Canceled',
            path: '/canceled',
        },
    ]


    return (
        <div className={` h-[100vh] bg-blue-200 text-blue-900 ${isMenuOpen ? 'w-[200px]' : 'w-[50px]'}`}>
            <div className='flex items-center justify-between text-2xl font-bold mb-5 border-b-[1px] border-blue-500 p-3'>
                <h2 className={`cursor-pointer ${isMenuOpen ? 'block' : 'hidden'}`}>Task</h2>
                <Icon
                    icon={
                        `${isMenuOpen
                            ? 'tabler:layout-sidebar-right-expand-filled'
                            : 'tabler:layout-sidebar-left-expand-filled'}`
                    }
                    className='cursor-pointer'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </div>
            <div className=''>
                {
                    menuItems.map((menuItem, index) => (
                        <NavLink
                            to={menuItem.path}
                            key={index}
                            className={({ isActive }) => `flex gap-4 items-center text-xl p-3 font-semibold  hover:bg-blue-300 ${isActive ? 'bg-blue-300' : ''}`}
                        >
                            <Icon icon={menuItem.icon} />
                            <span className={`${isMenuOpen ? 'block' : 'hidden'}`}>{menuItem.name}</span>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;