import React from "react";
import Title from "../components/title";
import { assets } from "../assets/assets";
import NewsLetterBox from '../components/NewsLetterBox';

export default function Contact() {
  return (
    <div className="pt-10 border-t">
      {/* Section Title */}
      <div className="text-center mb-8">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-8">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={assets.contact_img}
            alt="Contact"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div>
            <h2 className="font-semibold text-2xl mb-2">Our Store</h2>
            <p className="text-gray-600">123 Main Street, City, Country</p>
            <p className="text-gray-600">Open: Mon - Sat, 9 AM - 8 PM</p>
          </div>

          <div>
            <h2 className="font-semibold text-2xl mb-2">Get in Touch</h2>
            <p className="text-gray-600">Phone: +123 456 7890</p>
            <p className="text-gray-600">Email: contact@yourstore.com</p>
          </div>

          <div>
            <h2 className="font-semibold text-2xl mb-2">We’d Love to Hear From You</h2>
            <p className="text-gray-600">
              Whether you have a question or just want to say hi.
            </p>
          </div>

          <button className="w-max px-6 py-2 border border-black bg-white text-black hover:bg-black hover:text-white transition">
            Explore More
          </button>
        </div>
      </div>
      <div className="mt-12 mb-4">
        <NewsLetterBox/>
      </div>
    </div>
  );
}
