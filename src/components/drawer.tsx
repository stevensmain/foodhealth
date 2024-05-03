"use client";

import { useState } from "react";
import clsx from "clsx";

import { Button } from "./ui/button";
import { SidebarItem } from "./sidebar";
import {
  MenuIcon,
  BarChartIcon,
  GridViewIcon,
  ListAltIcon,
  NotificationIcon,
  SettingsIcon,
  StockpotIcon,
  CloseIcon,
} from "./icons";

export function Drawer() {
  const [show, setShow] = useState<boolean>(false);

  const toggle = () => setShow(!show);

  return (
    <div>
      <Button
        variant="ghost"
        className="text-[#ff5724] md:hidden"
        onClick={toggle}
      >
        <MenuIcon />
      </Button>

      <div
        className={clsx(
          "fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform bg-primary w-80 dark:bg-gray-800",
          show ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Button
          variant="ghost"
          className="relative ml-auto text-white block"
          onClick={toggle}
        >
          <CloseIcon className="h-5 w-5" />
        </Button>
        <ul className="flex flex-col gap-10">
          <SidebarItem
            icon={<StockpotIcon className="h-5 w-5 text-white" />}
            text="Dashboard"
            expanded
          />
          <SidebarItem
            icon={<ListAltIcon className="h-5 w-5 text-white" />}
            text="Orders"
            expanded
          />
          <SidebarItem
            icon={<BarChartIcon className="h-5 w-5 text-white" />}
            text="Reports"
            expanded
          />
          <SidebarItem
            icon={<GridViewIcon className="h-5 w-5 text-white" />}
            text="Calendar"
            expanded
          />
          <SidebarItem
            icon={<NotificationIcon className="h-5 w-5 text-white" />}
            text="Notifications"
            expanded
            alert
          />
          <SidebarItem
            icon={<SettingsIcon className="h-5 w-5 text-white" />}
            text="Settings"
            expanded
          />
        </ul>
      </div>
    </div>
  );
}
