import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "react-modal";

const Form = ({ closeForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("this is data >>", data);
    axios
      .post("http://localhost:3009/form-data", data)
      .then((response) => {
        // alert(`new user created successfully ! ${response.data.username}`);
        closeForm();
      })
      .catch((error) => {
        alert(`error while creating this user ${error.response.data.message}`);
      });
  };

  const closeModal = async () => {
    closeForm();
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          WebkitBackdropFilter: "blur(5px)",
          backdropFilter: "blur(5px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          className="flex justify-center align-middle items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            className="bg-gray-800 bg-opacity-70 drop-shadow-2xl rounded-xl flex-d-col p-10 m-2"
            style={{ width: "450px" }}
          >
            <div>
              <input
                className="bg-gray-200 rounded-xl p-4 mb-2 w-full placeholder-gray-700 text-center"
                placeholder="Enter form name"
                type="text"
                {...register("name", {
                  required: { value: true, message: "form name is required " },
                })}
              />
              <p className=" flex text-xs justify-start ml-2 mb-2 mt-1 text-red-600 ">
                {errors.name?.message}
              </p>
            </div>
            <div>
              <input
                className="bg-gray-200 rounded-xl p-4 w-full placeholder-gray-700 text-center"
                placeholder="Enter description address"
                type="text"
                {...register("description", {
                  required: { value: true, message: "description is required" },
                })}
              />
              <p className=" flex text-xs justify-start ml-2 mt-2 mb-2 text-red-600">
                {errors.description?.message}
              </p>
            </div>
            <div>
              <input
                className="bg-gray-200 rounded-xl p-4 w-full placeholder-gray-700 text-center"
                placeholder="Enter price"
                type="text"
                {...register("price", {
                  required: { value: true, message: "price is required" },
                })}
              />
              <p className=" flex text-xs justify-start ml-2 mt-2 text-red-600">
                {errors.price?.message}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className=" flex justify-center ">
                <button
                  className=" bg-green-400 rounded-xl p-2 m-2 p-2 text-gray-100 hover:text-blue-500"
                  onClick={onSubmit}
                >
                  Add
                </button>
              </div>
              <div className=" flex justify-center ">
                <button
                  className=" bg-red-400 rounded-xl p-2 m-2 p-2 text-gray-100 hover:text-blue-500"
                  onClick={closeModal}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
