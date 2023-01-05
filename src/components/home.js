import axios from 'axios';
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch()

  useEffect(() => {
    getAllUsers()
  }, [])

  // function incrementHandler() {
  //   dispatch({ type: "INCREMENT" });
  // }

  const getAllUsers = async () => {
  await axios.get('https://reqres.in/api/users?page=1').then((res) => {
    let allUsers = res.data.data
    console.log("allUsers", allUsers)
    dispatch({ type: "USERS", payload: { users: allUsers} });
  })
  
  }


  return (
    <div>
      {
        console.log('hello entity', users)
      }
    </div>
  )
}

export default Home