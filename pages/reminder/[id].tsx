import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/dist/client/router";
import React, { useContext, useState } from "react";
import Calendar from "../../components/Calendar";
import { Layout } from "../../components/Layout";
import { ReminderPreview } from "../../components/ReminderPreview";
import { TimePicker } from "../../components/TimePicker";
import DateContext from "../../context/dateContext";
import TimeContext from "../../context/timeContext";
import {
  useReminderQuery,
  useUpdateReminderMutation,
} from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const Reminder = () => {
  const router = useRouter();
  const { day, month, year } = useContext(DateContext);
  const { hours, minutes } = useContext(TimeContext);
  const id = router.query.id as any;
  const [{ data, error, fetching }] = useReminderQuery({
    variables: {
      id,
    },
  });
  let date = new Date(year, month, day, hours, minutes);
  const [, updateReminder] = useUpdateReminderMutation();
  const [text, setText] = useState(data?.reminder.text);
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  if (fetching || !data.reminder) {
    return (
      <Layout>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mr-96 pr-96">
        <Calendar />
      </div>
      <div className="-ml-96 mr-96 pr-96 mt-32">
        <TimePicker />
      </div>
      <div className="flex justify-center items-center ml-44">
        <div className="card relative p-6 border w-96 h-96 bg-gray-300 rounded-md shadow-md -mt-96">
          <div className="title font-semibold text-lg mb-2">Your Reminder</div>
          <div className="text-sm break-all">{date.toUTCString()}</div>
          <Formik
            initialValues={{ text: "" }}
            onSubmit={async (values, { setErrors }) => {
              const response = await updateReminder({
                id,
                date,
                text,
              });
              if (response.data?.updateReminder) {
                router.push("/user-panel")
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <textarea
                    value={text}
                    onChange={handleChange}
                    className=" w-96 h-48 resize-none border focus:ring-gray-500 rounded-md bg-gray-300 -ml-6 mt-2 text-black "
                  ></textarea>
                </div>
                <button
                  className="w-full bg-gray-200 rounded-md text-center mt-10"
                  type="submit"
                >
                  Update
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Reminder);
