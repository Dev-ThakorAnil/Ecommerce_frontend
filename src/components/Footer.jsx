import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-small">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt=""></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Eaque aut blanditiis perspiciatis animi cupiditate <br />
            sapiente consectetur et nesciunt soluta aliquid!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET INTO TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9989989989</li>
            <li>contact@me.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="py-5 text-sm text-center">
        <p> Copyright 2025@ me.com All Right Reserved</p>{" "}
      </div>
    </div>
  );
}