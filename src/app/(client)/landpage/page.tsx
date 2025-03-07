import AboutComponent from "./components/AboutComponent"
import WhatsAppButton from "./components/ButtonWpp"
import ContactsComponent from "./components/ContactComponent"
import Hero from "./components/Hero"
import InfoBreaker from "./components/InfoBreaker"

function LandingPage() {
  return (
    <main>
      <Hero />
      <InfoBreaker/>
      <AboutComponent/>
      <ContactsComponent/>
      <WhatsAppButton/>  
    </main>
    )
}

export default LandingPage