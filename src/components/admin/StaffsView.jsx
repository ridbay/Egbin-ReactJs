import React,{useState,useEffect} from 'react';
import axios from 'axios'
// import Accounts from './Accounts'
import Staff from  './Staff'

const StaffsView = () => {
    const[users, setUsers]=useState([])
    useEffect(() => {
        async function fetchData() {
          const result = await axios("http://localhost:8081/auth/allUsers");
          setUsers(result.data.data);
        //   recievedData = result.data.data
          // console.log(result.data)
          // console.log(result.data.data.length)
        }
        fetchData();
      }, []);
    return (
        <div>
            {/* <Staffs /> */}
            <Staff users={users}/>
        </div>
    )
}

export default StaffsView
