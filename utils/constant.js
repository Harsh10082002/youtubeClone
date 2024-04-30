
const API_KEY = "AIzaSyC_8uAW9f3B4QlI8uUJ4CLgQCa7tMlNe2c";

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&
regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/comments?part=snippet&maxResults=50&parentId=ufp6gjvCdDw&key=${API_KEY}`

export const YOUTUBE_ID_URL = (id) => {
    return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&regionCode=IN&key=${API_KEY}`;
}

export const COMMENT_DATA_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=replies,snippet&maxResults=100&&key=AIzaSyCUzuWeNr6hTWXuJcRRSgT9fUxMtW6iJFY&videoId=";

export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCpEhnqL0y41EpW2TvWAHD7Q&key="+API_KEY;









export const CHANNEL_DEMO_DATA = {};

export const CHANNEL_DEMO_VIDEOS = {};

export const All_VIDEOS_OF_A_CHANNEL ={};

export const DEMO_DATA = {};


export const ALL_COMMENTS_DATA ={};


export const ALL_SEARCHES={};
