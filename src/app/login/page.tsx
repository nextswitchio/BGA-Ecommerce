import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Login from "./login";

const Page = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
};

export default Page;
