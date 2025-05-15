import React, { useState } from 'react'

export default function Login() {
  const [currentState, setCurrentState] = useState('Login')

  const submitHandler = (event) =>{
        event.preventDefault();
  }

  return (
    <form  onSubmit ={submitHandler} className="flex flex-col gap-4 w-[90%] sm:max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md text-gray-700">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-wide mb-1">
          {currentState}
        </h2>
        <div className="h-[2px] w-12 bg-gray-800 mx-auto mt-2 rounded"></div>
      </div>

      {currentState === 'Login' ? null : (
        <input
          type="text"
          placeholder="Enter Your Full Name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
        />
      )}

      <input
        type="email"
        placeholder="Enter Email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
      />

      <input
        type="password"
        placeholder="Enter Password"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
      />

      <div className="w-full flex justify-between text-sm text-gray-600">
        <p className="cursor-pointer hover:underline">Forgot your password?</p>
        {currentState === 'Login' ? (
          <p
            onClick={() => setCurrentState('Sign Up')}
            className="cursor-pointer hover:underline"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('Login')}
            className="cursor-pointer hover:underline"
          >
            Already have an account?
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-2 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
      >
        {currentState}
      </button>
    </form>
  )
}
