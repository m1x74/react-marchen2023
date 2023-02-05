const baseURL = 'https://jsonplaceholder.typicode.com';

const urls = {
    todos: '/todos',
    albums: '/albums',
    comments: ' `/comments`',
    postbyId: (postID) => `/posts/${postID}`

}

export {
    baseURL,
    urls
}