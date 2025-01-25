import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");

    const togglePasswordVisibility = (field) => {
        if (field === "password") {
            setPasswordType(passwordType === "password" ? "text" : "password");
        } else if (field === "confirmPassword") {
            setConfirmPasswordType(confirmPasswordType === "password" ? "text" : "password");
        }
    };



    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <Helmet>
                <title>Glorious | Registration Page</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center mb-6">Registration From</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                        Password
                    </label>
                    <input
                        type={passwordType}
                        id="password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        onClick={() => togglePasswordVisibility("password")}
                    >
                        {passwordType === "password" ? <FaEyeSlash className="mt-7" /> : <FaEye className="mt-7" />}
                    </button>
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-1">
                        Confirm Password
                    </label>
                    <input
                        type={confirmPasswordType}
                        id="confirm-password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Confirm your password"
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        onClick={() => togglePasswordVisibility("confirmPassword")}
                    >
                        {confirmPasswordType === "password" ? <FaEyeSlash className="mt-7" /> : <FaEye className="mt-7" />}
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Register
                </button>
                <Link className="block mt-2" to={`/login`}>You Have Already Account? <span className="hover:underline" >LoginIn</span> </Link>
            </form>
        </div>
    );
};

export default RegistrationForm;
