import { withUrqlClient } from "next-urql";
import React from "react";
import Calendar from "../components/Calendar";
import { InputBox } from "../components/InputBox";
import { Layout } from "../components/Layout";
import { Reminders } from "../components/Reminders";
import { createUrqlClient } from "../utils/createUrqlClient";

const UserPanel = () => {
  return (
    <Layout>
        <Reminders />
    <div className="ml-44 -mt-2">
        <Calendar />
        </div>
        <div className="ml-96 mt-10">
        <InputBox/>
        </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(UserPanel);
