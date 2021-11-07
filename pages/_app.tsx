import { useState } from "react";
import "tailwindcss/tailwind.css";
import DateContext, { defaultState } from "../context/dateContext";
import TimeContext, { defaultState as timeState } from "../context/timeContext";

const TimeProvider = ({ children }) => {
  const [hours, setHours] = useState(timeState.hours);
  const [minutes, setMinutes] = useState(timeState.minutes);
  return (
    <TimeContext.Provider
      value={{
        setHours: (Ihours) => {
          setHours(Ihours);
        },
        setMinutes: (Iminutes) => {
          setMinutes(Iminutes);
        },
        hours: hours,
        minutes: minutes,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

const DateProvider = ({ children }) => {
  const [day, setDay] = useState(defaultState.day);
  const [month, setMonth] = useState(defaultState.month);
  const [year, setYear] = useState(defaultState.year);
  return (
    <DateContext.Provider
      value={{
        setDate: (Iday, Imonth, Iyear) => {
          setDay(Iday);
          setYear(Iyear);
          setMonth(Imonth);
        },
        day: day,
        month: month,
        year: year,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <DateProvider>
      <TimeProvider>
        <Component {...pageProps} />
      </TimeProvider>
    </DateProvider>
  );
}

export default MyApp;
