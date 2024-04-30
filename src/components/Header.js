import { useDispatch, useSelector } from "react-redux";
import { showSidebarAction } from "../../utils/redux/sidebarCollapseSlice";
import { useEffect, useState } from "react";
import SuggestinoBar from "./SuggestinoBar";
import { updateShowSuggestionSatus, updateSuggestions } from "../../utils/redux/SearchSuggestionSlice";
import { SEARCH_SUGGESTION_API } from "../../utils/constant";
import { updateSearchInput } from "../../utils/redux/DataSlice";

const Header=()=>{
    const [suggestionData, setSuggestionData]= useState([]);
    const [searchValue, setSearchValue] = useState("");

    const isShouwSideBar = useSelector(store=>store.sidebarSlice[0].isshowSidebar);
    const searchInputValue = useSelector(store=>store.DataSlice.searchInput);

    const dispatch = useDispatch();
    
    const collapsed = () => {
        dispatch(showSidebarAction(!isShouwSideBar));
    }
    const val = useSelector(store=>store.SearchSuggestionSlice.isShowSuggestion);

    function showSuggestionFun(suggestionInput){
        const suggestionApi = `${SEARCH_SUGGESTION_API}+${suggestionInput}`;
        const fetchSuggestionData=fetch(suggestionApi);
        fetchSuggestionData.then(data=>{
            return data.json();
        }).then(jsonData=>{
            setSuggestionData(jsonData[1]);
        })    
    }
    /*
        this useEffect will execute to show suggestion while change in input's searchValue
        and because in dependency array we have set searchValue as the dependency so wheneever it will change
        header componet will re-render (ye comoponent hat ke firse ayega ) return will execute when component will
        unmount (hatega). and jab hatega tab hum timeout clear kerrrahe hai means showSuggestionFun() call hi nahi hoga
    */
    useEffect(()=>{
        const i = setTimeout(() => {
            showSuggestionFun(searchValue);
    // setSearchValue(searchInputValue);

        }, 200);
        return ()=>{
            clearTimeout(i);
            // dispatch(updateShowSuggestionSatus(false));

        }
    },[searchValue]);
    return<>
        <div className="bg-blue-500 p-2 flex justify-between ">
            <button onClick={collapsed} className="m-2 text-black font-semibold">Collapse</button>
            <div >
                <input 
                    className="m-0 p-2 items-center border border-teal-800 w-[500px]"
                    placeholder="Search....."
                    type="search"
                    value={searchValue}
                    onChange={(e)=>{
                        setSearchValue(e.target.value);
                        // setIsShowSuggestion(true);
                        dispatch(updateShowSuggestionSatus(true));
                    }}                  
                    // onFocus={()=>{
                    //     setIsShowSuggestion(true)
                    // }} 
                    onBlur={()=>{
                        // dispatch(updateShowSuggestionSatus(false));

                        // setIsShowSuggestion(false);

                    }} 
                />
            
                <button 
                    onClick={()=>{

                    }}
                    className="m-0 p-2 bg-white"
                    type="submit">Search
                </button>
                {(suggestionData.length >= 1 && val)  && <SuggestinoBar suggestionData={suggestionData} /> }
                
            </div>

            <div className="m-2 text-lg text-black font-semibold">
                <div>user</div>
            </div>

        </div>
    </>
}
export default Header;


