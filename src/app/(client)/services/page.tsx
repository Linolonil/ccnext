"use client"
import Banner from "@/components/Banner"
import ServiceList from "./components/ServiceList"

function Services() {
  return (
    <div>
      <Banner banner="Nossas Especialidades" bg={"/assets/bg-2.png"}/>
      <ServiceList/>
    </div>
  )
}

export default Services