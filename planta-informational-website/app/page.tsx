import Header from './components/Header'
import Footer from './components/Footer'
import HomeSection from './home/HomeSection'
import AboutSection from './about/AboutSection'
import HowItWorksSection from './howItWorks/HowItWorksSection'
import FAQSection from './faq/FAQSection'

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <HowItWorksSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}