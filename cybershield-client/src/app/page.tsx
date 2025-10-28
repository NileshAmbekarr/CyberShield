// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import About from "./components/About";
// import Blog from "./components/Blog";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";

import OrganizationHero from "./components/Hero/index"
import ServicesSection from "./components/Services/index"
import AboutSection from "./components/About/index"

export default function Home() {
  return (
    <>
      <section id="home"><OrganizationHero /></section>
      <section id="services"><ServicesSection/></section>
      <section id="about"> <AboutSection/> </section>
    </>
  );
}
