import CaseStudies from './components/case-studies';
import Header from './components/header';
import HeroSection from './components/hero-section';
import Testimonials from './components/testimonials';
import GetInfo from './components/get-info';
import Footer from './components/footer';

function App() {
  return (
    <div className="page">
      <Header />
      <HeroSection />
      <CaseStudies />
      <Testimonials />
      <GetInfo />
      <Footer />
    </div>
  );
}

export default App;
