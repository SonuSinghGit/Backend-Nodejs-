import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
function Register() {

  const { register, handleSubmit,reset } = useForm();

  const dataSubmit = async(data) => {
    const response = await axios.post("http://localhost:4000/api/v1/register",data);
    if(response.status ===200 || response.status ===201){
        alert("registration successfull");
        reset();
    }
   
    console.log("data", data);
  };

  return (
    <div>
      <p className="text-2xl">Registration Form</p>

      <form onSubmit={handleSubmit(dataSubmit)}>

        <div className="mt-2">
          <label className="font-semibold">
            Name:
            <input
              className="border-2 border-gray-300 rounded-md px-2 py-1"
              type="text"
              {...register("name")}
            />
          </label>
        </div>

        <div className="mt-2">
          <label className="font-semibold">
            Email:
            <input
              className="border-2 border-gray-300 rounded-md px-2 py-1"
              type="email"
              {...register("email")}
            />
          </label>
        </div>

        <div className="mt-2">
          <label className="font-semibold">
            Password:
            <input
              className="border-2 border-gray-300 rounded-md px-2 py-1"
              type="password"
              {...register("password")}
            />
          </label>
        </div>

        <button
          className="mt-4 bg-blue-500 hover:bg-amber-300 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;