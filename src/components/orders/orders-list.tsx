import { Button } from "../ui/button";
import { OrderCard } from "./order-card";

import type { Order } from "@/types";

interface OrdersListProps {
  orders: Order[];
}

export function OrdersList({ orders = [] }: OrdersListProps) {
  return (
    <div className="px-6 md:px-0">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Order</h3>
        <Button variant="ghost" className="text-[#FFB74B] p-0">
          See all
        </Button>
      </div>

      <div className="flex flex-col space-y-2">
        {orders.length === 0 && <p className="text-gray-500">No orders yet</p>}
        {orders.length > 0 &&
          orders.map((order, index) => <OrderCard key={index} {...order} />)}
      </div>
    </div>
  );
}
