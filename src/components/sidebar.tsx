"use client";

import { useState } from "react";
import clsx from "clsx";

import { Button } from "./ui/button";
import {
  BarChartIcon,
  DinningIcon,
  GridViewIcon,
  ListAltIcon,
  LogOutIcon,
  NotificationIcon,
  SettingsIcon,
  StockpotIcon,
} from "./icons";

export function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="hidden flex-col bg-gradient-to-t from-secondary to-primary p-7 rounded-2xl md:flex">
      <Button
        variant="ghost"
        className="hover:bg-transparent p-0 w-fit"
        onClick={() => setExpanded(!expanded)}
      >
        <DinningIcon className="h-11 w-11 text-white" />
      </Button>

      <nav className="mt-24 flex-1 flex flex-col items-center justify-between gap-10">
        <ul className="flex flex-col gap-10">
          <SidebarItem
            icon={<StockpotIcon className="h-5 w-5 text-white" />}
            text="Dashboard"
            expanded={expanded}
          />
          <SidebarItem
            icon={<ListAltIcon className="h-5 w-5 text-white" />}
            text="Orders"
            expanded={expanded}
          />
          <SidebarItem
            icon={<BarChartIcon className="h-5 w-5 text-white" />}
            text="Reports"
            expanded={expanded}
          />
          <SidebarItem
            icon={<GridViewIcon className="h-5 w-5 text-white" />}
            text="Calendar"
            expanded={expanded}
          />
          <SidebarItem
            icon={<NotificationIcon className="h-5 w-5 text-white" />}
            text="Notifications"
            expanded={expanded}
            alert
          />
          <SidebarItem
            icon={<SettingsIcon className="h-5 w-5 text-white" />}
            text="Settings"
            expanded={expanded}
          />
        </ul>

        <ul>
          <SidebarItem
            icon={<LogOutIcon className="h-5 w-5 text-white" />}
            text="Sign Out"
            expanded={expanded}
          />
        </ul>
      </nav>
    </div>
  );
}

interface SidebarItemProps {
  icon: JSX.Element;
  text: string;
  active?: boolean;
  alert?: boolean;
  expanded?: boolean;
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
  expanded,
}: SidebarItemProps) {
  return (
    <li
      className={clsx(
        "relative flex items-center p-[10px] font-medium rounded-md cursor-pointer transition-colors group",
        active ? "bg-white/30" : "hover:bg-white/30"
      )}
    >
      {icon}
      <span
        className={clsx(
          "overflow-hidden transition-all",
          active ? "text-gray-600" : "text-white",
          expanded ? "w-52 ml-3" : "w-0"
        )}
      >
        {text}
      </span>
      {alert && (
        <div
          className={clsx(
            "absolute w-2 h-2 rounded bg-gray-300 top-2",
            expanded ? "left-6" : "right-2"
          )}
        />
      )}

      {!expanded && (
        <div
          className={clsx(
            "absolute left-full rounded-md px-2 py-1 ml-6 bg-gray-300/80 text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-50"
          )}
        >
          {text}
        </div>
      )}
    </li>
  );
}
