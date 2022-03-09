import React,{useState, useEffect} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import userService from '../../../service/user.service';





const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    loadUsers();
  },[])

  const loadUsers = async () => {
    // const result = await axios.get('http://localhost:3002/api/v1/users');
    // console.log(result)

    const result = await userService.getAll();
    console.log(result);
    setUsers(result.data)

  }


  return (
    <div>
      <div className="contianer">
<div className="card">
  <div className="card-header d-flex">
      <h4>User List</h4>
     
      <button className="btn btn-primary">Add User</button>

    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table  table-stripe">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              {/* <th>Create At</th>
              <th>Update At</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
              {
                users.map((users, index) => (
                  
                  <tr key={index}>
                    <td >{index+1}</td>
                    <td>{users.name}</td>
                    <td>{users.username}</td>
                    <td>{users.email}</td>
                    <td>{users.role.name}</td>
                    <td>
                    <div className="btn-group">
                    <Link to="" className='bg-primary rounded-left btn ' data-bs-toggle="tooltip" data-bs-placement="top" title="View" > <i className='fas  fa-eye fa-fw'></i> </Link>
                    <Link to="" className='bg-info btn' data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"> <i className='fas fa-pen fa-fw'></i> </Link>
                    <Link to="" className='bg-danger rounded-right btn' data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"> <i className='fas fa-trash fa-fw'></i> </Link>
                  </div>
                    </td>
                  </tr>

                ))
              }
         
          </tbody>
          </table>
        </div>
      </div>
  </div>
  </div>
    </div>
  );
}

export default Users;
