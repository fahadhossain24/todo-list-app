import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';

const AppInitialLayout = () => {
    return (
        <div>
            <Header />
            <div className='w-full flex'>
                <Sidebar />
                <Outlet/>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default AppInitialLayout;