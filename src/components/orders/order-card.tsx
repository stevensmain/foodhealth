import Image from "next/image";

import { Button } from "../ui/button";

import type { Order } from "@/types";

export function OrderCard({ title, date, image }: Order) {
  return (
    <div className="flex space-x-2 items-center bg-white p-4 rounded-lg shadow">
      <Image
        className="rounded-lg h-24 w-24 md:h-20 md:w-20 aspect-square object-cover"
        alt={title}
        height="150"
        src={image}
        width="150"
      />

      <div className="flex flex-wrap justify-between gap-1 flex-1">
        <div>
          <h4 className="text-black font-bold">{title}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>

        <Button variant="primary" className="rounded-full">
          Order Again
        </Button>
      </div>
    </div>
  );
}
