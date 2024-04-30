import { useEffect, useState } from "react";
import { ALL_SEARCHES } from "../../utils/constant";
import { showSidebarAction } from "../../utils/redux/sidebarCollapseSlice";
import { useDispatch, useSelector } from "react-redux";
import AllSearchedResults from "./AllSearchedResults";
import { useParams } from "react-router-dom";


const SearchResult = () =>{
    const [listOfAllSearches, setlistOfAllSearches] = useState([]);
    const dispatch = useDispatch();
    const {query} = useParams();
    const isshowSidebarOpen = useSelector(store=>store.sidebarSlice[0].isshowSidebar);

    useEffect(()=>{
        // result of search

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=15&key=AIzaSyCUzuWeNr6hTWXuJcRRSgT9fUxMtW6iJFY`)
        .then(d=>d.json()).
        then(jsOd=>{
            setlistOfAllSearches(jsOd.items);
        });

        dispatch(showSidebarAction(true));
        // setlistOfAllSearches(ALL_SEARCHES.items);
    },[]);
    if(listOfAllSearches.length===0) return <div>loading..........</div>
    
    return<>
        <div className={`flex flex-wrap ${ isshowSidebarOpen ? " ml-72" : "pl-14"}`}>            
            {
                listOfAllSearches.map((result, ind)=>{
                    
                    return <AllSearchedResults key={ind} result={result}/>
                })
            }
        </div>
    </>
}

export default SearchResult;