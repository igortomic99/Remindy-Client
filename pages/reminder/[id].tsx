import { withUrqlClient } from "next-urql";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Layout } from "../../components/Layout";
import { ReminderPreview } from "../../components/ReminderPreview";
import { useReminderQuery, useUpdateReminderMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const Reminder = () => {
  const router = useRouter();
  const id = router.query.id as any;
  const [{ data, error, fetching }] = useReminderQuery({
    variables: {
      id,
    },
  });
  const [,updateReminder] = useUpdateReminderMutation();
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
  let ID = '';
  let text = '';
  let date = new Date(data.reminder.date);
  //// DONT WANT TO PAY FOR MONGODB SO THEREFORE THIS PAGE IS NOT BEING DEVELOPED TO THE END
  return (
    <Layout>
      <div className="flex justify-center items-center mt-96 pt-44">
        <div className="card relative p-6 border w-96 h-96 bg-gray-300 rounded-md shadow-md -mt-96">
          <div className="title font-semibold text-lg mb-2">Your Reminder</div>
          <div className="text-sm break-all">{date.toUTCString()}</div>
          <div className="text-sm h-56 break-all">{data.reminder.text}</div>
          <button
            onClick={async () => {
                await updateReminder({id:ID,date,text})
            }}
            className="w-full bg-gray-200 rounded-md text-center mt-10"
          >
            Update
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Reminder);
