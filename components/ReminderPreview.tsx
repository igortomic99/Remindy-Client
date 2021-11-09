import React, { useContext, useState } from "react";
import DateContext from "../context/dateContext";
import TimeContext from "../context/timeContext";
import { useAddReminderMutation, useMeQuery } from "../generated/graphql";

export const ReminderPreview = ({ text }) => {
  const [, addReminder] = useAddReminderMutation();
  const [alert, setAlert] = useState(null);
  const { day, month, year } = useContext(DateContext);
  const { hours, minutes } = useContext(TimeContext);
  let date = new Date(year, month, day, hours, minutes);
  const [{ data, error, fetching }] = useMeQuery();
  const phoneNumber = String(data?.me.phoneNumber);

  return (
    <div className="card relative p-6 border w-96 h-96 bg-gray-300 rounded-md shadow-md -mt-96">
      {alert}
      <div className="title font-semibold text-lg mb-2">Your Reminder</div>
      <div className="text-sm break-all">{date.toUTCString()}</div>
      <div className="text-sm h-56 break-all">{text}</div>
      <button
        onClick={async () => {
          const result = await addReminder({ phoneNumber, date, text });
          if (result?.data) {
            setAlert(
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">Successful</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title
                      onClick={() => {
                        setAlert(null);
                      }}
                    >
                      Close
                    </title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            );
          }
          if (result?.error?.message.includes("wrong date")) {
            setAlert(
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">
                  Our time machine is currently in development, please input
                  future date.
                </span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title
                      onClick={() => {
                        setAlert(null);
                      }}
                    >
                      Close
                    </title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            );
          }
        }}
        className="w-full bg-gray-200 rounded-md text-center mt-10"
      >
        Commit
      </button>
    </div>
  );
};
