import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Register = () => {
  const handleregister=event=>{
    event.preventDefault();
    
    const form=event.target
    const name=form.name.value
    const email=form.email.value
    const password=form.password.value
    console.log(name,email,password)
    // createuser(email,password)
    // .then(result=>console.log("result is : ",result))
    // .catch(error=>console.log(error))
    // seterrors(null)
    // const special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    // const uppercase=/[A-Z]/
    // if(password.length<5 || special.test(password) || uppercase.test(password)){
    //   seterrors("password must be used length 6, lowercase and number")
    // }
    
    // else {
    //   createuser(email,password)
    // .then(result=>console.log('createuser is successfully added',result))
    // .catch(error=>console.log('error : ',error))
    // seterrors('Registration successfull')
    // }
  }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
    <div className="card flex-shrink-0 -mt-28 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleregister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
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
          {/* {
            
            errors==='Registration successfull' ?
            <p className='text-green-600'>{errors}</p>
            :
            <p className='text-red-600'>{errors}</p>
          } */}
      </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Have an account? <Link to='/login' className="text-green-600 underline"><span>Login</span></Link></p>
      </form>
    </div>
</div>
        </div>
    );
};

export default Register;