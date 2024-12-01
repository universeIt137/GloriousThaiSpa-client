import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

const ServiceThree = () => {
    // Services data stored in a variable
    const services = [
        {
            id: 1,
            title: "Sensual Massage",
            description: "Start from 7000 Taka",
            priceRange: "Range: 7000 - 14000 Taka",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731309165/ts2ku7vuccyc1pfqy1vp.jpg", // Replace with actual image URL
        },
        {
            id: 2,
            title: "Hot Stone Massage",
            description: "Start from 8000 Taka",
            priceRange: "Range: 8000 - 15000 Taka",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731307695/tytwyido3ulk4fwqxect.jpg", // Replace with actual image URL
        },
        {
            id: 3,
            title: "Swedish Massage",
            description: "Start from 6000 Taka",
            priceRange: "Range: 6000 - 12000 Taka",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731309165/ts2ku7vuccyc1pfqy1vp.jpg", // Replace with actual image URL
        },
    ];

    return (
        <div className="my-5" >
            <div
                className="min-h-screen  bg-cover bg-center text-white "
                style={{
                    width : "100%",
                    backgroundImage: "url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732953822/spa-banner-16_mzxjix.png')", // Replace with your background image URL
                }}
            >
                <div className="w-11/12 mx-auto " >
                    {/* Section Heading */}
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Text Section */}
                        <div className="lg:space-y-6 ">
                            <h1 className="lg:text-4xl font-bold text-yellow-400">
                                Unwind and Renew Your Body and Mind with Our Best Packages
                            </h1>
                            <p className="lg:text-lg text-[11px] text-gray-200 text-justify ">
                                Indulge in the ultimate relaxation and wellness experience with our
                                exceptional spa services in Dhaka. At Pure Body Spa BD, we offer a
                                comprehensive range of treatments that cater to your every need.
                                Immerse yourself in the soothing ambiance of our spa as our skilled
                                therapists transport you to a world of tranquility. Choose from an
                                array of rejuvenating massage therapies, from the stress-relieving
                                magic of Swedish massage to the deep relaxation of hot stone
                                massage. Our facial treatments are designed to leave your skin
                                radiant and refreshed, using only the finest natural ingredients.
                            </p>
                            <button className="lg:px-6 px-3 py-2 lg:text-[16px] text-[12px] lg:py-3 mt-2 lg:mt-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-bold shadow-lg transition transform hover:scale-105">
                                View all Services
                            </button>
                        </div>

                        {/* Carousel Section */}
                        <div className="relative -mt-5 lg:-mt-0 ">
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop
                                autoPlay
                                interval={4000}
                                showIndicators={false} // This removes the default pagination bullets
                                className="shadow-lg rounded-lg overflow-hidden"
                            >
                                {services.map((service, index) => (
                                    <div key={service.id} className="relative">
                                        <img src={service.image} alt={service.title} />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                                            <h3 className="lg:text-2xl font-bold">{service.title}</h3>
                                            <p className="lg:mt-2 lg:text-[16px] text-[10px] ">{service.description}</p>
                                            <p className=" lg:text-[16px] text-[12px] " >{service.priceRange}</p>
                                            <button className="lg:mt-4 mt-2 lg:px-4 p-1 text-[10px] lg:text-[16px] lg:py-2 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600">
                                                Select This
                                            </button>
                                        </div>

                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceThree;
