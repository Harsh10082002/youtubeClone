
const VideoCard = ({info}) => {
    const {snippet, statistics}=info;
    const {thumbnails, channelTitle, title, publishedAt } = snippet;
    const {likeCount, viewCount} = statistics;

    return<>
        <div className={`p-2 m-4 rounded-md  w-[350px]`}>
                <div className="p-2">
                    <img className="rounded-md" src={`${thumbnails.medium.url}`}></img>
                </div>            
                <div className="flex ">
                    <div>
                        <img className="w-14 rounded-full p-2 bg-gray-200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"></img>
                    </div>
                    <div className="px-2">
                        <div className="flex justify-between ">
                            <h3 className="font-semibold">{title}</h3>
                        </div>
                        <p>{channelTitle}</p>    
                        <p>{likeCount} Likes</p>
                        <div className="flex">
                            <p className="mr-2">{viewCount} viwes. </p>
                            <p className="">{ publishedAt }</p>
                        </div>
                    </div>
                </div>
        </div>
    </>
}
export default VideoCard;