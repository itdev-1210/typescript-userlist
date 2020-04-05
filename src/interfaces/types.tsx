export interface User {
  id: number
  email: string
  avatar: string
  first_name: string
  last_name: string
}

export interface StateType {
  usersListReducer: ListState
}

export interface ItemProps {
  avatarURL: string
  firstName: string
  lastName: string
  refElement?: React.Ref<HTMLDivElement>
}

export interface ListState {
  loading: boolean
  error: boolean
  hasMore: boolean
  pageNumber: number
  usersPerPage: number
  totalUsers: number
  totalPages: number
  users: User[]
}

export interface ActionType {
  type: string,
  payload: any
}