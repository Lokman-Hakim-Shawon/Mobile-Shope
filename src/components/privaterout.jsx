import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate } from "react-router-dom";

const PrivateRout = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div className="flex justify-center items-center py-64"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRout;