import { withUrqlClient } from "next-urql";
import React from "react";
import { Layout } from "../components/Layout";
import { createUrqlClient } from "../utils/createUrqlClient";

const Subscription = () => {
  return (
    <Layout>
      <div className="flex justify-center leading-loose mt-32">
  <form className="max-w-xl m-4 p-10 bg-gray-50 rounded shadow-xl">
    <p className="text-gray-800 font-medium">Customer information</p>
    <div className="">
      <label className="block text-sm text-gray-00" >Name</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text"  placeholder="Your Name" aria-label="Name"/>
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-600" >Email</label>
      <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text"  placeholder="Your Email" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className=" block text-sm text-gray-600"> Payment information</label>
      <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text"  placeholder="Street" aria-label="Email"/>
    </div>
    <div className="inline-block mt-2 w-1/2 pr-1">
      <label className="hidden block text-sm text-gray-600" >Date of exp</label>
      <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" placeholder="Date of exp" aria-label="Email"/>
    </div>
    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label className="hidden block text-sm text-gray-600">CVV</label>
      <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" placeholder="CVV" aria-label="Email"/>
    </div>
    <div className="mt-4">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit"> Subscribe </button>
    </div>
  </form>
</div>
    </Layout>
  )
};

export default withUrqlClient(createUrqlClient)(Subscription)
