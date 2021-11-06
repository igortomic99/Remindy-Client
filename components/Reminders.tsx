import React from "react";
import { ReminderList } from "./ReminderList";

export const Reminders = () => {
  return (
    <>
      <div className="fixed flex h-full">
        <div className="absolute flex top-0 h-screen">
          <div className="bg-gray-300 overflow-hidden flex justify-center">
            <div className="flex w-72 mt-10 font-bold text-xl text-white justify-center ">
             <ReminderList/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
