import {  useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const [password, setPassword] = useState("");
  const {register,handleSubmit,reset, formState: { errors }} = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = data =>{
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log('user',loggedUser);
      updateUserProfile(data.name, data.photoURL)
     .then( () =>{
      const userInfo ={ name:data.name, email:data.email }
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(userInfo)
      })
      .then(res => res.json())
      .then(data =>{
        if(data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User created successfully.',
            showConfirmButton: false,
            timer: 1500
        });
        }
        navigate('/')
      })
     }) 
     .catch(err => console.log(err))
     })
    }



  return (
    <div className="min-h-screen w-2/3 mx-auto ">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create Account</h1>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form
            className="card-body"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url*</span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                {...register("url", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {required:true})}
                  value={password}
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
              <input
                type="submit"
                className="btn bg-pink-400"
                value="Sign up"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
