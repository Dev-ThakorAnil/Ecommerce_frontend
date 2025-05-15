import React, { useState } from "react";
import Title from "../components/title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export default function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();

  return (
    <div className="  flex flex-col sm:flex-row justify-around gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side - Delivery Form */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" required/>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" required />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email Address" required/>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" required/>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City"  required/>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" required/>
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="ZipCode" required />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" required />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="tel" placeholder="Enter Phone Number" required />
      </div>

      {/* Right Side */}
      <div className="mt-8 w-full max-w-md ">
        {/* Cart Total */}
        <div className="mt-8">
          <CartTotal />
        </div>

        {/* Payment Method */}
        <div className="mt-12 bg-white rounded-lg p-4">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            {/* Stripe */}
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 cursor-pointer w-full"
            >
              <p className={`min-w-2.5 h-2.5 border rounded-full ${method === "stripe" ? "bg-green-500" : ""}`}></p>
              <img src={assets.stripe_logo} className="h-3 mx-2" alt="Stripe" />
            </div>

            {/* Razorpay */}
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 cursor-pointer w-full"
            >
              <p className={`min-w-2.5 h-2.5 border rounded-full ${method === "razorpay" ? "bg-green-500" : ""}`}></p>
              <img src={assets.razorpay_logo} className="h-3 mx-2" alt="Razorpay" />
            </div>

            {/* COD */}
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 cursor-pointer w-full"
            >
              <p className={`min-w-2.5 h-2.5 border rounded-full ${method === "cod" ? "bg-green-500" : ""}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-2">CASH ON DELIVERY</p>
            </div>

          </div>
          
            <div className="w-full text-end">
            <button    onClick={() => navigate('/order')} className="bg-black text-white text-sm my-8 px-6 py-2 ">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
