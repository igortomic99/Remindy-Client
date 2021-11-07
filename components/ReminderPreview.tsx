import React, { useContext } from "react";
import DateContext from "../context/dateContext";
import { useAddReminderMutation } from "../generated/graphql";

export const ReminderPreview = ({ text }) => {
    const [,addReminder] = useAddReminderMutation();
    const { day, month, year } = useContext(DateContext);
    let date = new Date(year, month, day);
  return (
    <div className="card relative p-6 border w-96 h-96 bg-gray-300 rounded-md shadow-md -mt-96">
      <div className="title font-semibold text-lg mb-2">Your Reminder</div>
      <div className="text-sm break-all">{date.toUTCString()}</div>
      <div className="text-sm h-56 break-all">{text}</div>
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
