import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";


const Bookings = () => {
    const {user}=useContext(AuthContext)
    const[bookings, setBookings]=useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        axios.get(url, {withCredentials: true})
        .then(res=>{
            setBookings(res.data)
        })
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     setBookings(data)
        // })
    },[url])
    const handleDelete=id=>{
        const proceed = confirm('Are you sure to delete this?')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remaining = bookings.filter(booking=> booking._id !== id)
                    setBookings(remaining)
                    
                }
            })
            
        }
    }
    // update
    const handleConfirm =id=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.modifiedCount >0) {
                // updatestate
                const remaining = bookings.filter(booking=>booking._id!==id)
                const updated = bookings.find(booking=>booking._id===id)
                updated.status='confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings)


                
            }
        })
    }
    return (
        <div>
           <h2>My bookings :{bookings.length} </h2> 
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Date</th>
        <th>Service</th>
        <th>Price</th>
        <th>Status</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
     
     
    </tbody>
   {
    bookings.map(booking=><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)
   }
    
    
  </table>
</div>
        </div>
    );
};

export default Bookings;