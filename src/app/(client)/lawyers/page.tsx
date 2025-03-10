"use client";
import Banner from "@/components/Banner";
import LawyersAbout from "./components/LawyersAbout";

function Page() {
  return (
    <div >
     <Banner banner="Conheça nossa equipe" bg={"/assets/bg-1.png"}/>
     <LawyersAbout />
    </div>
  );
}

export default Page;