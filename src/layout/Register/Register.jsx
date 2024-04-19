import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";

const Register = () => {

    const {createUser}= useContext(AuthContext)

    const handleRegister= (e)=>{
        e.preventDefault()
        const form= new FormData(e.currentTarget)
        const email= form.get('email')
        const password= form.get('password')
        console.log(form.get('email'))

        // create user
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl text-center">Register Your Account</h2>

                <form onSubmit={handleRegister} className="card-body  md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter your Photo URL" className="input input-bordered" required />
                    </div>
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
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="check" id="" />
                        <p>Accept <Link className="font-bold">Terms & Conditions</Link></p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center">Already have an account? <Link className="text-[#FF8C47]" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;