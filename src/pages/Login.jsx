import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
// import { useContext, useState } from "react";
// import { AuthContext } from "../components/Authprovider";

const Login = () => {
  // const {signin}=useContext(AuthContext)
  // const [errors,seterrors]=useState(null)
  const handleSignin=event=>{
    event.preventDefault()
    const form=event.target
    const email=form.email.value
    const password=form.password.value
    console.log(email,password)
    // seterrors(null)
    // signin(email,password)
    // .then(result=>{
    //   if(result){
    //     console.log('signin successfull',result)
    //     seterrors('Login successfull')
    //   }
    // })
    // .catch(error=>{
    //   if(error){
    //     console.log('error : ',error)
    //     seterrors('Invalid email and password')
    //   }
    // })
  }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
  <div className="card flex-shrink-0 -mt-28 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body " onSubmit={handleSignin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          {/* { 
             errors==='Login successfull' ?
            <p className="text-green-600">{errors}</p>
            :
            <p className="text-red-600">{errors}</p>
          } */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      <h1>Are you new user? <Link to='/register'><span className="text-green-600 underline">Register</span></Link></h1>
      </form>
    </div>
</div>
        </div>
    );
};

export default Login;