import { Link } from "react-router-dom";

const LoginAndRegistration = () => {
    return (
        <div className="bg-gray-200 my-10 bg-base-100 shadow-xl">
            <h1 className="text-center text-4xl font-bold py-10">Access Our All Services</h1>
            <div className=" flex justify-around py-10">
            <Link to='/register'><button className="border border-black py-3 px-5 bg-black text-white font-bold">Registration</button></Link>
            <Link to='/login'><button className="border border-black py-3 px-10 bg-black text-white font-bold">Login</button></Link>
            </div>
        </div>
    );
};

export default LoginAndRegistration;