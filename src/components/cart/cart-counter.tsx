"use client";

import { useState } from "react";

import { Button } from "../ui/button";
import { AddIcon, RemoveIcon } from "../icons";

export function CartCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((c) => c + 1);
  const decrement = () => setCounter((c) => (c > 0 ? c - 1 : c));

  return (
    <div className="flex items-center space-x-2">
      <Button
        className="rounded-full bg-gray-300 hover:bg-gray-300/80"
        onClick={decrement}
      >
        <RemoveIcon />
      </Button>
      <p>{counter}</p>
      <Button variant="secondary" className="rounded-full" onClick={increment}>
        <AddIcon />
      </Button>
    </div>
  );
}
