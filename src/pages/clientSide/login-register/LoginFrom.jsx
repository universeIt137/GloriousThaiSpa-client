import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginAlert } from "../../../helper/loginAlert";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const axiosPublic = useAxiosPublic();
    const [passwordType, setPasswordType] = useState("password");

    const togglePasswordVisibility = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    };

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const payload = {
            email, password
        };
        try {
            let resp = await loginAlert();
            if (resp.isConfirmed) {
                setLoading(true);
                let res = await axiosPublic.post(`/user-login`, payload);
                setLoading(false);
                if (res) {
                    localStorage.setItem("token", res.data?.token);
                    localStorage.setItem("role", res.data?.role);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User login successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/dashboard")
                    e.target.reset()
                }

            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User login fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
                <form onSubmit={handleSubmit} >
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type={passwordType}
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        >
                            {passwordType === "password" ? <FaEyeSlash className="mt-6" /> : <FaEye className="mt-6" />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        {
                            loading ? "login...." : "Login"
                        }
                    </button>
                    <Link className="block mt-2" to={`/registration`}>You Have No Account? Please ! <span className="hover:underline" >Registration</span> </Link>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
