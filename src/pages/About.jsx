import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      {/* About Section */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      {/* Vision Section */}
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to improve patient care and simplify the
            healthcare process.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every patient and provider.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20 gap-3">
        {/* Features */}
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all  duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits your schedule.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all  duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare providers.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Personalization:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>

      {/* Call to Action Button
      <div className="text-center">
        <button className="px-10 py-3 bg-primary text-white rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          Learn More
        </button>
      </div> */}
    </div>
  );
};

export default About;
