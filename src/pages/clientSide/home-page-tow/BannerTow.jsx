import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const carouselItems = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732594698/spa-1_ky88nl.jpg",
        heading: "adb",
        title: "afdiffsfsfff"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732594698/spa-4_aefgdn.jpg",
        heading: "adb",
        title: "afdiffsfsfff"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732594698/spa-2_krve8e.jpg",
        heading: "adb"
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732594698/spa-3_rex1b0.jpg",
        heading: "adb",
        title: "afdiffsfsfff"
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732594697/spa-5_ygjspe.jpg",
        heading: "adb",
        title: "afdiffsfsfff"
    },
];

const BannerTow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    // Automatically change slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full text-white md:h-screen">
            {carouselItems.length > 0 && (
                <div
                    className="relative py-8 md:py-0 w-full h-full flex items-center justify-center bg-cover bg-center transition-all duration-500"
                    style={{ backgroundImage: `url(${carouselItems[currentIndex]?.image})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Content */}
                    <div className="relative z-10 w-11/12 max-w-7xl mx-auto px-4 md:px-8 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
                        {/* Left Content */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-sm uppercase tracking-wide mb-2">Welcome to</h2>
                            <h1 className="text-3xl md:text-5xl  font-bold mb-4 leading-snug">
                                Best Spa in Dhaka Gulshan  Banani
                            </h1>
                            <p className="text-base md:text-lg text-justify leading-relaxed mb-6">
                                Before we talk about Spa in Gulshan, welcome to Pure Body Spa BD,
                                your haven of tranquility and rejuvenation. Indulge in a world of
                                ultimate relaxation as our skilled therapists guide you on a journey
                                to restore your body and mind. Stress-relief spa therapies. Here you
                                can get top body spa services in Gulshan.
                            </p>
                            <div className="relative inline-flex group">
                                {/* Gradient Background */}
                                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                                {/* Button */}
                                <a
                                    href="#"
                                    title="Get quote now"
                                    className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button"
                                >
                                    Know More
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="  overflow-hidden shadow-lg">
                                <img
                                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732601830/spa-6-removebg-preview_eoxwit.png"
                                    alt="Spa treatment"
                                    className=" object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    
                </div>
            )}
        </div>
    );
};

export default BannerTow;
