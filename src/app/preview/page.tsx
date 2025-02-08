import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Preview from "./preview";
import Likes from "./likes"

const Page = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Preview />
      <Likes />
      <Footer />
    </div>
  );
};

export default Page;
