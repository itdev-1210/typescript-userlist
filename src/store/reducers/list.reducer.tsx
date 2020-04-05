import { ListState, ActionType } from "../../interfaces/types"
import { GET_USERS, ERROR_IN_GET_USERS, INCREASE_PAGE_NUM } from "../../interfaces/consts"

const initialState: ListState = {
  pageNumber: 1,
  usersPerPage: 0,
  totalUsers: 0,
  totalPages: 0,
  users: [],
  loading: true,
  error: false,
  hasMore: false,
}

const usersListReducer = (state = initialState, action: ActionType): ListState => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        pageNumber: action.payload.page,
        usersPerPage: action.payload.per_page,
        totalUsers: action.payload.total,
        users: [...state.users, ...action.payload.data],
        loading: false,
        error: false,
        hasMore: action.payload.page < action.payload.total_pages,
      }
    case INCREASE_PAGE_NUM:
      let pgNum = state.pageNumber + 1
      return {
        ...state,
        pageNumber: pgNum,
        hasMore: pgNum < state.totalPages
      }
    case ERROR_IN_GET_USERS:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default usersListReducer