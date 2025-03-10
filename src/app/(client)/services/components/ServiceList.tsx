import { servicesTexts } from "../../(constants)/servicesTextsConstants";
import ServiceCard from "./ServiceCard";


const ServiceList = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesTexts.map((service, index) => (
         <ServiceCard
          key={index + 23}
          icon={service.icon}
          title={service.title}
          description={service?.description}
          subTitle={service?.subTitle}
          phoneNumber={service.phoneNumber}
          moreInfo={service.moreInfo}
          />
                  ))}
      </div>
    </div>
  </section>
);

export default ServiceList;
