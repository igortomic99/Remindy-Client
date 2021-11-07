import { withUrqlClient } from "next-urql";
import React from "react";
import { ReminderList } from "../components/ReminderList";
import { ReminderPreview } from "../components/ReminderPreview";
import { TimePicker } from "../components/TimePicker";
import { createUrqlClient } from "../utils/createUrqlClient";

const Subscription = () => {
  return <div>Page for paying the subscription
    <TimePicker/>
  </div>;
};

export default withUrqlClient(createUrqlClient)(Subscription)
