import Banner from "@/components/Banner"
import ContactsComponent from "./components/ContactComponent"

function Contact() {
  return (
    <div>
           <Banner banner="Fale conosco" bg={"/assets/bg-3.png"}/>  
           <ContactsComponent/>
    </div>
  )
}

export default Contact