import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { Link, Navigate } from "react-router-dom";
export const Adminusers = () => {
  const {AuthorizationToken}=useAuth()
  const [users,setUsers]=useState([]);
  
  const getAllUserData=async()=>{
    try{
      const response= await fetch("http://localhost:5000/api/admin/users",
      {
        method: "GET",
        headers:{
          Authorization: AuthorizationToken
        }
      }
    )
  const data=await response.json()
  setUsers(data)
  console.log(data)
  }
   catch(err){
      console.log(err)
    }
  }
  
const deleteUser=async(id)=>{
  console.log(id);
  try{
    const response=await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,
    {
      method:"DELETE",
      headers:{
        Authorization: AuthorizationToken
      },
      
    }
    )

    const data=await response.json()
   
    if(response.ok){
      console.log("user got deleted");
      getAllUserData();
    }
    

  }catch(err){
    console.log(err)
  }
}
  useEffect(()=>{
    getAllUserData()
  },[])



  return (
    <>
      <table>
        <thead>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>delete</th>
          <th>update</th>
        </thead>
        <tbody>
        {users.map((currUser)=>{
            return<>
            <tr >
              <td>{currUser.username}</td>
              <td>{currUser.phone}</td>
              <td>{currUser.email}</td>
              <td><Link to={`/admin/user/${currUser._id}/edit`} />Edit</td>
              <td><button onClick={()=>deleteUser(currUser._id)} /> delete</td>
            </tr>
            </>
           
          

         })}

        </tbody>
            
      </table>
      
        
    </>
  )
}
