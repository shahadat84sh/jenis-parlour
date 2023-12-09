import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAdmin from '../Components/SocilaLogin/Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ( {children} ) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <div className="flex justify-center items-center">
        <progress
          className="progress progress-secondary w-56"
          value={0}
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="40"
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="70"
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="100"
          max="100"
        ></progress>
      </div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;