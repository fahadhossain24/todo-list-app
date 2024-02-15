import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="sm:hidden lg:flex justify-between px-4 bg-blue-200 text-2xl p-4 text-blue-900 font-semibold border-b-4 border-blue-400 sticky top-0">
            <div>
                
                <h2 className="font-bold cursor-pointer">Task Manager</h2>
            </div>
            <div className="w-[30%] flex items-center justify-between pr-3">
                <p className="cursor-pointer">Taskspace</p>
                 <Link to="/create-new"><Icon icon="gridicons:create" className="cursor-pointer"/></Link>
                <Icon icon="zondicons:notification"  className="cursor-pointer"/>
                <p className="cursor-pointer">Profile</p>
                <Link to='/login'>Login</Link>
                <Icon icon="icon-park-twotone:help" className="cursor-pointer" />
                
            </div>
        </div>
    );
};

export default Header;