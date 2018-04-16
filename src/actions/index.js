import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://localhost:5000/api/values';

export function fetchPosts() {
    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}