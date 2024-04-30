import { useEffect, useState } from "react";
import { CHANNEL_API, CHANNEL_DEMO_DATA } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { showSidebarAction } from "../../utils/redux/sidebarCollapseSlice";

const Channel = () => {
    const [channelData, setChannelData] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(showSidebarAction(true));

        const channelApi = fetch(CHANNEL_API);
        channelApi.then(data=>data.json())
        .then(jsonData=>{
            console.log(jsonData);
            setChannelData(jsonData);
        })
        // setChannelData(CHANNEL_DEMO_DATA);
    },[]);
    // console.log(channelData);
    if(channelData === null) return<></>
    const items = channelData.items[0].snippet;
    
    const {customUrl} = items;    
    const {title, description} = items.localized;
    const {url} = items.thumbnails.high.url;


    return<>
        <div className="ml-80">
            <div className="flex p-6 my-2">
                <img className="rounded-full w-[200px] h-[200px]" 
                    src={`${url}`} />
                <div className="px-6">
                    <h1 className=" font-bold text-3xl py-2">{title}</h1>
                    <p className=" text-gray-500  text-lg">{customUrl} . 171m subscrribers. 135k videos</p>
                    <p className=" text-gray-500  text-lg">{description}</p>
                    <div className='flex items-center my-4'>
                        <button className='bg-black text-white rounded-full p-2 font-semibold'>Subscriber</button>
                    </div>
                </div>
            </div>

            <div className="flex ">
                <p className="px-10 font-semibold text-lg">Home</p>
                <p className="px-10 font-semibold text-lg">Video</p>
                <p className="px-10 font-semibold text-lg">Shorts</p>
                <p className="px-10 font-semibold text-lg">Playlist</p>
            </div>
            {/* youtube channel section */}
            <hr></hr>


            {/* all the videos of that channel section */}

            <div className=" px-3 cursor-pointer" onClick={()=>{
            }} >
                <div className="flex m-3">
                    <img
                        className="rounded-lg w-[600px] h-[300px]"
                        src="https://yt3.ggpht.com/eu051krrRNQMMi5h6ynfnvhFJzxzSKulJQ42g5v72MQ9Bvv8KdpNIa6yM-0iGpnDgSF0itAD=s240-c-k-c0x00ffffff-no-rj">
                    </img>

                    <div className="px-6">
                        <h1 className=" font-semibold text-xl py-1">Set India</h1>
                        <p className=" text-gray-500">23-23-12</p>
                        <div className="flex items-center py-4">
                            <img 
                            className="w-10 rounded-full" 
                            src="https://yt3.ggpht.com/ytc/AIdro_kBZyti_EdG7Z2tPURAhtvZcDEoq73Vm0cSpJGX4RcB-exQUY_LOdwIilGHZgafdKmRUA=s48-c-k-c0x00ffffff-no-rj">
                                
                            </img>                        
                            <h1 className=" font-semibold text-xl py-1 px-2">Hi India </h1>
                        </div>
                        <div>
                            <p>hey.........</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
}
export default Channel;