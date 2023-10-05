import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {
const {logInUser} = useContext(AuthContext)
const location = useLocation()
console.log(location);
const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password);
    e.target.reset()

    logInUser(email, password)
    .then(() => {
      navigate(location?.state ? location.state : '/')
    })
    .catch((err) => {
      console.log(err.message);
      // setError("Please give the correct information. ")
    })


    
  }


  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold"> Please Login</h1>
        </div>
        <div className="px-5 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input type="email" name="email" placeholder="Enter your Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
              <label className="label">
                <Link className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
           
          </form>
          <p className="text-base text-center mb-4 font-bold">Do not have an account? Please <Link className="text-red-600 underline" to="/register">Register</Link></p>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;