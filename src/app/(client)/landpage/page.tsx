import AboutComponent from "./components/AboutComponent"
import Hero from "./components/Hero"
import InfoBreaker from "./components/InfoBreaker"
import LandingPageLayout from "./layout"

function LandingPage() {
  return (
    <main>
      <LandingPageLayout>
        <Hero />
        <InfoBreaker/>
        <AboutComponent/>
      </LandingPageLayout>
    </main>
    )
}

export default LandingPage