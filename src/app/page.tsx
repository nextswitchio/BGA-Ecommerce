import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "./home/hero";
import Collections from "./home/collections";
import ForYou from "./home/forYou";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Collections />
      <ForYou />
      <Footer />
    </div>
  );
}
