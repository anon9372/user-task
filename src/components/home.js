import axios from 'axios';
import React, { useEffect } from 'react'
import { Button, Paper, Box } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import Card from './card'
const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch()

  useEffect(() => {
    getAllUsers()
    // eslint-disable-next-line
  }, [])

  const getAllUsers = async () => {
    await axios.get('https://reqres.in/api/users?page=1').then((res) => {
      let allUsers = res.data.data
      dispatch({ type: "USERS", payload: { users: allUsers } });
    })
  }

  const handleUser = async (id) => {
    await axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
      let singleUser = res.data.data
      dispatch({ type: "USER", payload: { user: singleUser } });
    })
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper sx={{ padding: '100px' }}>
        <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        <Box sx={{ marginTop: '30px' }}>
          {
            users[0]?.users?.map((item) => {
              return (
                <Button onClick={() => handleUser(item.id)} variant='contained' sx={{ margin: '2px' }}>{item.id}</Button>
              )

            })
          }
        </Box>
      </Paper>
    </div>
  )
}

export default Home