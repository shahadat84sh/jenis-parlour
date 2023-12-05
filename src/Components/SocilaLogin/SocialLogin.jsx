import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn, fbSignIn } = useContext(AuthContext);
   let from = location.state?.from?.pathname || "/";

   const navigate = useNavigate()

    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const loggedUser = result.user;
            const savedUser = {name:loggedUser.displayName, email:loggedUser.email}
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(savedUser)
            })
            .then(res => res.json())
            .then( () =>{
              navigate(from, {replace:true})
            })
        })
        .catch(err => {
          console.log(err);
        })
    }

    const handleFacebookLogin = () =>{
        fbSignIn()
        .then(result =>{
          console.log(result.user);
          const loggedUser = result.user;
          const savedUser = {name:loggedUser.displayName, email:loggedUser.email}
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(savedUser)
          })
          .then(res => res.json())
          .then( () =>{
            navigate(from, {replace:true})
          })
      })
      .catch(err => {
        console.log(err);
      })
    }
  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={handleFacebookLogin}
        className="bg-blue-500 hover:shadow-2xl text-white py-2 px-4 rounded-md mr-2"
      >
        <FaFacebook className="mr-2" />
        Login with Facebook
      </button>
      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 hover:shadow-2xl text-white py-2 px-4 rounded-md"
      >
        <FaGoogle className="mr-2" />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
