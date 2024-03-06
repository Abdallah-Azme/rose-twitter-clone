import RegisterModal from "@/components/modals/RegisterModal";
import React from "react";

export default function page() {
  return (
    <div className="w-full p-3 pl-5 sm:max-w-[500px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:p-10 bg-primary-foreground sm:rounded-3xl">
      <RegisterModal />
    </div>
  );
}
