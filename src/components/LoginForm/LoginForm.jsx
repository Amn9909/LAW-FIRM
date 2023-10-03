import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ toggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(">>>",data)
    axios
      .post("http://localhost:3009/auth/login", data)
      .then((response) => {
        if (response.status === 201) {
          navigate("/dashboard");
        }
        // alert(`new user created successfully ! ${response.data}`);
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(`error while creating this user ${error.response.data.message}`);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className=" bg-gray-700 bg-opacity-40 rounded-xl flex-d-col p-10 m-2"
        style={{ height: "660px", width: "450px" }}
      >
        <div>
          <h1 className="p-2 text-3xl text-gray-100 ">Sign in</h1>
          <input
            className="bg-gray-300 rounded-xl p-4 mb-2 w-full placeholder-gray-700 text-center"
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
            className="bg-gray-300 rounded-xl p-4 w-full placeholder-gray-700 text-center"
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
          <button
            type="submit"
            className="bg-red-600 rounded-xl m-2 p-2 text-white hover:bg-red-700"
          >
            Login
          </button>

          <div className="flex justify-evenly">
            <div className="m-2 p-2">
              <input type="checkbox" />
              <label className=" m-2 p-2 text-gray-100" htmlFor="checkbox">
                remember me !
              </label>
            </div>
            <button
              className="m-2 p-2 text-gray-100 hover:text-blue-500"
              onClick={toggleForm}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
