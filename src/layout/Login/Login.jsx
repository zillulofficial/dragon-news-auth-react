import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";

const Login = () => {

    const { login }= useContext(AuthContext)
    const handleLogin= (e)=>{
        e.preventDefault()
        const form= new FormData(e.currentTarget)
        const email= form.get('email')
        const password= form.get('password')
        login(email, password)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl text-center">Login Your Account</h2>

                <form onSubmit={handleLogin} className="card-body  md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">Dont have an account? <Link className="text-[#FF8C47]" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;