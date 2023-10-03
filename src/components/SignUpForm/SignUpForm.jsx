import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const SignUpForm = ({ toggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("this is data",data)
    axios.post("http://localhost:3009/auth",data)
    .then(response =>{
        alert(`new user created successfully ! ${response.data.username}`)
    })
    .catch(error=>{
        alert(`error while creating this user ${error.response.data.message}`)
    })

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" bg-gray-500 bg-opacity-30 rounded-xl flex-d-col p-10 m-2" style={{ width : '450px'}}>
        <div>
          <input
            className="bg-gray-200 rounded-xl p-4 mb-2 w-full placeholder-gray-700 text-center"
            placeholder="Enter username"
            type="text"
            {...register("username", {
              required: { value: true, message: "user name is required " },
            })}
          />
          <p className=" flex text-xs justify-start ml-2 mb-2 mt-1 text-red-600 ">
            {errors.username?.message}
          </p>
        </div>
        <div>
          <input
            className="bg-gray-200 rounded-xl p-4 w-full placeholder-gray-700 text-center"
            placeholder="Enter Email address"
            type="text"
            {...register("email", {
              required: { value: true, message: "email is required" },
            })}
          />
          <p className=" flex text-xs justify-start ml-2 mt-2 mb-2 text-red-600">
            {errors.email?.message}
          </p>
        </div>
        <div>
          <input
            className="bg-gray-200 rounded-xl p-4 w-full placeholder-gray-700 text-center"
            placeholder="Enter password"
            type="text"
            {...register("password", {
              required: { value: true, message: "password is required" },
            })}
          />
          <p className=" flex text-xs justify-start ml-2 mt-2 text-red-600">
            {errors.password?.message}
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <button type="submit" className="bg-red-600 rounded-xl m-2 p-2 text-white hover:bg-red-700">
            Signup
          </button>
          <button
            type="submit"
            className="p-2 text-white hover:text-green-600"
            onClick={toggleForm}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
