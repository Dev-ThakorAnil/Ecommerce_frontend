import { useContext } from "react";
import { ShopeContext } from "../context/ShopeContext";
import Title from "./Title";

export default function CartTotal() {
  const { delivery_fee, getCartAmount, currency } = useContext(ShopeContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-white rounded-lg">
      <div className="text-2xl font-semibold mb-4 text-start">
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className="flex flex-col gap-3 text-sm text-gray-700">
        <div className="flex justify-between border-b pb-2">
          <span>Subtotal</span>
          <span>
            {currency}
            {subtotal}.00
          </span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span>Shipping Fee</span>
          <span>
            {currency}
            {delivery_fee}
          </span>
        </div>

        <div className="flex justify-between font-bold text-base pt-2">
          <span>Total</span>
          <span>
            {currency}
            {total}
          </span>
        </div>
      </div>
    </div>
  );
}
