import Image from "next/image";

import { CartCounter } from "./cart-counter";

import type { CartItem } from "@/types";

export function CartItem({ name, image, price, rating }: CartItem) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex space-x-2">
      <Image
        alt="Boiled Dumplings"
        className="object-cover aspect-square rounded-lg"
        height="97"
        src={image}
        width="120"
      />
      <div className="flex flex-col space-y-2 flex-1">
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-500">{rating}</p>
        </div>

        <div className="flex items-center justify-between space-x-2">
          <p className="font-bold">${price}</p>

          <CartCounter />
        </div>
      </div>
    </div>
  );
}
