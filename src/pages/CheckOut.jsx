import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const CheckOut = () => {
    const services = useLoaderData()
    const{title, _id, price, img}= services
    const {user}= useContext(AuthContext)

    const handleOrder=e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order={
            customerName: name, email, date, service_id:_id, service: title, price: price, img
        }
        console.log(order)

        fetch('http://localhost:5000/bookings',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(order)

        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if (data.insertedId) {
            alert('added order successfully')
            
          }
        })


    }
    return (
        <div>
            <h1 className="text-center text-3xl text-orange-600">{title}</h1>
            <div>
            <div className=" ">
  <div className="hero-content ">
   
    <div className="card shrink-0  ">
      <form onSubmit={handleOrder} className="card-body">
       <div className="flex flex-col lg:flex-row gap-5">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="" name="date" className="input input-bordered" required />
        </div>
       </div>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
          <label className="label">
           
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={price}  className="input input-bordered" required />
          <label className="label">
            
          </label>
        </div>

        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-600">Order Confirm</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default CheckOut;