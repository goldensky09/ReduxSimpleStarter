import axios from 'axios';

const API_KEY = 'test';//'goldensky09';
const ROOT_URL= `http://reduxblog.herokuapp.com/api`;

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const url = `${ROOT_URL}/posts?key=${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}