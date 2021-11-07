import { withUrqlClient } from "next-urql";
import React, { useContext, useState } from "react";
import Calendar from "../components/Calendar";
import { InputBox } from "../components/InputBox";
import { Layout } from "../components/Layout";
import { ReminderPreview } from "../components/ReminderPreview";
import { Reminders } from "../components/Reminders";
import DateContext from "../context/dateContext";
import { createUrqlClient } from "../utils/createUrqlClient";

const UserPanel = () => {
  const [text, setText] = useState("");
  const { day, month, year } = useContext(DateContext);
  let date = new Date(year, month, day);
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  return (
    <Layout>
      <Reminders />
      <div className="-ml-28 -mt-2">
        <Calendar />
      </div>
      <div className="ml-56 mt-10">
        <InputBox handleChange={handleChange} />
      </div>
      <div className="float-right -mt-32 mr-28">
        <ReminderPreview text={text} />
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(UserPanel);
