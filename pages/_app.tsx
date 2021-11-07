import { useState } from "react";
import "tailwindcss/tailwind.css";
import DateContext, { defaultState } from "../context/dateContext";

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
        day:day,
        month:month,
        year:year
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <DateProvider>
      <Component {...pageProps} />
    </DateProvider>
  );
}

export default MyApp;
