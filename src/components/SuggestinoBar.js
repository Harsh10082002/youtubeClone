
import { useDispatch } from "react-redux";
import { updateShowSuggestionSatus } from "../../utils/redux/SearchSuggestionSlice";
import { useNavigate } from "react-router-dom";
import { updateSearchInput } from "../../utils/redux/DataSlice";


const SuggestinoBar = ({suggestionData}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCLick=(data)=>{
        dispatch(updateSearchInput(data));
        dispatch(updateShowSuggestionSatus(false));
        navigate(`/SearchResults/${data}`);
    }
    return<>

        <div className=" py-6 absolute w-[500px] my-[2px] rounded-md shadow-md bg-white text-black z-20 ">
            {
                suggestionData.map((data, ind)=> {
                    return <>
                    <div  key={ind} className=" hover:bg-gray-200 cursor-pointer px-4 py-2 " onClick={()=>handleCLick(data)}>
                        <p  className=" font-semibold">🔍 {data}</p>
                    </div>

                    </>
                })
            }
        </div>
    </>
}

export default SuggestinoBar;