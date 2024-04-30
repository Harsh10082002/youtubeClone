
import EachComment from "./EachComment";

const Comments = ({allComments}) => {
    if(allComments.length === 0)return <></>
    // const repliesList=allComments[3].replies.comments;

    return<>
        {
            allComments.map((comment, index)=>{
                return  <EachComment 
                key={index} 
                commentData={comment}
                
                // commentData={comment.snippet.topLevelComment.snippet}
                // repliesList={repliesList}
                />
            })
        }
    </>
}

export default Comments;