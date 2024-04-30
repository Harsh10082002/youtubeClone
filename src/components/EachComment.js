

const EachComment = ({commentData}) => {
    const {authorDisplayName, textDisplay, authorProfileImageUrl, likeCount} = commentData?.snippet?.topLevelComment?.snippet || commentData.snippet;
    
    return<>
        <div className="flex flex-col   my-2">
            <div className="flex">
                <img className="w-10 h-10 rounded-full" src={`${authorProfileImageUrl}`}/>
                <div className="px-3">
                    <p className="font-semibold text-lg"> {authorDisplayName}</p>
                    <p className="">{textDisplay}</p>
                    <div className='py-2 '>
                        <button className=' font-semibold '>👍🏻 {likeCount}</button>
                        <button className='px-4'> 👎🏻</button>
                        <span className="font-bold">Reply</span>
                    </div>
                </div>
            </div>

            {/* replies section */}
            <div className=" ml-24">
                {commentData.replies ? <div > 
                    {
                        commentData.replies.comments.map((comment, ind)=>{
                            return <EachComment key={ind} commentData={comment}/>

                        })
                    }
                </div> : <></>}
            </div>
        
        </div>
    </>
}

export default EachComment;