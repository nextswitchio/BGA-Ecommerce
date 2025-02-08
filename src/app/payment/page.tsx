import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Payment from "./payment";

const Page = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Payment />
      <Footer />
    </div>
  );
};

export default Page;
