"use client";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

type HeaderProps = {
  label: string;
  showBackArrow?: boolean;
};

export default function Header({ label, showBackArrow }: HeaderProps) {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            size={20}
            className="cursor-pointer hover:opacity-70 transition "
            color="white"
          />
        )}
        <h1 className="text-white text-xl font-semibold ">{label}</h1>
      </div>
    </div>
  );
}