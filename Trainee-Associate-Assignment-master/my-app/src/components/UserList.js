import React, {useEffect, useState } from 'react';
import axios from 'axios';
import './userList.css';
export default function LoadUSerList(){

    const [data,setData]=useState();

    useEffect(() => {
        axios.get("http://localhost/bizlogic/userDataList.php")
      .then((response)=>{
          console.log(response.data);
        setData(response.data);
      })
      .catch((e)=>{
        console.log(e);
      });
  
     
    }, [])

    const  logout=()=>{
        //    window.sessionStorage.removeItem("isLoggin");
           sessionStorage.setItem( "isLoggin"," ");
           sessionStorage.clear();
            window.location.href="/";
        }

    return(
        <div className="container">

                <button class="log-button" onClick={logout}>Logout</button>
                
                    <h1 className="label">User Details</h1>
                   
                
            <div className="outerL">
                <div className="innerL">
            <table className="table">
            <thead className="headerL">
                <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                </tr>
            </thead>
            <tbody className="bodyL">

  
            {
        data.map((item)=>(
        <tr key={item.id} className="our-user">
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
        </tr>
        ))
        }

        </tbody>
        </table>
        </div>
        </div>
        
        </div>
    );
}