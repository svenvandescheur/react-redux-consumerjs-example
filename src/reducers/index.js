import { combineReducers } from 'redux'
import posts from './posts'

const store = combineReducers({
  posts,
})

export default store