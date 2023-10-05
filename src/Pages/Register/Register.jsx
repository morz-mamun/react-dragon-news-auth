import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Register = () => {

    const {createUser} = useContext(AuthContext)
 

//  handle registration
 const handleRegister = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const url = form.get('url')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name, url, email, password);

     // create user 

     createUser(email, password)
     .then(result => {
        console.log(result.user);
     })
     
     .catch(err => {
        console.log(err.message);
     })
}



    
    

    
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm px-5 shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control" >
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text"
                                    name="name" placeholder="Enter your name" className="input input-bordered" />
                            </div>
                            <div className="form-control" >
                                <label className="label">
                                    <span className="label-text">Your Photo URL</span>
                                </label>
                                <input type="text"
                                    name="url" placeholder="Enter your photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control" >
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email"
                                    name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control" >
                                <label className="label">
                                    <span className="label-text">Your Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover"> Forgot password?</Link>
                                </label>
                            </div>
                            <div className="inline-block">
                                <input className="mr-2" type="checkbox" name="terms" id="terms" />
                                <label htmlFor="terms">Accept All Term and Conditions.</label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-base text-center mb-4 font-bold">Already have an account? Please <Link className="text-red-600 underline" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;