import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import Calendar from "../components/Calendar";
import { InputBox } from "../components/InputBox";
import { Layout } from "../components/Layout";
import { ReminderPreview } from "../components/ReminderPreview";
import { Reminders } from "../components/Reminders";
import { createUrqlClient } from "../utils/createUrqlClient";


const UserPanel = () => {
    const [text,setText] = useState('');
    const handleChange = (e) =>{
        e.preventDefault();
        setText(e.target.value)
    }
  return (
    <Layout>
        <Reminders />
    <div className="-ml-32 -mt-2">
        <Calendar />
        </div>
        <div className="ml-56 mt-10">
        <InputBox handleChange={handleChange}/>
        </div>
        <div className="float-right -mt-32 mr-28">
        <ReminderPreview date={'2021-10-2'} text={text}/>
        </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(UserPanel);
