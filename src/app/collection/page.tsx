import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Collection from "./collection";

const Page = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Collection />
      <Footer />
    </div>
  );
};

export default Page;
