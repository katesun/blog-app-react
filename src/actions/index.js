import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const FETCH_CATS = 'fetch_categories';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';


const ROOT_URL = 'http://localhost:5000/api';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/blogs`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchCategories() {
    const request = axios.get(`${ROOT_URL}/categories`);

    return{
        type: FETCH_CATS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/blogs`, values , {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/blogs/${id}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/blogs/${id}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    };

}