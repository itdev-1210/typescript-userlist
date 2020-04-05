import React, { useRef, useCallback, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import "../styles/userslist.css"
import { StateType, ListState } from "../interfaces/types"
import { ListItem } from "./ListItem"
import * as Actions from '../store/actions'


export const UsersList: React.FC = () => {

  const dispatch = useDispatch()
  let observer = useRef<IntersectionObserver>();
  let listInfo = useSelector<StateType, ListState>(state => state.usersListReducer)

  useEffect(() => {
    if (listInfo.pageNumber > 1) {
      dispatch(Actions.getUsers(listInfo.pageNumber))
    }
  }, [listInfo.pageNumber, dispatch])

  const lastUserElementRef = useCallback(
    node => {
      if (listInfo.loading)
        return;
      if (observer.current)
        observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && listInfo.hasMore)
          dispatch(Actions.increasePageNumber())
      });
      if (node)
        observer.current.observe(node)
    },
    [listInfo.hasMore, listInfo.loading, dispatch]
  );

  return (
    <div>
      <div className="list-body">
        <div className="list-header">Users</div>
        {listInfo.users.map((user, index) => {
          if (listInfo.users.length === index + 1)
            return (
              <ListItem
                key={user.id}
                refElement={lastUserElementRef}
                avatarURL={user.avatar}
                firstName={user.first_name}
                lastName={user.last_name}
              />
            )
          else
            return (
              <ListItem
                key={user.id}
                avatarURL={user.avatar}
                firstName={user.first_name}
                lastName={user.last_name}
              />
            )
        })}
        {!listInfo.error && listInfo.loading && <div className="list-footer">Loading...</div>}
        {!listInfo.loading && listInfo.error && <div className="list-footer">Error</div>}
        {!listInfo.loading && !listInfo.hasMore && <div className="list-footer">No more users</div>}
      </div>
    </div>
  );
};
