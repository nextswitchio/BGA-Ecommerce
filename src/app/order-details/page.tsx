import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import OrderDetails from "./orderDetails";

const Page = () => {
  return (
    <div className="w-full">
      <Navbar />
      <OrderDetails />
      <Footer />
    </div>
  );
};

export default Page;
