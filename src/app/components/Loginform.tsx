import React from "react";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center w-full h-[750px] bg-[#E5E5E5] ">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 z-20">
        <h1 className="font-body font-bold text-6xl pb-8 text-mycolor leading-[80px] text-center">
          Sign in
        </h1>
        <p className="pb-6 text-[16px] text-center text-mycolor">
          Sign in and start managing your candidates!
        </p>
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            className="bg-[#224957] border rounded-lg w-[300px] h-[45px] mb-6 text-white pl-4"
            placeholder="Login"
          />
          <input
            type="text"
            className="bg-[#224957] border rounded-lg w-[300px] h-[45px] pl-4 text-white"
            placeholder="Password"
          />
          <div className="flex items-center mt-5">
            <input type="checkbox" />
            <p className="ml-2">Remember me</p>
            <p className="ml-auto">Forgot password?</p>
          </div>
        </div>
        <div className="mt-5">
          <button className="font-bold text-[16px] w-[300px] h-[45px] bg-[#20DF7F] rounded-[10px]">
            Login
          </button>
        </div>
      </div>
      
    </div>
  );
}
