import { useEffect, useState } from "react";
import EachLiveComment from "./EachLiveComment";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../utils/redux/LiveCommentSlice";

const LiveComments = ()=>{
    
    const dispatch = useDispatch();
    useEffect(()=>{
        // const i= setInterval(()=>{
        //     dispatch(addComment(LiveCommentData));
        // },1000)
        
        // return ()=>{
        //     clearInterval(i);
        // }
    },[])

    const data = useSelector(state=>state.LiveCommentSlice.LiveData);
    

    return<>
        <div className='w-full border-2 border-black my-6 p-2 ml-7 mr-16 bg-gray-200 rounded-lg h-[600px] overflow-y-scroll'>
            <div className="">
                <h1 className="py-4 px-2 font-semibold">Live Comments</h1>
            </div>
            {/* each comment */}
            
            <div className=" ">
                {
                    data.map((d,i)=> <EachLiveComment key={i} data={d}/>)
                }
            </div>
        
        </div>
    </>
}

export default LiveComments;