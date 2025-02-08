import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Signup from "./signup";

const Page = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Signup />
      <Footer />
    </div>
  );
};

export default Page;
