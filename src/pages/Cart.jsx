import  { useContext, useEffect, useState } from "react";
import { ShopeContext } from "../context/ShopeContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { products, currency, cartItems, UpdateQuantity } = useContext(ShopeContext);
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_1.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* UPDATED Quantity Selector */}
              <div className="flex items-center justify-center border rounded overflow-hidden w-full max-w-[100px] text-sm sm:text-base">
                <button
                  onClick={() =>
                    UpdateQuantity(
                      item._id,
                      item.size,
                      item.quantity > 1 ? item.quantity - 1 : 1
                    )
                  }
                  className="px-2 sm:px-3 py-1 sm:py-2 text-lg font-bold bg-gray-100 hover:bg-gray-200 transition"
                >
                  –
                </button>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value >= 1) {
                      UpdateQuantity(item._id, item.size, value);
                    }
                  }}
                  className="w-8 sm:w-10 text-center outline-none border-x border-gray-300 py-1 sm:py-2"
                />
                <button
                  onClick={() =>
                    UpdateQuantity(item._id, item.size, item.quantity + 1)
                  }
                  className="px-2 sm:px-3 py-1 sm:py-2 text-lg font-bold bg-gray-100 hover:bg-gray-200 transition"
                >
                  +
                </button>
              </div>

              <img
                onClick={() => UpdateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                alt=""
                className="w-4 mr-4 sm:w-5 cursor-pointer"
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 p-3"
            >
              PROCESS TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
