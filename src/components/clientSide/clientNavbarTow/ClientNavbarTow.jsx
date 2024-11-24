import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn, MdAccessTime } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';
// const pathname = useLocation();
// console.log(pathname);
const ClientNavbarTow = () => {
    return (
        <div>
            <div className="w-full">
                {/* Top Header Section */}
                <div className="bg-white border-b border-gray-200">
                    <div className="container mx-auto flex justify-between items-center px-4 py-2">
                        <h1 className="text-2xl font-bold text-red-600">Glorious Thai Spa</h1>
                        <div className="flex space-x-8">
                            {/* Address */}
                            <div className="flex items-center space-x-2">
                                <MdLocationOn className="text-pink-600 w-6 h-6" />
                                <div>
                                    <p className="text-sm text-gray-800 font-medium">
                                        House No 25, 3 Bir Uttam Mir Shawkat Sarak, Dhaka 1212
                                    </p>
                                    <p className="text-xs text-gray-500">Visit US</p>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="flex items-center space-x-2">
                                <FaPhoneAlt className="text-pink-600 w-5 h-5" />
                                <div>
                                    <p className="text-sm text-gray-800 font-medium">01988650874</p>
                                    <p className="text-xs text-gray-500">Call US</p>
                                </div>
                            </div>
                            {/* Schedule */}
                            <div className="flex items-center space-x-2">
                                <MdAccessTime className="text-pink-600 w-6 h-6" />
                                <div>
                                    <p className="text-sm text-gray-800 font-medium">Sat - Fri: 10am-10pm</p>
                                    <p className="text-xs text-gray-500">Open</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navbar Section */}
                <div className="bg-blue-600">
                    <div className="container mx-auto flex items-center justify-between px-4 py-2">
                        <div className="flex space-x-8">
                            <NavLink
                                to="/"
                                className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                to="/services"
                                className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                            >
                                SERVICES
                            </NavLink>
                            <NavLink
                                to="/about"
                                className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                            >
                                ABOUT
                            </NavLink>
                            <NavLink
                                href="/contact"
                                className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                            >
                                CONTACT
                            </NavLink>
                            <NavLink
                                href="/blog"
                                className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                            >
                                BLOG
                            </NavLink>
                        </div>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 text-white">
                            <NavLink href="#" className="hover:text-pink-600">
                                <FaFacebookF className="w-5 h-5" />
                            </NavLink>
                            <NavLink href="#" className="hover:text-pink-600">
                                <FaInstagram className="w-5 h-5" />
                            </NavLink>
                            <NavLink href="#" className="hover:text-pink-600">
                                <FaTwitter className="w-5 h-5" />
                            </NavLink>
                            <NavLink href="#" className="hover:text-pink-600">
                                <FaYoutube className="w-5 h-5" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientNavbarTow
