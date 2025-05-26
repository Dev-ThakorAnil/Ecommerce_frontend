import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

export default function About() {
  return (
    <div className="pt-10 border-t">
  {/* Section Title */}
  <div className="text-center mb-8">
    <Title text1={"ABOUT"} text2={"US"} />
  </div>

  {/* Main Content */}
  <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-8">
    {/* Left Side - Image */}
    <div className="w-full lg:w-1/2">
      <img
        src={assets.about_img} // You can change this to a team or store image if needed
        alt="About Us"
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>

    {/* Right Side - Info */}
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <div>
        <h2 className="font-semibold text-2xl mb-2">Who We Are</h2>
        <p className="text-gray-600">
          We are a passionate team dedicated to bringing you the best shopping experience. 
          Our mission is to provide quality products, excellent service, and a seamless online store.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-2xl mb-2">Our Journey</h2>
        <p className="text-gray-600">
          Founded in [Year], our store started with a simple vision: to make premium products accessible to everyone. 
          We've grown thanks to the love and trust of our amazing customers.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-2xl mb-2">Our Values</h2>
        <p className="text-gray-600">
          We believe in authenticity, customer satisfaction, and creating value in everything we do. 
          Every product we offer is handpicked and tested to ensure top-notch quality.
        </p>
      </div>

      <button className="w-max px-6 py-2 border border-black bg-white text-black hover:bg-black hover:text-white transition">
        Learn More
      </button>
    </div>
  </div>

  <div className="mt-12 mb-4">
  <NewsLetterBox/>
  </div>
</div>

  );
}
