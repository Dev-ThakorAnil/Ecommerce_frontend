import { useContext, useEffect, useState } from "react";
import { ShopeContext } from "../context/ShopeContext";
import { assets } from "../assets/assets";
import CartTotal from "./CartTotal";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ isOpen, onClose }) {
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
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 transition-opacity z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 text-xl">×</button>
        </div>

        <div className="px-5 pt-4 overflow-y-auto h-[calc(100%-200px)]">
          {cartData.map((item, index) => {
            const productData = products.find((p) => p._id === item._id);
            return (
              <div key={index} className="flex items-center gap-4 py-4 border-b">
                <img src={productData.image[0]} className="w-16" alt="" />
                <div className="flex-1">
                  <p className="font-medium">{productData.name}</p>
                  <p className="text-sm text-gray-600">
                    {currency}{productData.price} • Size: {item.size}
                  </p>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      onClick={() =>
                        UpdateQuantity(item._id, item.size, item.quantity > 1 ? item.quantity - 1 : 1)
                      }
                      className="px-2 bg-gray-200 rounded"
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
                      className="w-10 text-center border rounded"
                    />
                    <button
                      onClick={() =>
                        UpdateQuantity(item._id, item.size, item.quantity + 1)
                      }
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <img
                      onClick={() => UpdateQuantity(item._id, item.size, 0)}
                      src={assets.bin_icon}
                      alt="Delete"
                      className="w-4 ml-auto cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-5 border-t">
          <CartTotal />
          <button
            onClick={() => {
              onClose();
              navigate("/place-order");
            }}
            className="w-full mt-4 bg-black text-white py-2"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
}
