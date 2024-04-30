import { useEffect, useState } from "react";
import { DEMO_DATA, YOUTUBE_API } from "../../utils/constant";

import HomeSkeleton from "./HomeSkeleton";
import VideoCard from "./VideoCard";
import { Link, Navigate, json, useNavigate } from "react-router-dom";
import { showSidebarAction } from "../../utils/redux/sidebarCollapseSlice";
import { useDispatch, useSelector } from "react-redux";

const Home=()=>{
    const [fetchData, setFetchData] = useState(null);
    
    const dispatch = useDispatch();
    const isshowSidebarOpen = useSelector(store=>store.sidebarSlice[0].isshowSidebar);

    // this useEffect is for showing sidebar in home page
    
    useEffect(()=>{
        dispatch(showSidebarAction(true));
        const fetched_data = fetch(YOUTUBE_API);
        fetched_data.then((data)=>{
            return data.json();
        }).then((jsonData)=>{
            setFetchData(jsonData);
        })
    },[])
    
    
    if(fetchData === null){
        return <HomeSkeleton />
    }
    return<>
        <div className={`flex flex-wrap ${ isshowSidebarOpen ? " ml-72" : "pl-14"}`}>
            {
                fetchData.items.map((item)=>{
                    return <>
                        <Link to={`/watch/${item.id}`} >
                            <VideoCard key={item.id} info={ item } />
                        </Link>
                    </>
                })
            }
        </div>
    </>
}
export default Home;