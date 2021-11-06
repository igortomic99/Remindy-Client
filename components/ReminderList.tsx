import { useRouter } from "next/dist/client/router";
import React from "react";
import { useUserRemindersQuery } from "../generated/graphql";

export const ReminderList = () => {
  const [{ data, error, fetching }] = useUserRemindersQuery();
  const router = useRouter();
  let body = null;
  if (fetching || !data?.userReminders) {
    body = (
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    );
  } else {
    body = (
      <div>
        {data.userReminders.map((r) => {
          return (
            <div className="py-1 text-sm">
              <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                <div 
                onClick={() =>{
                    router.push('/')
                }}
                className="flex-grow font-medium px-2 text-white">{r.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6">
        <p className="flex justify-center">Active reminders</p>
      <div className="flex justify-center p-2 px-3 py-4">
        <div className="w-full max-w-md">
            {body}
        </div>
      </div>
    </div>
  );
};
