import { Link } from "react-router-dom";
import img from '../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const{createUser}=useContext(AuthContext)
    const handleRegister=event=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })

    }
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row gap-32">
    <div className="text-center lg:text-left w-1/2">
      
     <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-500">Register</button>
        </div>
      </form>
      <p className='my-4 text-center'>All ready have an account?<Link to={'/login'}> <span className='text-orange-600'>Login</span> </Link></p>
    </div>
  </div>
</div>
    );
};

export default Register;