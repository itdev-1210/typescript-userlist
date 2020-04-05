import { Dispatch } from 'redux'
import axios from "axios"
import { ActionType } from '../../interfaces/types'
import { GET_USERS, ERROR_IN_GET_USERS, INCREASE_PAGE_NUM } from '../../interfaces/consts'


export const getUsers = (pageNumber: number) => {
  const url = "https://reqres.in/api/users?page=" + pageNumber
  let req = axios.get(url)
  return (dispatch: Dispatch<ActionType>) => {
    req.then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    })
      .catch(err => {
        dispatch({
          type: ERROR_IN_GET_USERS,
          payload: err
        })
      })
  }
}

export const increasePageNumber = () => {
  return (dispatch: Dispatch<ActionType>) => dispatch({
    type: INCREASE_PAGE_NUM,
    payload: null
  })
}