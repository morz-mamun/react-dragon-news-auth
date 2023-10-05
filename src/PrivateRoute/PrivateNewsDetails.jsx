import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateNewsDetails = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()
    console.log(location);

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to ="/login"></Navigate>
};

export default PrivateNewsDetails;