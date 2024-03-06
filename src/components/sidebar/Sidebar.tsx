import React from "react";
import SidebarLogo from "./SidebarLogo";
import { navItems } from "@/constants";
import SidebarItem from "./SidebarItem";
import { BiLogOut } from "react-icons/bi";
import SidebarTweetButton from "./SidebarTweetButton";

export default function Sidebar() {
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {navItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItem href="/logout" icon={BiLogOut} label="Logout" />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
}
