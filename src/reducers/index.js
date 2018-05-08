import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import CatsReducer from './reducer_cats';

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer,
    categories: CatsReducer
});

export default rootReducer;