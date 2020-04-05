import { combineReducers } from "redux"
import usersListReducer from "./list.reducer"


const allReducers = combineReducers({
  usersListReducer
})

export default allReducers