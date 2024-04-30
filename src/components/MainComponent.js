
import {Outlet} from 'react-router-dom';

import { useSelector } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";


const MainComponent=()=>{
    const showSidebar = useSelector(store=>store.sidebarSlice[0].isshowSidebar);

    return <>
        <Header />
        <div className="flex">
            { showSidebar && <Sidebar className=""/>}
            <Outlet />
        </div>
    </>
}

export default MainComponent;