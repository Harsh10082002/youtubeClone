import { useNavigate } from "react-router-dom";


const AllSearchedResults = ({result}) =>{

    
    const {high} = result.snippet.thumbnails;
    const {title, publishedAt, channelId, channelTitle, liveBroadcastContent, description}=result.snippet;
    const videoId = result.id.videoId;
    const navigate = useNavigate();

    // flex flex-row flex-wrap 
    return<>
        <div className=" px-3 cursor-pointer" onClick={()=>{
            console.log(videoId);
            navigate(`/watch/${videoId}`);
        }} >
            <div className="flex m-3">
                <img
                    width="650px"
                    height="280px"
                    className="rounded-lg"
                    src={`${high.url}`}>
                </img>

                <div className="px-6">
                    <h1 className=" font-semibold text-xl py-1">{title}</h1>
                    <p className=" text-gray-500">{publishedAt}</p>
                    <div className="flex items-center py-4">
                        <img 
                        className="w-10 rounded-full" 
                        src="https://yt3.ggpht.com/ytc/AIdro_kBZyti_EdG7Z2tPURAhtvZcDEoq73Vm0cSpJGX4RcB-exQUY_LOdwIilGHZgafdKmRUA=s48-c-k-c0x00ffffff-no-rj">
                            
                        </img>                        
                        <h1 className=" font-semibold text-xl py-1 px-2">{channelTitle} </h1>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </>
}
export default AllSearchedResults;

