import React from 'react'

const BannerTow = () => {
    return (
        <div>
            <div className="relative text-white min-h-screen ">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: `url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730876761/11.%20SPA-Center/HomePage/g04w8p5ifiyd4of6kbya.png')` }}></div>
                <div className="relative p-6  max-w-2xl  text-justify z-10">
                    <h2 className="text-sm mt-16 uppercase tracking-wide mb-2">Welcome to</h2>
                    <h1 className="text-4xl font-bold mb-4">Best Spa in Dhaka Gulshan <br /> Banani</h1>
                    <p className="text-lg leading-relaxed mb-6">
                        Before we talk about Spa in Gulshan, welcome to Pure Body Spa BD, your haven of tranquility and rejuvenation.
                        Indulge in a world of ultimate relaxation as our skilled therapists guide you on a journey to restore your body and mind.
                        Our spa massage treatments are meticulously crafted to offer you an experience that revitalizes, refreshes, and renews.
                        Stress-relief spa therapies. Here you can get top body spa services in Gulshan.
                    </p>
                    <div className="relative inline-flex group">
                        {/* Gradient Background */}
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                        {/* Button */}
                        <a
                            href="#"
                            title="Get quote now"
                            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Know More
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="absolute inset-y-0 right-0 flex items-center justify-center">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730893172/11.%20SPA-Center/HomePage/qfoj89kktqvchpooecav.jpg"
                            alt="Spa treatment"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerTow
