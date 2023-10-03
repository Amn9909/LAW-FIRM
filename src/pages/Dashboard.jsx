import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";

const Dashboard = () => {
  const navigate = useNavigate();

  const [form, setform] = useState([
    {
      id: 1,
      name: "complaint form",
      description:
        "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
      price: 100,
    },
    {
      id: 2,
      name: "admission form",
      description:
        "descriptiondescriptidescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptionondescriptiondescriptiondescriptiondescription",
      price: 100,
    },
    {
      id: 3,
      name: "complaint form",
      description:
        "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
      price: 100,
    },
    {
      id: 4,
      name: "complaint form",
      description:
        "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
      price: 100,
    },
  ]);

  //call data from backend
  //get all forms api

  //   useEffect(() => {
  //     axios
  //       .get("url")
  //       .then((data) => data.json())
  //       .then((result) => {
  //         result.forEach((form) => {
  //           setForm(...Form, form);
  //         });
  //       });
  //   }, []);

  const [FormOpen, setFormOpen] = useState(false);

  const openForm = () => {
    console.log("open form");
    setFormOpen(true);
    console.log("new value >>", FormOpen);
  };

  const closeForm = () => {
    console.log("open form");
    setFormOpen(false);
  };

  const buyForm = (key) => {
    console.log("buy form clicked !",key);
    navigate("/checkout");
  };

  const viewForm = (key) => {
    console.log("view form clicked",key)
  };

  const cards = form.map((form) => (
    <div
      className=" flex flex-wrap rounded-2xl bg-slate-700 m-2 w-64 overflow-hidden "
      style={{ width: "300px", height: "300px" }}
      key={form.id}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="p-2 flex text-center bg-blue-200">{form.name}</h3>
          <p
            className="line-clamp-3 text-white"
            style={{ wordBreak: "break-all", margin: "2px", padding: "2px" }}
          >
            {form.description}
          </p>
          <h4 className="text-white"> $ {form.price}</h4>
        </div>
        <div className="flex justify-evenly m-2">
          <button onClick={()=>{viewForm(form.id)}} className="bg-blue-500 p-2 rounded-2xl text-white">
            View
          </button>
          <button onClick={()=>{buyForm(form.id)}} className="bg-green-500 p-2 rounded-2xl text-white">
            Get
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div>
        <div className="flex bg-gray-800 items-center">
          <div style={{ width: "90%" }}>
            <p className="text-white">THE LAW FIRM</p>
          </div>
          <div>
            <button
              onClick={openForm}
              className="bg-blue-600 p-2 m-2 rounded-lg text-white"
            >
              + Add
            </button>
          </div>
        </div>
        <div>
        {FormOpen && <Form closeForm={closeForm} />}
        </div>
        <div className="flex flex-col sm:flex-row m-2 ">{cards}</div>
      </div>
    </>
  );
};

export default Dashboard;
