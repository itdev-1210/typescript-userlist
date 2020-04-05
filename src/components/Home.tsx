import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Loading } from './Loading'
import { UsersList } from './UsersList'
import * as Actions from '../store/actions'


export const Home: React.FC = () => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3000);

  if (loading)
    dispatch(Actions.getUsers(1))

  return (
    <div>
      {loading && <Loading />}
      {!loading && <UsersList />}
    </div>
  );
}