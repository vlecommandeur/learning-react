import axios from 'axios';

const KEY = 'AIzaSyBu2PEKoNi5GPjFoqmJUVKUcruhPlfEWDs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
