import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

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
 PrivateRout.propTypes={
    children:PropTypes.node
 }
export default PrivateRout;