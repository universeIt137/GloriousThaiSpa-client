import React from "react";
import { FaGoogle, FaFacebook, FaThumbsUp } from "react-icons/fa";

const SpaSection = () => {
    return (
        <div
            className="bg-cover bg-center text-white py-10 "
            style={{
                backgroundImage: `url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732608788/spa-9_kyll3r.png')`, // Replace with the actual background image URL
            }}
        >
            <div className=" py-16 px-8">
                <div className="container w-11/12  mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
                    {/* Image Section */}
                    <div className="relative w-full md:w-1/2 h-64 md:h-80">
                        <div className="rounded-full overflow-hidden w-full h-full">
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732601830/spa-6-removebg-preview_eoxwit.png" // Replace with the actual image link
                                alt="Spa Relaxation"
                                className="object-cover rounded-full w-[400px] h-[400px] "
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Best Relaxation Body Massage in Dhaka
                        </h1>
                        <div className="w-16 h-1 bg-gray-400 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-lg text-gray-300 text-justify leading-relaxed mb-6">
                            Step into Pure Body Spa and embrace a world of serenity and
                            renewal. We are not just a spa – we are a destination for
                            holistic well-being, a refuge for restoration, and a space to
                            reconnect with your inner tranquility. We look forward to
                            welcoming you and curating moments of pure relaxation in the heart
                            of Dhaka. Our dedicated team is here to guide you on a path
                            towards wellness and self-discovery.
                        </p>

                        {/* Statistics Section */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
                            {/* Stat 1 */}
                            <div className="flex items-center gap-4 bg-blue-800 p-4 rounded-lg shadow-lg">
                                <div className="bg-blue-700 p-3 rounded-full">
                                    <FaGoogle className="text-2xl text-pink-500" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-pink-500">4950</p>
                                    <p className="text-sm text-gray-300">Appreciations</p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex items-center gap-4 bg-blue-800 p-4 rounded-lg shadow-lg">
                                <div className="bg-blue-700 p-3 rounded-full">
                                    <FaFacebook className="text-2xl text-pink-500" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-pink-500">2234</p>
                                    <p className="text-sm text-gray-300">Followers</p>
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex items-center gap-4 bg-blue-800 p-4 rounded-lg shadow-lg">
                                <div className="bg-blue-700 p-3 rounded-full">
                                    <FaThumbsUp className="text-2xl text-pink-500" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-pink-500">4015</p>
                                    <p className="text-sm text-gray-300">Likes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpaSection;
