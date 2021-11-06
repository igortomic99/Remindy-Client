import React from "react";

export const Reminders = () => {
  return (
    <>
      <div className="fixed flex h-full">
        <div className="absolute flex top-0 h-screen">
          <div className="bg-gray-200 overflow-hidden flex justify-center">
            <div className="flex w-80 mt-10 font-bold text-xl text-white justify-center">Active reminders</div>
          </div>
        </div>
      </div>
    </>
  );
};
