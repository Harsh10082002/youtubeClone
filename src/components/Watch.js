import {useParams} from 'react-router-dom';
import { ALL_COMMENTS_DATA, COMMENT_DATA_API, DEMO_DATA, YOUTUBE_API, YOUTUBE_ID_URL } from '../../utils/constant';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comments from './Comments';
import { showSidebarAction } from '../../utils/redux/sidebarCollapseSlice';
import LiveComments from './LiveComments';

const Watch=()=>{
    
    const {id} = useParams();
    const[allComments, setAllComments] = useState([]);
    
    const dispatch = useDispatch();
    const isshowSidebar = useSelector(store=>store.sidebarSlice[0].isshowSidebar);

    const [fetchData, setFetchData] = useState(null);

    useEffect(()=>{
        dispatch(showSidebarAction(false));
// for fetching data according to id


        const fetched_data = fetch(YOUTUBE_API);
        fetched_data.then((data)=>{
            return data.json();
        }).then((jsonData)=>{
            setFetchData(jsonData);
        });

        // setFetchData(DEMO_DATA);
        fetchCommentData();
        // setAllComments(ALL_COMMENTS_DATA.items);

    },[])
    if(fetchData === null)return <div>......</div>;
    
    const list = fetchData.items;
    
    const videoData = list.filter((d)=>{
        return d.id===id;
    })
    
    const {title, channelTitle, description, liveBroadcastContent, publishedAt} = videoData[0].snippet;
    const {viewCount, likeCount, commentCount} = videoData[0].statistics;
    
    
    const iSvideDataEmpty = () =>{
        if(Object.keys(videoData[0].snippet).length === 0){
            return true;
        }
        return false;
    }
    const isVideoEmpty = iSvideDataEmpty();


    function fetchCommentData(){
        fetch(COMMENT_DATA_API+id)
        .then((commData)=>{
            return commData.json();
        }).then((commDataJson)=>{
            setAllComments(commDataJson.items);
        })
    }

    return<>
        <div className={`flex w-full p-4 
        ${isshowSidebar && "bg-gradient bg-black bg-opacity-70"}`}>
            <div className=' flex flex-col w-[800px] ml-32'>
                <div className="p-2 m-4  z-10 ">
                    <iframe 
                    
                        width="740" 
                        height="400" 
                        src={`https://www.youtube.com/embed/${id}`}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className=' rounded-lg'
                    >

                    </iframe>
                    {/* detail section of a video */}
                    <div className=''>
                        <h3 className='py-2 text-xl font-semibold my-2'>{title}</h3>
                        <div className='flex justify-between'>
                            <div className='flex  '>
                                <div className='flex '>
                                    <img className="w-12" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"/>
                                    <div>
                                        <p>{channelTitle}</p>
                                        <p>6.7k Subscriber</p>
                                    </div>
                                </div>
                                <div className='flex items-center ml-8'>
                                    <button className='bg-black text-white rounded-full p-2 font-semibold'>Subscriber</button>
                                </div>
                            </div>
                            <div>
                                <div className='flex'>
                                    <div className='bg-gray-200 p-2 rounded-full mx-2'>
                                        <button className=' items-start px-4 font-semibold '>👍🏻 {likeCount} </button>
                                        <button className='px-4 border-l-2 border-gray-700'> 👎🏻</button>
                                    </div>
                                    <div className='bg-gray-200 p-2 rounded-full mx-2'>
                                        <button className=' items-start px-4 font-semibold '>╰┈➤ Share</button>
                                    </div>
                                    <div className='bg-gray-200 p-2 rounded-full mx-2'>
                                        <button className=' items-start px-2 font-semibold '>...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    {/* descriptioni section */}
                <div className='p-2 mx-4 my-1 rounded-lg bg-gray-100 shadow-md'>
                    <h3>{viewCount} views {publishedAt}</h3>
                    <p>
                        {description}
                        <button className='bg-blue-600 p-2'>show more</button>
                    </p>

                </div>

    {/* comments section */}
                <div className='p-2 mx-4   z-10'>
                    <p className='font-bold py-4 text-2xl'>{commentCount} Comments</p>
                    <Comments allComments={allComments}/>
                </div>
                
            </div>

            {/* for live comments */}
            {
                isVideoEmpty || liveBroadcastContent ==='none' ? <></> : <LiveComments />
            }

        </div>
    </>
}
export default Watch;