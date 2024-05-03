import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const Login = () => {
    const{signIn}=useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin=event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signIn(email,password)
        .then(result=>{
          const loggedInUser = result.user
            console.log(loggedInUser)
            const user = {email}
            // navigate(location?.state ? location?.state : '/')
            // get access token
            axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
            .then(res=>{
              console.log(res.data)
              if (res.data.success) {
                navigate(location?.state ? location?.state : '/')
                
              }
            })

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
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
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
          <button className="btn bg-orange-500">Login</button>
        </div>
      </form>
      <p className='my-4 text-center'>New to this website?<Link to={'/register'}> <span className='text-orange-600'>Register</span> </Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;