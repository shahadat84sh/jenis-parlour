
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../Components/SocilaLogin/SocialLogin";

const Login = () => {
  const { logInUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event) =>{
 
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="w-1/2 mx-auto min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
            <Link to='/'><img src={logo} className="w-24" alt="" /></Link>
          <h1 className="text-5xl font-bold">Login</h1>
        </div>
        <div className="card shrink-0 w-full w-max-lg shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  className="input input-bordered w-full"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FaEye
                  className="absolute right-10 top-4"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </FaEye>
              </div>
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-pink-400" type="submit" value="Login" />
              </div>
          </form>
          <div className="w-2/3 mx-auto pb-5">
          <p className="my-3">
            Dont have an account ?
            <Link to="/signup">
              <span className="text-sky-400">Create an account</span>
            </Link>
            </p>
          
          </div>
        </div>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
