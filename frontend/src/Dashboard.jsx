import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [userdata,setuserData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3003/user/getallusers')
     .then(res=>{
        setuserData(res.data.data);
     }).catch((err)=>console.log(err))
  },[]);
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">User Dashboard</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope='col'>PhoneNumber</th>
              <th scope='col'>ProfilePhoto</th>
              <th scope='col'>Status</th>
              <th scope='col'>AddedDate</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((user,index)=>{
                return (
                  <tr key={index}>

                    <td><Link to='/EditProfile'>{user.firstname}</Link></td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.phonenumber}</td>
                    <td><img src={`http://localhost:3003/imagepath/${user.profilephoto}`} height={100} width={100} /></td>
                    <td>{user.status}</td>
                    <td>{user.addeddate}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
