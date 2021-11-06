import React from "react";
import { useAddReminderMutation } from "../generated/graphql";

export const ReminderPreview = ({ text,date }) => {
    const [,addReminder] = useAddReminderMutation();
  return (
    <div className="card relative p-6 border w-96 h-96 bg-gray-300 rounded-md shadow-md -mt-96">
      <div className="title font-semibold text-lg mb-2">Your Reminder</div>
      <div className="text-sm h-60 break-all">{text}</div>
      <button
       onClick={async () =>{
        await addReminder({date,text});
       }}
       className="w-full bg-gray-200 rounded-md text-center mt-10">
        Commit
      </button>
    </div>
  );
};
