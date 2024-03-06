import LoginModal from "@/components/modals/LoginModal";
import React from "react";

export default function page() {
  return (
    <div className="w-full p-3 sm:max-w-[500px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:p-20 bg-primary-foreground sm:rounded-3xl">
      <LoginModal />
    </div>
  );
}
