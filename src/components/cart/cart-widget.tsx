import { CartItem } from "./cart-item";
import { NotificationIcon } from "../icons";
import { cart } from "@/mocks";

export function CartWidget() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">My Cart</h3>
        <NotificationIcon className="h-6 w-6 text-gray-400" />
      </div>
      <p className="text-sm text-gray-500">Shopping is happy</p>

      <div className="flex flex-col space-y-2">
        {cart.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
