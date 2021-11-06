import { withUrqlClient } from "next-urql";
import React from "react";
import { createUrqlClient } from "../utils/createUrqlClient";

const Subscription = () => {
  return <div>Page for paying the subscription</div>;
};

export default withUrqlClient(createUrqlClient)(Subscription)
